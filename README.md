# Festa Local web app

## Configuration minimale pour lancer l'environnement de dev
La web app se base sur plusieurs dépendances logicielles
* Il faut avoir Node.js
- Installer node.js depuis le site officiel -> https://nodejs.org/en/download
* Ensuite on va installer les dépendances Node.js du projet
```sh
npm i
```
* Afin de lancer Festa Local lancer cette commande
```sh
npm run dev
```
* Vous allez remarquer qu'il y a un serveur local d'éxecution js
- Vous pouvez maintenant y accéder par ce lien -> http://localhost:5173/

#### Si vous n'aimez pas suivre les consignes copier coller ce code sur votre terminal
- il faut d'abord être sur le dossier du projet.
```sh
npm i
npm run dev
```

## Pratiques de developpement Client <---> API :
### INFORMATION importante
- Ce dépôt est déployé sur Vercel et chaque changement remettra à jour l'application web déployée en ligne.
Vous l'avez deviné cette application web fait appel à une API publique.
**_NOTE:_** Cela va avoir une influence sur la nature du développement en local.
- Développement en local :
Il est conseillé de lancer 2 serveurs Node.js celui de l'application web et celui de l'API
et veuillez à bien faire des appels API vers le serveur local.
Ensuite quand le code est bien validé avant d'envoyer le code sur le dépôt transformer tous les chemins
vers des appels à l'API qui est déployée en ligne et qui commence par ce lien https://api-docker-image-km7u7kfpba-od.a.run.app/api
