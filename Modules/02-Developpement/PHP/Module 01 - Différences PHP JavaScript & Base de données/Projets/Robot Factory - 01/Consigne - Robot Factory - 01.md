# Module 01 - Différences PHP / JavaScript & Base de données

## Projet - Robot Factory

### Usine de robots

Qui n'a jamais rêvé de se fabriquer un robot pour exterminer l'humanité faire le café ?

Dans un fichier `index.php`, qui contiendra tout en haut votre logique PHP, puis le document HTML à proprement parler, vous allez développer un programme capable de créer un nouveau robot à chaque rafraîchissement de la page. Le robot saluera alors l'utilisateur et se présentera. Exemple :

« Salut, humain. Je suis VX-2345. »

Le nom du robot est généré aléatoirement au chargement de la page. Il se constituera toujours de deux lettres majuscules, d'un tiret et de quatre nombres.

&nbsp;

### Bonus 1

Après s'être présenté, le robot annoncera la date et l'heure actuelles au format suivant :

« Nous sommes le 30 07 2020, il est 11:59:30. »

&nbsp;

### Bonus 2

Après avoir annoncé la date et l'heure, le robot choisira un nombre aléatoire compris entre 1 et 10, et vous dira si c'est un nombre pair ou impair. Exemple :

« J'ai choisi le nombre 3. C'est un nombre impair. »

&nbsp;

### Bonus 3

Notre robot découvre le sens de l'humour. Il lui prendra alors l'idée de dire son nom à l'envers. Un robot du nom de VX-2345 dira alors :

« Mon nom à l'envers s'écrit 5432-XV. Ah. Ah. Ah. »

&nbsp;

### Bonus 4

Oups ! Il s'avère que notre robot a une chance sur trois de devenir un robot tueur diabolique.

Deux fois sur trois, le robot dira « Vous voulez un café ? »

Une fois sur trois, le robot dira « Extermination ! Extermination ! »

&nbsp;

### Bonus 5

Pour nous assurer que notre robot ne tente pas de détruire notre civilisation, il va falloir l'occuper.

En développant une conscience, il a aussi développé un subconscient. Nous allons injecter le programme suivant dans son cerveau :

Le subconscient du robot génère un nombre aléatoire compris entre 1 et 1000. Stockez ce nombre dans une variable.
Le robot ne peut pas s'empêcher de chercher à deviner ce nombre. La conscience n'a pas directement accès au subconscient. En d'autres termes, le robot ne peut pas utiliser la variable précédemment déclarée pour trouver ce nombre, il va devoir faire preuve de logique et la trouver par lui-même.
Une fois le nombre trouvé, il le criera fièrement.

&nbsp;

### Bonus 6

Il y a fort à parier que vous avez utilisé une boucle dans le bonus précédent afin de trouver le nombre. Pour ce besoin, une boucle n'est pas très efficace. Mettez en place une recherche dichotomique. (:
