# Canvas

## Projet Arkanoid

## Etapes 01 - Animer notre Balle

Dans le dernier exemple du cours nous avons créé une balle que nous pouvons déplacer avec les touches du clavier. A la place de cette fonctionnalité et à l'aide de requestAnimationFrame() nous allons automatiser le rebond de la balle du haut vers le bas !

### A vous de jouer :

- on va mettre de côté le gestionnaire d'évènements keydown pour déplacer la balle avec le clavier.
- on va programmer une fonction qui va lancer un requestAnimationFrame(). Cette fonction va s'appeler playGame()
- cette fonction va commencer par décrémenter la position y de notre balle, la position de la balle va monter,
- elle va ensuite appeler une fonction displayGame() qui va réinitialiser le Canvas et afficher tout ce qui doit être afficher dans le Canvas, ici la balle à la bonne position,
- puis elle va lancer un appel à requestAnimationFrame() pour se rappeler elle même au prochain rafraichissement,
- quand notre balle arrive à 0 sur y elle rebondit et donc sa direction change, la fonction va donc incrémenter la position y de notre balle,
- quand notre balle arrive à la hauteur du Canvas elle revondit et donc sa direction change, la fonction va donc décrémenter la position y de notre balle,
etc...

**Astuce** : On peut créer un objet ball représentant la balle avec comme propriétés :

- sa position X,
- sa position Y,
- sa couleur,
- son rayon
- sa direction sur Y

On peut créer un objet game représentant le jeu avec comme propriétés :

- la largeur du plateau de jeu,
- la hauetru du plateau de jeu,
- sa couleur,

On peut gérer la direction de la balle avec une variable (ci dessus dans l'objet game) Si cette direction est égale à 1 la position de la balle sera incrémentée, si elle est égale à -1 elle sera décrémentée.

````js
let direction = 1;
let position = 0;

// on fait évoluer la position
position += 1 *  direction; //ici position est incrémentée de 1

direction = -1;
position += 1 *  direction; //ici position est décrémentée de 1
````

---

&nbsp;

## Etapes 02 - Déplacer la plateau

Déplacer la plateau
Maintenant que nous avons une balle qui rebondit de haut en bas, nous allons ajouter à notre jeu un plateau. Nous allons pouvoir déplacer le plateau de droiteà gauche. A l'étape suivante nous ferrons en sorte que la balle rebondisse sur le plateau. Mais pour le moment concentrons nous sur le dessin du plateau et les évènements claviers pour le déplacer.

### A vous de jouer :

- on va dessiner la plateau à chaque fois que l'on rafraichit le Canvas. Donc dans notre fonction displayGame()
- on va créer une nouvelle fonction initGame() qui va reprendre l'initialisation du jeu déja présente dans le gestionnaire d'évènement DOMContentLoaded,
- cette fonction initGame() va déclarer notre gestionnaire d'évènements quand nous appuyons sur le clavier. Nous pourrions appeler ce gestionnaire keyboardEvent()
- si on appuie sur la flèche droite la position x du plateau est incrémentée de quelques pixels et ne dépasse pas le bord droit du Canvas,
- si on appuie sur la flèche gauche la position x du plateau est décrémentée de quelques pixels et ne dépasse pas le bord gauche du Canvas

**Astuce** : On peut créer un objet paddle représentant le plateau avec comme propriété :

- sa position X,
- sa position Y,
- sa vitesse de déplacement (nombre de pixels de déplacement à chaque appuie sur une touche),
- sa couleur,
- sa largeur,
- sa hauteur,
- sa direction (-1 gauche, 1 droite, 0 stop)

Pour le déplacement du plateau on va considérer que :

- si la touche droite est enfoncé le plateau se déplacera à droite,
- si elle est relachée le plateau ne se déplace plus
- idem pour la touche gauche. Notre gestionnaire d'évènement clavier va changer la direction du plateau en fonction que l'on appuie ou relache la touche et c'est dans la fonction playGame() que le plateau sera déplacé.

---

&nbsp;

## Etapes 03 - GameOver

**Quoi j'ai perdu ?**

Bon avant toute chose il va nous falloir détecter la collision de notre balle avec le plateau. Et si la balle finie en bas du Canvas sans rebondir sur le plateau : Game Over !!

### A vous de jouer :

- notre fonction playGame() est appelée à chaque rafraichissement, c'est donc ici que nous allons détecter si la position de la balle est en collision avec la position du plateau,
- pour ça nous allons créer une fonction detectCollisions() qui sera appelée au début de la fonction playGame()
- dans cette fonction nous allons y déplacer la détection de collision avec le haut et le bas du Canvas,
- puis nous rajoutons dans cette fonction detectCollisions() la détection de collision avec le plateau : nous allons regarder si la position Y de la balle est la même que le haut du plateau et - si la position X de la balle se trouve entre le point gauche et le point droit du plateau
- si c'est la cas nous inversons la direction de la balle ! Elle remonte !
- si la balle descend et n'est pas réceptionnée par le plateau, c'est à dire si la balle entre en collision avec le bas du Canvas, c'est GameOver !

**Astuce** : Nous allons pouvoir rajouter une propriété gameOver à notre objet game. Elle sera à falseet passera à true quand on a perdu Dans notre fonction displayGame(), si game.gameOver est true : nous affichons uniquement un texte Game Over et on s'en va de la fonction (return)

---

&nbsp;

## Etapes 04 - Start Arkanoid Game

2 étapes pour ça :

- Recommencer et mettre le jeu en pause
    - recommencer le jeu en apuyant sur la barre d'espace si on a fait un game Over
    - mettre le jeu en pause pendant le jeu en appuyant sur Espace
- Donner de l'angle à la balle selon si elle rebondit à droite, à gauche ou au centre du plateau

### A vous de jouer :

- Dans notre gestionnaire d'évènement keydown on va rajouter une gestion de la barre d'espace,
- on va créer une fonction initPositions() qui va initiliser la position de la balle au centre du plateau, et la position initiale du plateau,
- cette fonction va aussi initialiser les directions de la balle
- si on déplace le plateau la position de la balle est recalculée, elle reste au centre du plateau tant que l'on a pas appuyé sur Espace,
- si on appuie sur la touche Espace, une propriété du jeu (game.start) passe à vrai, alors notre animation de la balle commence,
- Si le jeu est commencé et que l'on appuie sur Espace, le jeu s'arrête, game.pause passe à vrai
- Si on appuie de nouveau le jeu reprend, game.pause passe à faux
- Si on a fait game.gameOver, alors si on appuie sur Espace, la position du plateau, de la balle et la direction de la balle sont réinitialisées (initPositions()) et on peut recommencer le jeu.

**Astuce** : On va rajouter des propriété à notre objet jeu :

- start
- pause

Pour l'angle de la balle on peut diviser le plateau en 3.

- 1er tiers : la balle part vers le haut à gauche,
- 2eme tiers : la balle part vers le haut,
- 3eme tiers : la balle part vers le haut à droite.

Nous allons modifier la propriété direction de notre balle, elle contiendra 2 propriétés X et Y :

- ball.direction = {x:0,y:-1}

---

&nbsp;

## Etapes 05 - Brique

Enfin on va pouvoir jouer !

On va rajouter une brique sur le plateau de Jeu. Si la balle percute la brique elle disparait !

On peut aussi ajouter 2 briques... 3... 4...

Comment on va pouvoir gérer ça ?

---

&nbsp;

## Etapes 06 - Final

Bravo vous êtes autonome et maintenant vous allez pouvoir créer votre propre jeu. Comme un fil rouge, en cours si vous avez encore du temps puis chez vous (1h ou 2h le week-end par exemple), vous allez pouvoir finaliser ce Jeu.

*Par exemple :*

- Générer plusieurs ligne de briques,
- Gérer un score qui s'incrémente dès qu'une brique est brisée,
- Gérer des vies, par exemple on en a 3 au début.
- Gérer plusieurs niveau, on termine le niveau 1 on passe au 2 (gestion des niveaux sous forme de fichier JSON par exemple)
- ...

Bref c'est maintenant à vous de faire travailler votre imagination. Vous amusez, explorer le code et ses possibilités. Il n'y aura pas de correction plus avancée pour cette partie, le but n'est plus ici maintenant.

Votre code sera le meilleur ! Il y aura certainement des défauts, mais seul vous pourrez gommer ces défauts avec le temps, en faisant tester votre jeu... Il est temps de s'amuser, d'essayer, de se tromper, de réussir, bref de coder ;)
