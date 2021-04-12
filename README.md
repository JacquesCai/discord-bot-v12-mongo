# Discord-Bot

Ce prjet est un template de bot discord en node.js avec le module node discord.js qui permet d'intéragir facilement avec l'API Discord.

## Description

Ce bot discord a deux catégories de commandes avec des cooldowns. Les commandes modérateurs et les commandes publiques.

Liste des commandes publiques utilisable par tout le monde : 

- ping : renvoie le ping.
- help : renvoie la liste des commandes disponibles ou les informations sur une commande.

Liste des commandes modérateurs utilisable uniquement par ceux qui ont une permission `Administrateur` sur le serveur :

- ban : ban un utilisateur du serveur.
- clean : efface un nombre de message(s) compris entre 1 et 100.
- kick : kick un utilisateur du serveur.
- mute : mute un utilisateur sur une période de temps en (s,m,h,j).
- unban : unban un utilisateur à partir de son identifiant.
- unmute : unmute un utilisateur.
- reboot : permet de stopper le bot, avec pm2 cette commande permet de redémarrer le bot

## Installation

Pour importer le projet, vous pouvez exécutez la commande suivante ou en téléchargeant le zip:  
```
git clone https://github.com/JacquesCAI/discord-bot.git
```
Il faut ensuite installer les packages node_modules avec la commande suivante :
```
npm install
```

Ensuite il faut renseigner un token de bot discord en allant sur le site `https://discord.com/developers/applications` en créant une application puis crée un bot dans l'onglet BOT.

Ce Token doit être renseigné dans le fichier .env que vous devez créer.

Dans le fichier config.js, choisisez un préfix pour votre bot.

## Lancement

Pour lancer votre bot, il suffit de taper la commande 

```
node index.js
```

## Auteurs

**CAI Jacques** (mainteneur) @JacquesCAI
