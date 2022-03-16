# Module 02 - MVC, Classes et Cookies

## 01. MVC

### Le besoin de design pattern

Le code d'une application ne s'organise pas comme on gère le linge sale sur la chaise de la chambre à coucher. À ce stade de la formation, les projets sur lesquels vous allez travailler vont commencer à prendre de l'ampleur.

Nombreuses pages, fonctionnalités, données : un site web peut très vite devenir une grosse machine. Sans organisation, c'est le chaos. Sans organisation, chaque développeur participant à un projet peut nommer les fichiers comme il l'entend, les placer où il le souhaite, coder comme il en a envie. Et à mesure qu'un tel projet grandit, chaque modification, chaque évolution devient plus fastidieuse et dangereuse que la précédente, notre application devient un château de cartes que plus personne ne comprend.

Nous programmons donc une application en suivant un ensemble de règles architecturales. C'est ce que l'on appelle en programmation un design pattern. Organiser une base de code amène un ensemble de problématiques structurelles, aussi avons-nous construit avec le temps des conventions et des structures que nous nous imposons dans notre travail afin de répondre en amont à ces problématiques. On ne code alors plus n'importe comment, on obéit à une certaine structure-type.

&nbsp;

### Les bases d'un site web

Rappelons le fondement d'un site web, dans son fonctionnement traditionnel et courant :

Le client – au sens « utilisateur » du terme – effectue une requête auprès du serveur. « Je veux afficher la page de contact. » Le serveur réceptionne cette requête et s'organise intérieurement pour y répondre. Il doit analyser l'URL demandée pour savoir quelle page afficher, éventuellement communiquer avec MySQL pour récupérer des données si nécessaire, et en finalité générer un document HTML qu'il envoie au client.

Construire ce document HTML et l'envoyer en réponse au navigateur de l'utilisateur, c'est le but du jeu du web. Cette construction peut être plus ou moins complexe en fonction de la page ou de l'action demandée, complexité qui demande une certaine organisation. Comment agencer nos fichiers, comment les faire communiquer entre eux, comment nommer nos modules. Bref, un design pattern.

&nbsp;

### MVC

Il existe de nombreux design patterns en programmation. Dans le monde du web, et plus précisément dans le monde du PHP, le plus courant est le MVC, pour « Model – View – Controller ». C'est celui que vous rencontrerez le plus fréquemment dans une carrière classique de développeur PHP, et c'est notamment celui auquel obéissent les deux principaux frameworks du marché du travail : Symfony et Laravel.

Pourquoi le MVC plutôt qu'un autre ? Parce que c'est le design qui découle le plus naturellement des problématiques amenées par l'écosystème du développement web PHP et son histoire.

Un site web, c'est l'agencement de trois grandes composantes :

- L'interface visuelle ;
- Les traitements logiques ;
- La gestion des données.

S'imposer la règle de structurellement séparer ces trois composantes dans l'organisation d'une application est le paradigme de départ du design MVC.
