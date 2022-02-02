# Module 01 - Introduction et bases de la programmation

## 03. Navigateurs

Qu'est-ce qu'un navigateur ?
Christophe Colomb ? Nami ?

Dans le contexte d'Internet, le navigateur est un logiciel dont le rôle est de permettre à l'utilisateur de parcourir le web. Autrement dit... de naviguer. Comme Barbe Noire qui a navigué d'île en île, quotidiennement vous naviguez de site web en site web, c'est-à-dire de serveur en serveur.

Comme nous l'avons dit dans le précédent chapitre, le client envoie une requête et le serveur envoie une réponse adaptée. Ce sont simplement deux ordinateurs qui communiquent : le vôtre, et celui du serveur. Le côté serveur, nous n'y entrerons pas tout de suite en détail, c'est l'objet des cours sur le PHP qui viendront dans quelques semaines. Ce qui va nous intéresser, pour l'heure, c'est le côté client, dont la fenêtre sur le monde est le navigateur.

Voici une liste – non exhaustive quoique copieuse – de navigateurs, certains plus connus que d'autres :

* Firefox
* Chrome
* Edge
* Safari
* Internet Explorer
* Chromium
* Tor Browser
* Opera
* Vivaldi
* Midori
* Brave
* Lynx
* ELinks

Il y a fort à parier que la plupart d'entre vous utilisent généralement l'un des quatre premiers. Firefox (Mozilla Foundation), Chrome (Google), Edge (Microsoft) et Safari (Apple) représentent à eux quatre la large majorité de la navigation sur le web.

### Comment le navigateur communique-t-il avec le serveur ?

Grâce à un protocole de communication créé en 1990 par Tim Berners-Lee appelé `HTTP`. Il existe également une version chiffrée de ce protocole, créée en 1994 : le `HTTPS`.

Nous n'allons bien sûr pas approfondir les détails techniques du fonctionnement du `HTTP`, mais abordons les grands principes.

Le client (le navigateur) envoie un certain type de requête, une « méthode », le serveur effectue un traitement et renvoie un certain type de réponse selon un « code ».

### Qu'est-ce qu'une méthode HTTP ?

Il s'agit d'envoyer une requête à un serveur, mais en suivant un certain format en fonction de notre besoin et pour aider le serveur à comprendre ce qu'on veut de lui.

Il existe huit méthodes « officielles », dont les plus couramment utilisées sont :

* `GET` : « Je veux voir une ressource. » C'est l'essentiel de la navigation, i.e. afficher des pages web.
* `POST` : « Je veux créer une ressource. » C'est le type de requête que votre navigateur envoie quand par exemple vous soumettez un formulaire pour créer un nouveau post sur un forum.
* `PATCH` : « Je veux modifier partiellement une ressource. » Même exemple du forum, mais cette fois je corrige une faute d'orthographe dans un post déjà existant.
* `DELETE` : « Je veux supprimer une ressource. » Ici je supprime complètement un post du forum.

Les autres méthodes sont `HEAD`, `OPTIONS`, `CONNECT`, `TRACE` et `PUT`. Inutile de tout connaître par cœur : vous les utiliserez en temps voulu, voire ne les utiliserez jamais pour certaines, comme `CONNECT` ou `TRACE` qui sont très spécifiques et donc plutôt rares.

### Qu'est-ce qu'un code HTTP ?

Tout comme les méthodes aident le serveur à comprendre ce qu'on lui demande, les codes HTTP aident le client à comprendre ce que le serveur lui a répondu. Il en existe énormément, dont vous n'utiliserez la plupart du temps qu'une infime partie.

Un code HTTP est un nombre à trois chiffres qui accompagne donc la réponse du serveur pour aider le navigateur à savoir comment se comporter. Par exemple, si tout s'est bien passé, le serveur renvoie le code `200` et le navigateur affiche la page. Si la page demandée n'existait pas, le serveur renvoie le fameux code 404 que vous connaissez bien. Si la page existait mais que vous n'avez pas le droit d'y accéder : `403`. Si le traitement de la requête a été interrompu par une erreur fatale côté serveur : `500`.

N'hésitez pas à en consulter la liste pour votre culture, mais comme pour les méthodes ne vous amusez pas à essayer de les apprendre par cœur.
