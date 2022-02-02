# Module 01 - Introduction et bases de la programmation

## 04. Javascript

### Et le javascript dans tout ça ?
Okay, okay, récapitulons.

Je suis en train de taper au clavier sur une machine capable d'effectuer des calculs. Grâce à un logiciel appelé « navigateur web », je peux aussi demander à ma machine de communiquer avec d'autres machines pour leur demander de m'envoyer des pages HTML que ledit navigateur pourra afficher.

Quittons désormais le monde pompeux de la théorie et redevenons un peu plus concrets. Une question pourrait alors nous venir à l'esprit.

Si la réponse du serveur est déterminée au moment où il me l'envoie, pourquoi ma page continue-t-elle à bouger alors que le navigateur l'a déjà affichée ?

Comment mes messages privés sur Facebook peuvent-ils se mettre à jour sans que j'aie à recharger cette page, c'est-à-dire sans refaire une requête ?

Comment ce formulaire d'inscription a pu me dire que mon pseudonyme est déjà utilisé sur ce site sans même que j'aie à cliquer sur « Valider » ?

En somme, comment les pages peuvent-elles demeurer interactives et vivantes alors que le HTML est prédéterminé par le serveur au moment de la réponse et du chargement de la page ?

La réponse à cette question est qu'en vérité une page HTML peut rester vivante même une fois chargée grâce au javascript. Elle pourrait très bien rester fixe, on appelle cela une page statique, et le web a longtemps ressemblé à cela, mais nous avons désormais le javascript pour créer de l'interaction entre l'utilisateur et la page web qu'il a sous les yeux.

Jacques rentre encore très tard du bar et son épouse a laissé un mot sur la table disant : « Si tu as faim le repas est au frigo. Quand tu te couches (au canapé) fais bien rentrer le chat. Demain il faut qu'on parle. » Madame a laissé des instructions que Jacques a tout intérêt à exécuter quand il arrive. C'est ce qu'on appelle un script. Le javascript est un langage de script qui remplit le même rôle que la note sur la table. Comme quand l'évènement « se coucher » appelle l'action « faire rentrer le chat », le javascript dit par exemple à votre navigateur « Quand l'utilisateur clique sur le bouton rouge, joue un son de casserole. » Le javascript est une série d'instructions, stockée dans des fichiers .js, préparée en amont par des développeurs et accompagnant la réponse HTML du serveur, au même titre que le CSS, les images, etc.

### À quoi ça ressemble ?

````js
const jacques = getJacques();

if (jacques.isHungry() === true) {
  jacques.openFridge();
  jacques.eat();
}

jacques.bringCatIn();
jacques.goToSleep("sofa");
````

Ne vous inquiétez pas si cela vous semble ésotérique, nous allons apprendre cette langue tout au long de cette formation. Traduisons en français ces neuf lignes de javascript :

Considérons l'homme Jacques.
Jacques a-t-il faim ?
Si oui, Jacques ouvre le frigo, puis Jacques mange.
Enfin, Jacques fait rentrer le chat, puis Jacques se couche au canapé.
La fin de soirée de Jacques est parfaitement scriptée.

Et un vrai exemple ?

````js
const button = document.getElementById("validation-button");

button.addEventListener("click", function() {
  window.alert("Hello!");
});
````

Traduction :

Considérons le bouton HTML ayant pour id `validation-button` !
Garde un œil sur ce bouton !
Quand l'utilisateur clique dessus, affiche une petite alerte « Hello! » !

Notez l'usage des points d'exclamation. La forme impérative est utilisée ici à dessein, car c'est également ce que l'on fait dans un langage de programmation impératif tel que le javascript : on donne des ordres à la machine.

### Récapitulatif

J'envoie une requête HTTP au serveur. Le serveur me renvoie une réponse contenant plusieurs fichiers :

* La réponse principale, à savoir la page HTML, c'est-à-dire le contenu à proprement parler, structuré sémantiquement. Ceci est un titre, ceci est un article.

* Des fichiers CSS, que le navigateur va interpréter pour savoir comment mettre le HTML en forme. Les titres sont bleus, les articles sont en Times New Roman.

* Des images, des sons, des vidéos, toute ressource nécessaire à la page.

* Enfin, ce qui nous intéresse ici, des fichiers javascript, que le navigateur va interpréter et exécuter afin de rendre la page interactive. Joue un son quand l'utilisateur clique ici, souligne le texte en rouge quand l'utilisateur dépasse 300 caractères dans le champ, déconnecte l'utilisateur s'il est inactif depuis plus de quinze minutes.

Le javascript est un langage de programmation à part entière, capable des interactions les plus simples comme des algorithmes les plus complexes. Il est temps d'en attaquer la pratique !
