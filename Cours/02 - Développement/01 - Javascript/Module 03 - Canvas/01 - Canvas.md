# Module 03 - Canvas

## Canvas

### C'est quoi Canvas ?

Une balise HTML et des librairies Javascript

````html
<canvas  width="800"  height="600"></canvas>
````

### Quelques petites choses à savoir :

- Canvas définie une zone graphique modifiable en JavaScript,
- La taille d'un Canvas, généralement en pixels, doit-être définie directement dans la balise HTML ou en JS mais pas en CSS (sinon c'est flou),
- Canvas peut-être utilisé pour créer des graphique en 2D (Context2D) ou en 3D (WebGL), nous aborderons ici le dessin 2D,
- Canvas est normalement optimisé pour fonctionner avec le GPU (processeur graphique de l'ordinateur). Les animations y seront plus fluides et optimisées,
- Javascript possède des Librairies (Context2D ou WebGL) pour modifier les graphiques présents dans la zone Canvas. Par exemple y ajouter du texte, une image, un dessin, appliquer une transformation (rotation, translation), etc...

*"Oui mais" on nous a appris à animer du HTML, pourquoi passer par Canvas*

Animer de l'HTML est une chose. Ces animations servent à dynamiser la page, mais ne sont pas optimisées pour de la performance. Quelles soit en JS, en CSS ou avec un mélange des deux ces animations sont cosmétiques. Si l'on souhaite faire un jeu en full HTML, c'est possible mais le rendu ne sera pas forcément adapté. Vous vous souvenez de notre balle animée avec requestAnimationFrame, dans certains navigateurs la balle est déformée. Ce ne sera pas le cas avec Canvas !

### A quoi peut nous servir Canvas :

- Créer un jeu vidéo : Exemple Casse Brique
- Permettre la modification d'une zone graphique ou même un éditeur de photo comme Gimp ou Photoshop en ligne : Exemple Pixlr
- Permettre l'enregistrement d'une zone graphique sous la forme d'une image (GIF, JPG, PNG).

### Les animations avec Canvas

Le context2D nous donne des méthodes et propriétés pour créer et dessiner des choses sur le Canvas, mais aucune méthode pour animer les éléments créés. En réalité l'animation sur le Canvas nécessite de créer un nouvel élément. Par exemple si nous voulons animer une balle il nous faut :

- créer la première image de la balle,
- créer la deuxième image de la balle,
- supprimer la première image de la balle.

Pour créer cette animation nous allons nous servir des méthodes que nous connaissons bien : setInterval() et plus adaptée requestAnimationFrame().

Par exemple avec requestAnimationFrame() nous allons appeler une fonction qui à chaque rafraichissement de l'écran va rafraichir la position de notre balle sur le Canvas ! Et le tour est joué !

### Documentations et définitions

- > Documentation sur la balise Canvas
- > Toutes les méthodes et propriétés du contexte 2D
- > Des exemples d'utilisation

### Exemple : dessiner un rectangle

Pour dessiner un rectangle c'est assez simple avec le contexte2D. Les méthodes fillRect() (dessiner un carré rempli) ou strokeRect() (dessiner le contour d'un carré). Nous allons dessiner 3 rectangles dans notre Canvas.

Fichier HTML index.html

````html
<!DOCTYPE html>
<html  lang="fr">
<head>
    <meta  charset="UTF-8">
    <meta  name="viewport"  content="width=device-width, initial-scale=1.0">
    <title>Dessiner une balle</title>
    <script  src="main.js"></script>
</head>
<body>
    <canvas  width="800"  height="600"  id="canvas"></canvas>
</body>
</html>
````

Fichier JavaScript main.js

````js
'use strict';
document.addEventListener('DOMContentLoaded',function(){
    // L'objet du DOM Canvas
    let  canvasDom  =  document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let  ctx  =  canvasDom.getContext('2d');

    // On trace le contour (stroke) d'un rectangle
    ctx.strokeRect(50, 50, 200, 150);

    // On dit au contexte que la couleur de contour (stroke) est rouge
    ctx.strokeStyle  =  "#FF00DD";

    // On trace un nouveau rectangle dans le Canvas avec cette couleur de contour
    ctx.strokeRect(50, 205, 200, 150);

    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle  =  "#FF0000";

    // On trace un nouveau rectangle rempli (fill) avec cette couleur (mais il n'a pas de contour)
    ctx.fillRect(255, 205, 200, 150);
});
````

### Exemple : écrire du texte

Comme pour le rectangle il existe des méthodes avec le context2D pour écrire du texte directement dans le Canvas. Les méthodes fillText() et strokeText() vont nous permettre d'écrire du texte plein ou seulement le contour. Les propriétés font, textAlign et textBaseline vont nous permettre de modifier l'apect de notre texte. Enfin nous l'avons vu avec le rectangle il existe des propriétés pour définir les couleurs de contour strokeStyle, de remplissage fillStyle...

*Pour cette exemple nous utilisons le même HTML que l'exemple 1.*

Fichier JavaScript main.js

````js
'use strict';

// Nous allons écrire "HELLO WORLD !" avec 3 couleurs différentes

document.addEventListener('DOMContentLoaded',function(){

    // L'objet du DOM Canvas
    let canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let ctx = canvasDom.getContext('2d');
    
    // On définie la police de caractère pour tous les textes
    ctx.font = 'bold 18px Verdana';

    // Couleur pour écrire Hello
    ctx.fillStyle ='#D125E6';

    // On ecrit Hello
    ctx.fillText('Hello', 10, 50);

    // Couleur pour écrire World
    ctx.fillStyle = '#2223F5';

    // On ecrit World et on se sert de la méthode `measureTexte` pour le place après Hello !
    ctx.fillText('world', 10+ctx.measureText('Hello').width+10, 50);

    // Couleur pour écrire !
    ctx.fillStyle = '#54D144';

    // On ecrit !
    ctx.fillText('!', 10 +ctx.measureText('Hello').width + ctx.measureText('world').width+20, 50);
   
});
````

### Exemple : incruster une image

Alors là rien de plus simple, la méthode drawImage() va nous permettre d'écrire une image dans le Canvas. Petite subtilité tout de même drawImage() doit recevoir en premier paramètre un objet du DOM qui est déjà chargé. Mais pas d'inquiétude JavaScript va nous permettre créer et charger une image pour cette méthode.

Pour cette exemple nous utilisons le même HTML que l'exemple 1.

````js
'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // L'objet du DOM Canvas
    let canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    let ctx = canvasDom.getContext('2d');

    // On créer un nouvel Objet du DOM avec JS.
    let myImg = new Image();

    // On définie la source de cette image
    myImg.src = 'http://lorempixel.com/400/200/animals/';

    // Quand l'image est chargée par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg,10,10);
    };

    // Mais c'est un peu long tout ça si on veut ajouter plusieurs images
    // Et pourquoi ne pas créer notre fonction pour ajouter facilement plusieurs images
    addImage('http://lorempixel.com/400/200/animals/?20', 400, 10, ctx);
    addImage('http://lorempixel.com/400/200/animals/?80', 10, 200, ctx);

});

/** Ajoute une image à un context2D
 * @param {string} src source de l'image
 * @param {integer} posX position X de l'image dans le Canvas
 * @param {integer} posY position Y de l'image dans le Canvas
 * @param {CanvasRenderingContext2D} ctx le context lié à notre Canvas
 */
function addImage(src, posX, posY, ctx)
{
    // On créer un nouvel Objet du DOM avec JS (HTMLImageElement).
    let myImg = new Image(); // absolument équivalent à la création d'un noeud <img> avec document.createElement('img').

    // On définie la source de cette image
    myImg.src = src;

    // Quand l'image est chargée par le navigateur on la place dans le Canvas
    myImg.onload = function () {
        //On place l'image
        ctx.drawImage(myImg, posX, posY);
    };
}
````

### Exemple : animer un élément avec le clavier.

Nous allons permettre le déplacement d'un carré à l'aide des touches du clavier, dans toutes les directions, jusqu'à la limite du Canvas.

Pour cette exemple nous utilisons le même HTML que l'exemple 1. Vous pouvez réduire le Canvas pour faire vos tests de collision de bordure.

````js
'use strict';

// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length:20,
    x:10,
    y:10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;


// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function () {

    // L'objet du DOM Canvas
    canvasDom = document.querySelector('#canvas');

    // Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
    ctx = canvasDom.getContext('2d');

    // On dessine notre carré la première fois
    displaySquare();

    //Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
    document.addEventListener('keydown', moveSquare);

});

/** Gestionnaire dévènement clavier
 * @param {event} e l'évènement keydow
 */
function moveSquare(e)
{
    // on détecte la touche et la direction puis on change les coordonnées
    switch(e.key)
    {
        case 'ArrowRight':
            if (square.x + square.length < canvasDom.width ) square.x++;
            break;
        case 'ArrowLeft':
            if (square.x > 0) square.x--;
            break;
        case 'ArrowUp':
            if (square.y > 0) square.y--;
            break;
        case 'ArrowDown':
            if (square.y + square.length < canvasDom.height) square.y++;
            break;
    }

    // On dessine notre carré 
    displaySquare();
}


/** Fonction qui affiche le carré avec ces coordonnées et la couleur défini dans le contexte
 * 
 */
function displaySquare()
{
    // On vide le Canvas avant de redessiner
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est gris
    ctx.fillStyle = '#DDDDDD';
    // On rempli le Canvas de gris
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est rouge
    ctx.fillStyle = square.color;

    // On trace un nouveau carré rempli (fill) avec cette couleur
    ctx.fillRect(square.x, square.y, square.length, square.length);
}
````

### Exemple : Remplacer le carré par un cercle

Nous allons ici voir une nouvelle notion. La notion de path (chemin, tracé), qui va nous permettre de relier des points. En effet hormis le rectagle et le texte, pour toutes les autres forme nous allons devoir :

- commencer un tracé : beginPath()
- définir des points et relier des points : lineTo() (relier deux points), moveTo() (se déplacer à un point spécifique), arc() (dessiner un arc, un cercle) ...
- eventuellement remplir l'intérieur fill() ou dessiner le contour stroke()
Pour remplacer notre carré par un cercle nous allons modifier notre variable square par circle et modifier notre fonction displaySquare() par displayCircle() et notre fonction moveSquare par moveCircle

```js
'use strict';

// On défini le propriété de notre cercle que l'on va dessiner dans un objet 
let circle = {

color: "#FF0000",
radius:10,
x:20,
y:20
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions let canvasDom; 

let ctx;

// Dès que le DOM est chargé on commence 

document.addEventListener('DOMContentLoaded', function () {

// L'objet du DOM Canvas
canvasDom = document.querySelector('#canvas');

// Le context utilisé avec Canvas qui donne accès aux librairies de manipulation 2D
ctx = canvasDom.getContext('2d');

// On dessine notre cercle la première fois
displayCircle();

//Maintenant on met un évent pour savoir si l'utilisateur apuie sur une flèche du clavier 
document.addEventListener('keydown', moveCircle);
});


/** Gestionnaire dévènement clavier
 * @param {event} e l'évènement keydow
 */
function moveSquare(e)
{

    // on détecte la touche et la direction puis on change les coordonnées
    switch(e.key) {
        case 'ArrowRight':
            if (circle.x + circle.radius < canvasDom.width) circle.x++;
            break;
        case 'ArrowLeft':
            if (circle.x - circle.radius > 0) circle.x--;
            break;
        case 'ArrowUp':
            if (circle.y - circle.radius > 0) circle.y--;
            break;
        case 'ArrowDown':
            if (circle.y + circle.radius < canvasDom.height) circle.y++;
            break;
// On dessine notre cercle 
displayCircle();
}

/** Fonction qui affiche le cercle avec ces coordonnées et la couleur défini dans le contexte
*/ function displayCircle() { 
    // On vide le Canvas avant de redessiner 
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est gris 
    ctx.fillStyle = '#DDDDDD'; 

    // On rempli le Canvas de gris en fond 
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);

    // On dit au contexte que la couleur de remplissage est rouge 
    ctx.fillStyle = circle.color;

    //On trace un nouveau cercle rempli
    // on commence le tracé 
    ctx.beginPath(); 
    // on trace un arc fermé (un cercle) 
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI); 
    // on dessine sur le canvas en remplissant le tracé 
    ctx.fill(); 
    // On aurait pu dessiner sur le Canvas seulement le contour ! 
    ctx.stroke(); 
}
````
