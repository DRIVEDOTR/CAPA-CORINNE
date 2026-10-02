# Mettre CAPA sur GitHub Pages

Le dossier est prêt ; aucun dépôt n’a encore été créé et aucune mise en ligne n’a été effectuée. Le bouton de publication restera manuel.

## Première publication

1. Ouvrir le dossier `CAPA-CORINNE` sur le Bureau. Il contient directement les fichiers du dépôt, y compris le dossier caché `.github` (affichable avec ⌘ Maj .).
2. Dans GitHub Desktop, choisir **File → Add local repository**, sélectionner ce dossier, puis **create a repository here** s’il n’est pas encore reconnu comme dépôt. Conserver ce même dossier comme emplacement. Créer le premier commit avec tous les fichiers, y compris le dossier caché `.github`.
3. Cliquer sur **Publish repository**. Choisir le compte et le nom du dépôt, par exemple `capa-aromatherapie`. Un dépôt public permet GitHub Pages avec GitHub Free ; un dépôt privé nécessite une offre compatible. Le contenu du site publié est destiné à être accessible sur le Web.
4. Sur GitHub, ouvrir **Settings → Pages**. Dans **Build and deployment → Source**, sélectionner **GitHub Actions**.
5. Ouvrir **Actions → Publier CAPA → Run workflow**, sélectionner la branche principale puis lancer. Le workflow prépare le site et publie uniquement `dist`.
6. Une fois l’exécution terminée, l’adresse apparaît dans le déploiement `github-pages` et dans **Settings → Pages**. Pour un dépôt de projet, elle ressemble à `https://VOTRE-COMPTE.github.io/capa-aromatherapie/`.

## Publier une modification

Modifier les fichiers, enregistrer un commit et envoyer les changements avec **Push origin**, puis relancer **Publier CAPA**. Un simple envoi sur GitHub ne déclenche pas la publication.

## Modifier le carnet

- Les fiches sont dans `dist/fiches.json` ; conserver leurs identifiants uniques et leurs références de sources.
- Les couleurs et les animations sont dans `dist/styles.css`.
- Le titre et la bannière sont dans `dist/index.html`.
- Les images originales sont dans `dist/assets`.
- Le processus de publication régénère automatiquement les données utilisées par le navigateur. Pour régénérer la copie locale autonome, lancer `python3 scripts/prepare.py` depuis ce dossier, puis ouvrir `CAPA.html`.

Les 13 fiches portent toujours leur statut de travail et les réserves de relecture. Préparer l’hébergement ne change pas leur niveau de validation. Les cours privés sont référencés par liens ; leurs fichiers ne sont pas inclus.

Référence : [documentation officielle GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
