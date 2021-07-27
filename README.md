# gender
discover genre name

pour lancer le projet il suffit, de lancer la commande npm run populate.
cela va lancer le script node qui va remplir dans un premier temps la database et la créer aux besoin.

ensuite il faut lancer la commande npm run serve, qui va lancer le server node.

un fichier de configuration "config.js",  il permet de pouvoir changer les config de la bdd et du server.

le programme fonctionne surtout au besoin de session, je set une session à la connection, qui va contenir les points du joueurs.

j'ai utilisé pug pour le template de mes fichier html.

La base de donnée utilisé est mysql et j ai utilisé "mysql-await" pour effectuer les requete de mon application

pour determiner le genre des nom j'ai utilisé "gender-detection" qui repond unknow, male, female or unisex.

pour prposer le nom a deviner au joueur je boucle tant que le nom et egale a unknow.

PISET d'amelioration
enlever le nom unknow des le remplissage de la database.

faire un set de resultat afin de determinez si il ne suiffit pas de cliquer sur un même boutton pour gagner rapidement.
 
