# CAPA — Le Carnet de Coco

Version de travail du 7 octobre 2026 : 78 fiches d’huiles essentielles illustrées. Le site se consulte en ouvrant `index.html` ; la recherche et les illustrations fonctionnent sans connexion. Les liens de sources nécessitent Internet et les cours Hippocratus un compte autorisé.

Douze fiches présentent des usages évalués par l’EMA avec leur niveau de preuve, la préparation concernée et les précautions : romarin, eucalyptus globuleux, thym à thymol, tea tree, lavande vraie, menthe poivrée, giroflier, anis vert, carvi, matricaire et écorce de cannelle de Ceylan, valériane officinale. Des alertes documentaires apparaissent sur les fiches fenouil amer, fenouil doux, bergamote et genévrier commun. Les deux gaulthéries et le niaouli ont reçu des précautions de sécurité recoupées avec l’Anses ; un filtre « Coagulation » aide à retrouver les contre-indications des gaulthéries. Les monographies de médicaments ne valident pas automatiquement toutes les huiles du commerce. Les autres fiches restent à recouper. Sept modalités chiffrées issues de quatre monographies EMA sont citées avec leur préparation et leur population ; aucune recette du cours privé n’est publiée.

## Mettre à jour le site sur GitHub

Dans le dépôt `DRIVEDOTR/CAPA-CORINNE`, envoyer les fichiers du présent dossier directement à la racine du dépôt. Conserver le sous-dossier `assets` et remplacer les fichiers portant le même nom. Cette mise à jour modifie `index.html`, `styles.css`, `app.js`, `data.js`, `fiches.json` et ce README. Les illustrations restent inchangées depuis la version précédente. Valider ensuite les changements (« Commit changes »). Aucun fichier caché `.github` n’est nécessaire pour une publication GitHub Pages depuis la branche principale.

Si GitHub Pages n’est pas encore activé : dans les réglages du dépôt, ouvrir « Pages », choisir la publication depuis une branche, puis la branche principale et le dossier racine `/`. La documentation officielle est ici : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Organisation

- `index.html`, `styles.css`, `app.js` : page, présentation et recherche.
- `data.js` : données utilisées par le site ; générées à partir de `fiches.json` dans le projet de travail.
- `fiches.json` : copie structurée des 78 fiches et de leurs sources.
- `assets/` : logo, photographie et illustrations.

Les fiches sont un carnet de travail à relire. Une rubrique « à documenter » ne signifie jamais qu’un risque est absent. Les traitements, voies et doses éventuels doivent être vérifiés pour chaque produit et chaque situation.

Cette étape rend visibles 49 ensembles de pistes tirées des cours avec leur page, sans les présenter comme des indications validées. Les chiffres EMA concernent seulement les préparations décrites dans les monographies de l’anis vert, du carvi, de la lavande vraie et de la valériane. Pour les 74 autres fiches, aucune dose exploitable n’est encore retenue.
