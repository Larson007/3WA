# Module 01 - Différences PHP / JavaScript & Base de données

## Projet - Robot Factory 2

### Robots sur mesure

Notre usine de robots est très fonctionnelle. Elle présente toutefois un problème majeur : nous n'avons aucun contrôle sur la construction des robots. Leurs noms sont générés aléatoirement, par exemple.

Quand l'utilisateur arrive sur la page, il verra désormais un formulaire de réglage de robot. Ce formulaire demandera à l'utilisateur de saisir un nom pour son robot. Puis lorsque l'utilisateur valide le formulaire, la page se recharge et le robot est créé avec le nom ainsi entré.

Notez que ce champ n'est pas requis. Si l'utilisateur valide le formulaire sans saisir de nom, alors celui-ci sera toujours généré aléatoirement.

Pour le reste, le robot effectue toujours les actions du précédent cours : dire son nom, choisir un nombre, dire son nom à l'envers, etc.

Oh ! Et bien sûr, cette fois on divise les fichiers ! Nous pourrions imaginer le découpage suivant :

- Un fichier `robot_functions.php` dédié aux fonctions propres au robot

- Un fichier `generic_functions.php` dédié aux fonctions génériques

- Un fichier `homepage.phtml` dédié au template HTML à proprement parler. L'extension `phtml` sera utilisée par convention pour les fichiers contenant essentiellement du HTML mais aussi un peu de PHP.

- Un fichier `index.php`, point d'entrée du programme, servant de jonction entre tous les autres fichiers
Simple ! C'est parti.

&nbsp;

### Indices

- Vous aurez besoin de rendre votre HTML dynamique : vous affichez le formulaire si et seulement s'il n'a pas déjà été soumis, sinon vous affichez le robot nouvellement créé.  Jetez un œil à la syntaxe alternative des structures de contrôle

- N'oubliez pas la fonction isset. Vous pourriez aussi avoir besoin de la fonction empty.

&nbsp;

### Bonus 1

Mon robot est-il un diabolique monstre tueur de métal, ou un sympathique esclave servile ? L'utilisateur a désormais la possibilité de ne plus se fier au destin pour ce choix qui pourrait bien déterminer l'avenir de l'humanité.

Un champ de formulaire permet à l'utilisateur de spécifier la moralité de son robot. S'il le souhaite, il a toujours la possibilité de s'en remettre au hasard.

&nbsp;

### Bonus 2

Si notre robot est diabolique, la dernière phrase s'affiche en rouge et en gras.

&nbsp;

### Bonus 3

Si l'utilisateur saisit un nom de robot, obligez-le à respecter le format « XX-9999 », c'est-à-dire deux lettres, un tiret et quatre chiffres. Si le nom saisi ne correspond pas au format demandé, empêchez la création du robot.

Ce bonus est d'un niveau un peu avancé, même pour les bons élèves. Ce n'est pas grave si vous préférez plutôt améliorer librement votre robot, ou aider vos camardes. Si vous tenez malgré tout à accomplir ce bonus 3, n'hésitez pas à demander de l'aide à vos formateurs.