# Module 01 - Introduction et bases de la programmation

## window.prompt

Jusqu'à maintenant, nous ne connaissons qu'une seule fonction : `console.log`. Apprenons-en une deuxième :

````js
const userAge = window.prompt("Quel âge avez-vous ?");
console.log(userAge);
````

Si vous exécutez cette instruction, votre navigateur va ouvrir une petite fenêtre avec un champ de texte en vous posant cette question « Quel âge avez-vous ? » Vous allez entrer par exemple « 22 » dans le champ, valider, et la console affichera alors "22".

`window.prompt` a pour fonction de demander quelque chose à l'utilisateur, et de renvoyer la réponse ainsi reccueillie sous forme de String. Ici nous stockons directement cette valeur de retour dans la variable userAge pour ensuite l'afficher.

`window.prompt` renvoie toujours, toujours une String. Même si l'utilisateur entre le nombre 12, `window.prompt` renverra en fait la chaîne `"12"`.
