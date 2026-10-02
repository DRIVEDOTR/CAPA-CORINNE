# CAPA — le carnet d’aromathérapie de Corinne

Une interface de recherche avec 13 fiches documentaires, une identité visuelle issue du logo CAPA et de la photographie fournis, et un fond animé discret. Les fiches restent une version de travail à relire.

## Consulter

Après génération avec `python3 scripts/prepare.py`, ouvrir `CAPA.html` pour une consultation autonome hors ligne. Tous les visuels et toutes les données y sont intégrés. Les liens de sources nécessitent Internet et les cours Hippocratus un compte autorisé.

Le site hébergé correspond au dossier `dist`. La recherche fonctionne entièrement dans le navigateur, sans service tiers. Les animations respectent le réglage de réduction des mouvements du système et peuvent être mises en pause.

## Publier

Suivre [le guide GitHub Pages](PUBLIER-SUR-GITHUB.md). Le workflow `.github/workflows/pages.yml` se lance manuellement. Aucun déploiement automatique au premier envoi.

## Structure

- `dist/index.html`, `styles.css`, `app.js` : interface.
- `dist/fiches.json` : données à modifier ; `data.js` est généré.
- `dist/assets/` : logo et photographie fournis, conservés dans leur format original.
- `scripts/prepare.py` : génération des données navigateur et de `CAPA.html`, sans dépendance à installer.
- `.github/workflows/pages.yml` : préparation et déploiement GitHub Pages.

Depuis ce dossier : `python3 scripts/prepare.py`. Le fichier autonome est volontairement exclu de Git car il duplique les images ; il peut être régénéré localement et ne fait pas partie des fichiers à pousser sur GitHub.

## Contenu documentaire

Premier lot : pages 3 à 12 du cours Hippocratus « HE les plus utilisées en infectiologie ». Recoupements partiels pour le tea tree, le giroflier et le thym à thymol. Aucun dosage ni protocole thérapeutique. Les chémotypes ne sont pas interchangeables ; une information manquante reste signalée. Le statut `publicationReady` reste `false` pour chaque fiche.
