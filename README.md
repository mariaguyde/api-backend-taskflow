# API Backend Taskflow

Ce repo contient le code backend de l'application Taskflow. C'est une API RESTful construite avec **Node.js** et **Express**, connectée à une base de données **MongoDB** via **Mongoose**.

Elle gère :
- l’authentification des utilisateurs (inscription / connexion)
- la gestion des colonnes et des tâches
---

## Stack utilisée

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (hachage des mots de passes pour un stockage des données sécurisé)

## Architecture

La structure de ce projet s'est basé sur une version adaptée du MVC (Model View Controller). On retrouve donc les dossiers suivants :
```
├── controllers/ # Logique métier (user, task, column)
├── models/ # Schèmas mongoose (MongoDB)
├── routes/ # Définition des routes API
```

## Installation

Avant de lancer le serveur en local, veuillez vous assurer d'avoir créer un fichier .env dans le dossier en précisant les valeurs de PORT et MONGODB_URI.
Cela implique d'avoir créer un cluster avec son compte MongoDB.

Le fichier .env devrait ressembler à cela : 

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kanban-app
```

```
cd api-backend-taskflow
```

```
npm i
```

```
node index.js
```
