# CAPA — le carnet d’aromathérapie de Corinne

## Premier dépôt sur GitHub

1. Dans https://github.com/DRIVEDOTR/CAPACORINNE, choisir « uploading an existing file » si le dépôt est vide, ou « Add file → Upload files ».
2. Glisser tous les éléments visibles de ce dossier dans GitHub, en conservant le dossier `assets`. Ne pas glisser le dossier parent CAPA-CORINNE.
3. Vérifier que `index.html` est directement à la racine, avec `app.js`, `data.js`, `styles.css`, `fiches.json`, `assets` et ce README.
4. Saisir « Première version du site CAPA de Corinne », puis cliquer sur « Commit changes ».
5. Dans « Settings → Pages », choisir « Deploy from a branch », branche « main », dossier « / (root) », puis « Save ».

L’adresse attendue est https://drivedotr.github.io/CAPACORINNE/ ; GitHub confirmera l’adresse après le déploiement. Si la branche principale porte un autre nom, sélectionner cette branche. Si un ancien `.github/workflows/pages.yml` a déjà été envoyé, le retirer du dépôt pour éviter de conserver l’ancienne publication manuelle.

## Mises à jour

Remplacer les fichiers modifiés sur GitHub puis cliquer sur « Commit changes ». La publication se déclenche automatiquement après chaque modification de la branche sélectionnée. Aucun dossier caché à envoyer ni workflow à configurer.

## Consultation locale

Ouvrir `index.html` dans un navigateur. Les données et les images sont locales ; seuls les liens de sources nécessitent Internet. Les 61 fiches conservent leur statut de travail à relire.

## Fichiers

- `index.html` : page du site.
- `styles.css` : présentation et animations.
- `app.js` : recherche et affichage des fiches.
- `data.js` : données lues par le site.
- `fiches.json` : copie structurée des données ; toute modification des fiches doit être répercutée dans `data.js` avant publication.
- `assets` : logo et illustrations botaniques.

Documentation : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Version du 4 octobre 2026

61 fiches illustrées. Inventaire Hippocratus encore partiel : infectiologie (relevé partiel), rhumatologie, gastro-entérologie et volet huiles essentielles de dermatologie. Les sources et les limites figurent dans chaque fiche. Les repères de vigilance ne mesurent pas la gravité et une rubrique non renseignée ne signifie pas absence de risque.

Cette livraison comprend uniquement les fichiers du site, sans archive ni dossier caché à téléverser. Les cours complets et les notes de travail ne sont pas inclus. La publication reste à effectuer sur GitHub.
