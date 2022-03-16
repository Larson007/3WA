# Projet - Framework maison

## Introduction

À chaque nouveau projet, vous noterez que l'on se retrouve fatalement à reprendre du code du projet précédent. Il n'y aucun mal à cela, c'est un phénomène naturel : chaque projet a besoin d'un système de routing, chaque projet a besoin d'une connexion à la base de données, chaque projet a besoin d'une structure MVC avec un layout appelant une view dynamique, etc.

En programmation, ne pas chercher à réinventer la roue est un principe important. Chaque projet informatique se dresse sur les épaules des myriades de projets qui l'ont précédé.

Si vous avez déjà codé un carousel en javascript et que le projet suivant nécessite à nouveau un carousel, par exemple, vous connaissez cette notion. Un amateur ou un flemmard aura l'idée de copier-coller cet ancien code de cet ancien projet. Ce qu'on attend toutefois d'un professionnel, c'est la logique suivante :

« Je constate que j'ai régulièrement besoin de carousels dans mes projets, je vais donc avoir besoin d'une librairie capable de générer des carouels, et pensée suffisamment générique pour pouvoir fonctionner d'un projet à l'autre en faisant seulement varier quelques paramètres et configs. »

Et vous le faites déjà à échelle plus atomique au nom du principe DRY : plutôt que copier-coller plusieurs fois le même algorithme, vous allez au contraire ne le coder qu'une fois et en faire une fonction. En tout cas, à ce stade de la formation, cette recherche de généricité du code doit commencer à devenir un réflexe.

&nbsp;

## Framework

Un framework est une application du principe de généricité à échelle plus macroscopique, celle du projet.

Concrètement, un framework va nous fournir un ensemble de briques indispensables à un projet que nous n'aurons plus besoin de coder à chaque fois : routing, connexion DB, services, etc. En outre, le framework, comme son nom l'indique, va nous fournir un cadre de travail : les dossiers et fichiers y suivent des règles strictes, on ne met pas n'importe quoi n'importe où.

Il s'agit de s'imposer un « système », comme quand on range ses vêtements dans une armoire : les chandails avec les chandails, les chaussettes avec les chaussettes, les slips léopard avec les slips léopard. Les bénéfices sont nombreux : on trouve ce qu'on cherche plus rapidement, on réorganise les choses au besoin plus facilement.

Un framework comme Symfony ou Laravel est une énorme boîte à outils imposant un cadre de travail : les contrôleurs vont là, les modèles vont ici. En échange de cette concession de liberté, une fois leurs vertigineuses courbes d'apprentissage gravies, ces frameworks nous font gagner un temps précieux en nous offrant un nombre énorme d'outils : gestion d'événements, routing, abstraction des interactions avec la base de données, dynamisation des templates HTML, génération des formulaires, etc.

C'est exactement la même chose que quand vous achetez un grille-pain : plus besoin d'allumer un feu pour faire griller vos tartines. En automatisant la tâche répétitive de griller le pain, le grille-pain vous permet de concentrer votre temps sur ce qui est important : le choix de la confiture.

Un framework, c'est la même chose : en vous mâchant le travail autour des tâches répétitives telles que le routing, il vous permet de consacrer votre temps – et le budget du projet – à la business logic de chaque site web ou logiciel : la petite part de code original qui lui est véritablement propre, comme cette petite fonctionnalité exotique de gestion de planning, ou encore cet algorithme de gestion de droits très fine que demande le client.

&nbsp;

## Construire un grille-pain

Nous n'allons pas apprendre Symfony tout de suite.

Rassurés ?

Nous allons faire bien pire : coder un framework.

Avec le soutien de vos formateurs, vous allez vous aventurer dans la périlleuse tâche de créer ce qu'on appelle un framework maison : un framework créé sur mesure par vos délicates petites mains de jeunes pianistes.

Il vous sera alors possible de créer n'importe projet basique ayant pour fondement ce framework. En toute humilité. (:

&nbsp;

## Contraintes

Nous aurons besoin au minimum des fonctionnalités les plus courantes :

Routing fondé sur les paramètres GET ;
Automatisation de la connexion à la base de données ;
Structure MVC avec dynamisation d'une partie seulement du layout.
De plus, vous êtes désormais dans la cour des grands, aux clous la programmation procédurale : votre projet obéira aux lois divines de la Programmation Orientée Objets. Modèles mais aussi contrôleurs, services, routeur : tout est un objet.