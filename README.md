# gender

Discover Genre Name

pour lancer le projet il suffit, de lancer la commande npm run populate.
cela va lancer le script node qui va remplir dans un premier temps la database et la créer aux besoin.

ensuite il faut lancer la commande npm run serve, qui va lancer le server node.

un fichier de configuration "config.js",  il permet de pouvoir changer les config de la bdd et du server.

le programme fonctionne surtout au besoin de session, je set une session à la connection, qui va contenir les points du joueurs.

j'ai utilisé pug pour le template de mes fichier html.

La base de donnée utilisé est mysql et j ai utilisé "mysql-await" pour effectuer les requêtes de mon application

pour déterminer le genre des nom, j'ai utilisé "gender-detection" qui repond unknown, male, female or unisex.

pour proposer le nom a deviner au joueur je fais une requete sql randome qui va me donner un nom aléatoire et je boucle tant que le nom est égale a unknown.


Piste d'amelioration

enlever les noms unknown des le remplissage de la database.

faire un set de resultat afin de determinez si il ne suiffit pas de cliquer sur un même bouton pour gagner rapidement, afin d'amélioré la liste de choix proposé.
 
