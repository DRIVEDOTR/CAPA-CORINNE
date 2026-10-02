(() => {
  'use strict';
  const data = window.CAPA_DATA;
  const $ = id => document.getElementById(id);
  const search = $('search'), domain = $('domain'), results = $('results'), detail = $('detail');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const normalize = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’'\-·]/g,' ').replace(/\s+/g,' ').trim();
  const initialId = location.hash.slice(1);
  let selected = data.oils.some(o => o.id === initialId) ? initialId : 'tea-tree';
  $('total').textContent = data.oils.length;
  [...new Set(data.oils.flatMap(o => o.domains))].sort((a,b) => a.localeCompare(b,'fr')).forEach(d => {
    const option = document.createElement('option'); option.value = d; option.textContent = d; domain.append(option);
  });
  function sourceLink(id) {
    const source = data.sources[id];
    const label = id === 'hippocratus' ? 'Cours' : id.startsWith('ema') ? 'EMA' : 'Anses';
    return `<a class="source-link" href="${escape(source.url)}" target="_blank" rel="noopener noreferrer" aria-label="Source : ${escape(source.title)}">${label}</a>`;
  }
  function facts(items) {
    return items.length ? `<ul class="facts">${items.map(f => `<li>${escape(f.text)} ${sourceLink(f.source)}</li>`).join('')}</ul>` : '<p class="unknown">Non renseigné.<small>Les sources exploitées ne permettent pas de conclure à une absence de risque.</small></p>';
  }
  const searchable = new Map(data.oils.map(o => [o.id,normalize([o.name,o.botanical,...o.aliases,o.chemotype||'',...o.components,...o.domains,o.courseSummary,...['contraindications','precautions','adverseEffects','interactions','evidence'].flatMap(k=>o[k].map(f=>f.text)),...o.reviewNotes].join(' '))]));
  function showDetail(oil) {
    if (!oil) { detail.innerHTML = '<div class="empty-detail"><h2>Aucune fiche correspondante.</h2><p>Essayez un terme plus court ou choisissez tous les domaines.</p></div>'; return; }
    const partial = oil.status === 'partial';
    const status = partial ? 'Recoupement partiel · à relire' : 'Synthèse du cours · à relire';
    detail.innerHTML = `<div class="detail-top">
      <div class="detail-meta"><span class="label ${partial?'partial':''}">${status}</span><a class="page-ref" href="${escape(data.sources.hippocratus.url)}" target="_blank" rel="noopener noreferrer">Hippocratus · page ${oil.coursePage}</a></div>
      <h2 tabindex="-1" id="oil-title">${escape(oil.name)}</h2><p class="latin">${escape(oil.botanical)}</p>
      <dl class="identity"><div><dt>Famille botanique</dt><dd>${escape(oil.family)}</dd></div><div><dt>Partie utilisée</dt><dd>${escape(oil.part)}</dd></div><div><dt>Chémotype</dt><dd>${escape(oil.chemotype||'Non précisé')}</dd></div></dl>
      </div><div class="detail-body">
      <section aria-labelledby="components-heading"><h3 id="components-heading">Composants cités dans le cours</h3><div class="chips">${oil.components.map(c=>`<span class="chip">${escape(c)}</span>`).join('')}</div></section>
      <section class="course-box"><h3>Usages cités · à vérifier</h3><p class="caption">Domaines indexés dans les sources : ${oil.domains.map(escape).join(' · ')}</p><p>${escape(oil.courseSummary)}</p></section>
      <section class="review"><h3>Points à relire avant utilisation</h3><ul>${oil.reviewNotes.map(n=>`<li>${escape(n)}</li>`).join('')}</ul></section>
      <section class="safety-grid" aria-label="Informations de sécurité">
        <section><h3>Contre-indications</h3>${facts(oil.contraindications)}</section><section><h3>Précautions</h3>${facts(oil.precautions)}</section>
        <section><h3>Effets indésirables</h3>${facts(oil.adverseEffects)}</section><section><h3>Interactions</h3>${facts(oil.interactions)}</section>
      </section>
      <section class="evidence"><h3>Ce que les sources permettent de dire</h3>${oil.evidence.length?facts(oil.evidence):'<p class="unknown">Les usages de cette fiche n’ont pas encore fait l’objet d’un recoupement clinique indépendant.</p>'}<p class="caption">Aucune posologie proposée dans cette version. Une monographie concerne une préparation définie et ne s’applique pas automatiquement à tous les produits.</p></section>
      <section class="sources"><h3>Sources & traçabilité</h3><ol>${oil.sourceIds.map(id=>{const s=data.sources[id];return `<li><a href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">${escape(s.title)}</a><span class="source-type">${escape(s.type)}${id==='hippocratus'?` · page ${oil.coursePage} · connexion requise`:s.date?` · ${escape(s.date)}`:''} · consulté le 02/10/2026</span></li>`;}).join('')}</ol></section>
    </div>`;
  }
  function render() {
    const query = normalize(search.value).split(' ').filter(Boolean);
    const list = data.oils.filter(o => (!domain.value || o.domains.includes(domain.value)) && query.every(term=>searchable.get(o.id).includes(term)));
    if (!list.some(o=>o.id===selected)) selected = list[0]?.id || '';
    try { history.replaceState(null,'',location.pathname+location.search+(selected?'#'+selected:'')); } catch (_) { /* File previews may restrict history. */ }
    $('count').textContent = `${list.length} fiche${list.length===1?'':'s'}`;
    $('clear').hidden = !search.value;
    results.innerHTML = list.length ? list.map(o=>`<button class="oil-item" type="button" data-id="${escape(o.id)}" aria-pressed="${o.id===selected}" aria-controls="detail"><strong>${escape(o.name)}</strong><em>${escape(o.botanical)}</em><small class="${o.status==='partial'?'partial':''}">${o.status==='partial'?'Sources recoupées en partie':'Cours à recouper'}</small></button>`).join('') : '<div class="empty"><strong>Aucun résultat</strong>Effacez un mot ou élargissez le domaine.</div>';
    showDetail(list.find(o=>o.id===selected));
  }
  results.addEventListener('click', event => {
    const button = event.target.closest('[data-id]'); if (!button) return;
    selected=button.dataset.id;
    results.querySelectorAll('[data-id]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.id===selected)));
    showDetail(data.oils.find(o=>o.id===selected));
    try { history.replaceState(null,'','#'+selected); } catch (_) { /* File previews may restrict history. */ }
    if (window.matchMedia('(max-width:740px)').matches) { $('oil-title').focus({preventScroll:true}); detail.scrollIntoView({behavior:'auto',block:'start'}); }
  });
  search.addEventListener('input',render); domain.addEventListener('change',render);
  $('clear').addEventListener('click',()=>{search.value='';render();search.focus();});
  window.addEventListener('hashchange',()=>{if(data.oils.some(o=>o.id===location.hash.slice(1))){selected=location.hash.slice(1);render();}});
  const motionButton = $('motion-toggle');
  motionButton.addEventListener('click', () => {
    const paused = document.body.classList.toggle('motion-paused');
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = paused ? 'Animer le fond' : 'Mettre le fond en pause';
  });
  render();
})();
