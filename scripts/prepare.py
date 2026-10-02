"""Prepare the static data and the standalone offline copy; standard Python only."""
from pathlib import Path
import base64
import json
import re

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'dist'
data = json.loads((OUT / 'fiches.json').read_text())
ids = [oil['id'] for oil in data['oils']]
assert len(ids) == len(set(ids)), 'Identifiants de fiches dupliqués'
assert data['oils'], 'Aucune fiche'
js = 'window.CAPA_DATA = ' + json.dumps(data, ensure_ascii=False) + ';\n'
(OUT / 'data.js').write_text(js)
page = (OUT / 'index.html').read_text()
css = (OUT / 'styles.css').read_text()
page = re.sub(r'<link rel="stylesheet" href="styles\.css[^"]*">', lambda _: '<style>\n' + css + '\n</style>', page)
page = re.sub(r'<script src="(?:data|app)\.js[^\"]*" defer></script>', '', page)
for asset in sorted((OUT / 'assets').glob('*.jpg')):
    encoded = 'data:image/jpeg;base64,' + base64.b64encode(asset.read_bytes()).decode()
    page = page.replace('assets/' + asset.name, encoded)
scripts = js + (OUT / 'app.js').read_text()
page = page.replace('</body>', '<script>\n' + scripts.replace('</script', '<\\/script') + '\n</script>\n</body>')
assert 'src="assets/' not in page and 'url("assets/' not in page
(ROOT / 'CAPA.html').write_text(page)
print(f'{len(ids)} fiches : données et version autonome préparées.')
