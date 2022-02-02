# Module 01 - Introduction et bases de la programmation

## 02. Web

### Qu'est-ce que le développement web ?

En tant que futurs développeurs web, vous allez travailler dans un secteur bien particulier de la programmation. Vous n'allez pas développer des portes de garages intelligentes, des GPS pour camions frigorifiques ou les IA du prochain Assassin's Creed. Fondamentalement, résumé trivialement, votre travail consistera à créer des sites web. Vous pouvez penser à ces blogs, forums et autres sites de commerce que vous parcourez quotidiennement, mais le web c'est aussi – en coulisses – des myriades d'outils web internes à des entreprises comme des systèmes de gestion de plannings, de comptabilité, etc.

Il serait impossible de lister exhaustivement toutes les applications du développement web, car les besoins sont aussi variés et nombreux que les entreprises et particuliers qui les expriment. Mais retenez qu'à l'inverse de « clients lourds », c'est-à-dire des logiciels qui s'installent nativement sur votre ordinateur ou votre téléphone mobile (VLC, Dark Souls, Sublime Text), la spécificité des sites et applications web est de fonctionner exclusivement grâce à des navigateurs web.

### Relation client – serveur

Magali tape « photos de chatons mignons » sur Google. Deux cents milisecondes plus tard, des tas de photos de chats s'affichent sur le navigateur. Si cette assertion vous parle probablement, elle est toutefois très simplificatrice.

Vous êtes client dans une pizzeria. Le serveur vient vous voir. Vous lui dites « Une margherita, et qu'ça saute ! » Huit minutes plus tard, le serveur pose une margherita sur votre table. Que s'est-il passé pedant ces huit minutes ? Le serveur est allé informer le pizzaïolo de votre commande. Celui-ci ne va pas la traiter tout de suite, il termine d'enfourner la calzone qu'il vient de plier. Puis c'est votre tour. Il étale la pâte, étale la tomate, ajoute l'origan, l'huile d'olive, la mozzarella, le basilic. Il vous reconnaît depuis la cuisine, vous êtes client fidèle, il sait que vous l'aimez bien croustillante et la laissera au four trente secondes de plus rien que pour vous. Et finalement il la tend au serveur qui vous l'apporte à table. Bon appétit !

Revenons à Magali, et reformulons sa situation ainsi :

Magali tape « photos de chatons mignons » sur son navigateur. Le navigateur de Magali envoie une requête au serveur de recherche de Google, requête dont le corps est « photos de chatons mignons ». Le serveur de Google traite la demande, la comprend et parcourt son immense base d'images. Google piste Magali depuis des années, il la connaît, il sait par exemple qu'elle adore les chats roux mais qu'au contraire elle déteste les maine coons qu'elle trouve arrogants ; ainsi Google va trier ses résultats et calculer des scores de pertinence. Enfin, le serveur de Google renvoie un résultat personnalisé au navigateur de Magali, contenant en première page de nombreux chats roux.

Le client c'est votre navigateur, qui n'est autre qu'une fenêtre sur le web. Firefox, Chrome, Safari, Opera, Edge, Vivaldi, Brave, Lynx, il en existe des tripotées, ils ne se ressemblent pas forcément et vous avez sans doute vous-mêmes déjà vos préférences, mais leur rôle reste toujours le même : envoyer des requêtes à des serveurs, et recevoir des réponses.

![Schma dune recherche](images/Schma_dune_recherche.png)

### Relation requête – réponse

Vous envoyez une requête à un serveur simplement en ouvrant une page, ou encore en validant un formulaire. Les requêtes peuvent avoir différentes formes, mais pour ne pas entrer trop vite dans les détails – nous y viendrons –, contentons-nous pour l'heure de parler de textes. Un texte précis envoyé à une adresse précise déclenchera un certain traitement qui renverra une certaine réponse. La requête textuelle chatons mignons envoyée à l'adresse https://www.qwant.com nous renverra un certain résultat.

Et une réponse, ça ressemble à quoi ? La réponse d'un serveur peut se présenter sous de nombreux formats. JSON, XML, Turtle, N3, CSV, etc. Toujours du texte, accompagné éventuellement d'autres fichiers de ressources (CSS, images, etc.) Nous venons de citer des formats dont vous n'avez peut-être jamais entendu parler, mais le format de réponse le plus connu, celui qui permet vraiment au navigateur d'affichier une page web au sens où on l'entend, celui-là, vous le connaissez désormais bien et allez l'utiliser de manière intensive : le HTML.

Quand vous faites ce qu'on appelle de l'intégration, et c'est un métier à part entière, vous préparez en fait les squelettes de ce que seront les futures réponses de votre serveur. Le navigateur, lui, aura pour mission d'interpréter ce HTML, de l'agencer selon son CSS associé, d'y intégrer les images, etc. en somme d'afficher la réponse comme on attend de lui qu'il l'affiche : une jolie page web fabriquée par des intégrateurs talentueux.