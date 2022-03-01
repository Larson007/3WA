# Module 01 - Différences PHP / JavaScript & Base de données

## 11 - Formulaires

Communiquer avec le serveur
Il y a plusieurs manières d'envoyer des requêtes HTTP à un serveur web. On en connaît bien sûr déjà une : entrer une adresse web dans le navigateur.

Lors de cette action, on envoie une requête de la méthode GET au serveur. On lui demande une ressource par son URI, il nous envoie une réponse.

Ici nous vous renvoyons au lointain cours que nous avions eu au sujet du fonctionnement du web. Il sera préférable pour vous de relire rapidement la partie sur les navigateurs et plus précisément les méthodes HTTP avant d'aller plus loin.

Blablabla méthode GET, donc, disions-nous. Quand on navigue sur le web, que ce soit en entrant directement des URI dans la barre d'adresse ou en cliquant sur des liens, pour l'essentiel on envoie des requêtes GET.

Il existe toutefois une action que vous connaissez très bien qui permet d'envoyer des requêtes de toutes les autres méthodes : soumettre un formulaire.

Détaillons cela.

Du formulaire HTML au traitement PHP
Vous l'avez peut-être déjà vu en intégration, vos formulaires HTML avaient d'étranges attributs que vous n'utilisiez peut-être pas encore : action et method. Les champs eux-mêmes avaient aussi un étrange attribut : name. Il est temps de vous révéler la vérité.

<form action="/handle-page" method="POST">
  <input type="text" name="nickname" placeholder="Entrez votre pseudonyme" />
  <input type="password" name="password" placeholder="Entrez votre mot de passe" />
  <button type="submit">Valider</button>
</form>
Quand on valide un formulaire, on envoie une requête au serveur. Une requête HTTP, c'est, pour ce qui nous intéresse ici : une adresse et des données.

L'adresse à laquelle le formulaire va envoyer la requête est spécifiée dans l'attribut action. Ici nous avons mis une adresse fictive /handle-page, qui est une URL relative indiquant « le chemin /handle-page à partir d'ici ».

L'attribut action n'est pas obligatoire. Si on l'omet, le formulaire envoie la requête à la même adresse que celle où il se trouve. C'est d'ailleurs ce qui est le plus souvent fait, et c'est ensuite côté PHP que l'on va déterminer si la requête demandait d'afficher le formulaire vide ou si celui-ci vient justement d'être soumis.

L'attribut method spécifie la méthode HTTP qui sera utilisée pour l'envoi de la requête au serveur. Nous allons détailler très vite les deux principales requêtes.

Ensuite, chaque champ va venir remplir la requête d'une donnée supplémentaire. Et l'attribut name est là pour donner un nom à chaque donnée. Vous pouvez imaginer qu'on envoie un tableau associatif de données au serveur, où chaque valeur entrée dans chaque champ sera associée à son name respectif.

Détaillons les méthodes pour mieux comprendre tout cela.

POST
Considérons à nouveau notre formulaire.

<form method="POST">
  <input type="text" name="nickname" placeholder="Entrez votre pseudonyme" />
  <input type="password" name="password" placeholder="Entrez votre mot de passe" />
  <button type="submit">Valider</button>
</form>
Oublions pour l'instant l'attribut action, il n'est pas important.

J'entre la valeur Buffy dans le champ nickname, et la valeur WilloW123 dans le champ password. Je soumets le formulaire. Côté PHP, imaginons ce morceau de script sur cette même page

if (isset($_POST['nickname']) && isset($_POST['password'])) {
    echo $_POST['nickname'];
    echo '<br />';
    echo $_POST['password'];
}
La fonction isset permet simplement de savoir si une clé existe dans un tableau.

Ce qu'il faut noter ici, c'est l'usage de la variable $_POST. C'est ce qu'on appelle une « variable superglobale ». Il en existe un certain nombre. PHP les déclare pour nous : c'est-à-dire qu'elles existent et qu'on y a accès même si on ne les a pas déclarées nous-mêmes.

En l'occurrence, $_POST est toujours déclarée comme un tableau. Dans n'importe quel script PHP, vous pouvez appeler la variable $_POST, si aucun formulaire n'a été soumis elle contiendra un tableau vide.

Si un formulaire a été soumis avec la méthode POST, alors le tableau contenu dans la variable $_POST ne sera plus vide. Nous aurons un tableau associatif rempli des valeurs entrées dans le formulaire.

Notre exemple plus haut affichera respectivement Buffy et WilloW123. Notre tableau $_POST contiendra exactement les mêmes valeurs qu'un tableau $values dans le code suivant :

$values = [
    'nickname' => 'Buffy',
    'password' => 'WilloW123'
];

var_dump($values);
La fonction echo est très utile pour afficher des chaînes de caractères. À des fins de debug et de développement, elle peut être un peu limitante pour afficher des valeurs plus complexes, comme des tableaux ou des objets. Dans ce cas, n'hésitez pas à utiliser la fonction var_dump. Par exemple var_dump($_POST) dans notre cas. C'est un peu le console.log de PHP. La tester c'est l'adopter !

GET
La méthode GET fonctionne de la même manière, à deux différences près.

<form method="POST">
  <input type="text" name="nickname" placeholder="Entrez votre pseudonyme" />
  <input type="password" name="password" placeholder="Entrez votre mot de passe" />
  <button type="submit">Valider</button>
</form>
if (isset($_GET['nickname']) && isset($_GET['password'])) {
    echo $_GET['nickname'];
    echo '<br />';
    echo $_GET['password'];
}
La première différence est évidente : les données ne sont pas accessibles via la variable superglobale $_POST, mais via $_GET.

La deuxième différence est par contre fondamentale. Tandis qu'une requête POST transporte les données de manière transparente, discrètement glissées dans ses métadonnées, une requête GET les transporte directement dans l'URI.

En soumettant le formulaire de notre exemple, notre URI ressemblera alors à ceci : http://localhost/some_project?nickname=Buffy&password=WilloW123. Au lieu de transporter les données dans sa poche, la requête se les colle sur le front. (:

On trouve à la fin de notre adresse un premier séparateur ?, qui dit « à partir d'ici on trouve les paramètres GET ». Puis chaque paire clé=valeur est séparée par un &. Le serveur est ensuite capable de les lire et les utiliser. Dans le cas des PHP, on les trouve dans la variable $_GET sous forme de tableau associatif.

Il y a des raisons à cela. Comparons les deux méthodes.

Quand utiliser GET ? Quand utiliser POST ?
Philosophiquement, une adresse web est là pour décrire ou demander une ressource. La méthode GET est généralement utilisée pour demander à voir quelque chose, c'est d'ailleurs pour cela que cliquer sur un lien ou aller directement à une adresse déclenche une requête GET. Mais on l'utilise aussi, par exemple, pour les formulaires de recherche. Si vous soumettez la recherche Tiramisu sur Qwant, les résultats s'afficheront et l'adresse ressemblera à ceci : https://www.qwant.fr?q=Tiramisu. On peut deviner ici que q signifie query. Le serveur de Qwant aura alors utilisé la valeur de q pour faire tourner ses algorithmes de recherche sur sa base de données, et nous envoyer une réponse appropriée.

Si GET sert à demander au serveur de nous envoyer quelque chose, POST est plutôt là pour envoyer quelque chose au serveur. Un formulaire d'inscription, par exemple, utilisera la méthode POST.

Bien sûr, en soi, on peut très bien intervertir les deux. On peut créer des utilisateurs avec un formulaire GET, on peut faire des recherches avec un formulaire POST. C'est avant tout une question de sémantique. Et la sémantique, vous commencez à le savoir, c'est important.

Il existe d'autres méthodes, comme PATCH ou DELETE. En théorie il faudrait les utiliser. DELETE, par exemple, sert pour un formulaire visant à supprimer une ressource, comme un utilisateur ou une publication. Mais en pratique, la multiplicité des requêtes complexifie beaucoup le développement, aussi la plupart des développeurs se limitent à GET et POST par souci de simplicité. Même Symfony, l'un des frameworks PHP les plus utilisés au monde et objectivement l'un des mieux pensés, ne se fait pas de nœuds au cerveau concernant les méthodes HTTP : GET et POST.

Vous concernant, même si vous estimez être un chevalier de la sémantique et rêvez d'utiliser un jour exactement la bonne méthode pour la bonne requête, nous vous recommandons pour l'heure de vous limiter également à GET et POST. En vérité, dans votre vie professionnelle, vous ne serez amenés à véritablement respecter la sémantique exacte des méthodes HTTP que lorsque vous développerez des API REST, chose que vous ne ferez probablement pas à vos débuts.

