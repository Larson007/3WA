# Module 01 - Introduction et bases de la programmation

## 07. Types

### Qu'est-ce qu'un type de valeur ?

Nous savons déclarer des variables et leur assigner des valeurs.

````js
let name = "Magali";
````

Très simple. Je dis à ma RAM « Soit la variable `name` égale à la valeur `"Magali"` », et elle s'en souvient aussi longtemps que nécessaire. Quand je reviens voir ma RAM pour lui demander la valeur de name, elle sait parfaitement me répondre :

````js
console.log(name);
````

Maintenant que nous comprenons bien le principe de stockage d'une valeur dans la mémoire vive de l'ordinateur, en tout cas dans le principe et pas dans le détail technique bien sûr, attardons-nous un peu sur la valeur elle-même.

En programmation, les valeurs sont associées à un type. Par exemple, `4` est un nombre, et `"Salut"` est une chaîne de caractères. Qualifier le type d'une valeur peut vous sembler trivial mais c'est une chose très importante en informatique, vous le réaliserez très vite. Par exemple, vous ne pouvez pas multiplier un nombre par une lettre, ça n'aurait aucun sens. De même, si je vous demande votre âge, la réponse sera forcément un nombre.

Parcourons quelques types existant en javascript, en commençant par ceux que l'on connaît déjà.

### Le type *String*, ou chaîne de caractères

Une chaîne de caractères, plus couramment appelée String dans notre contexte, est tout simplement un texte.

« Bonjour ! »

« J'ai 4 ans. »

Ce sont des Strings. Pour déclarer une variable dont la valeur est de type String, nous écrivons notre texte entouré soit de guillemets doubles "", soit de guillemets simples '', soit d'accents graves ``.

````js
let msg = "Salut";
let txt = 'Hey';
````

Ces deux premières formes fonctionnent exactement de la même manière, javascript ne fait aucune différence. Essayez toutefois de rester cohérents et soit d'utiliser toujours la même, soit de respecter une certaine logique dans l'usage d'une forme ou de l'autre. Dans tous les cas, demandez leurs préférences à vos formateurs et suivez leurs conseils.

````js
let msg = `
Salut
la
planète
`;

````

Cette troisième forme est un peu particulière, elle sert à conserver les retours à la ligne au sein d'une String. On l'emploie notamment pour générer du HTML en javascript :
````js
let paragraph = `
<p>
  Salut !
</p>
`;
````

Retenez surtout les deux premières formes pour l'instant.

Parlons désormais de la « concaténation ». Concaténer plusieurs chaînes de caractères est l'opération de les joindre pour ne former qu'une seule et unique chaîne. Ceci se fait grâce au symbole +.

Exemple :

````js
const word1 = "Salut";
const word2 = "Magali";
console.log(word1 + word2);
````

Que va afficher ce code ?` "SalutMagali"`. Oui, sans espace. On a demandé au javascript de joindre `"Salut"` et `"Magali"`, il les a bêtement collés, on ne lui a jamais parlé d'espace. Pour avoir un résultat plus propre, il aurait fallu écrire ceci :

````js
const word1 = "Salut ";
const word2 = "Magali";
console.log(word1 + word2);
````

Ce code affichera bien `"Salut Magali"`. Notez bien l'espace à la fin de la String à la première ligne.

### Le type *Number*, ou nombre

Très simple. En javascript, tous les nombres sont toujours de type Number.

````js
let x = 4;
let y = 1344.123;
const PI = 3.14;
````

Attention ! Ne confondez pas le nombre `4` avec la chaîne `"4"`. Quelle différence ? On l'a dit, un nombre est un nombre, un texte est un texte. Si je vous dis « Nous sommes le 16 juillet », ma phrase comporte certes un nombre au sens humain du terme, mais celui-ci n'est pas exploitable par un ordinateur pour pratiquer des opérations arithmétiques par exemple. La machine voit ici « 16 » comme le morceau d'une chaîne de caractères n'ayant pas vocation à être traité comme un véritable nombre.

Vous verrez toutefois très bientôt qu'il est assez simple de transformer la chaîne `"6"` en nombre `6`. On appelle cela une conversion de type, ou cast. Nous y reviendrons.

Nous l'avons dit, en javascript, tous les nombres sont toujours de l'unique type Number. Notez que cette simplicité est une spécificité de javascript. Les autres langages, dans leur grande majorité, implémentent les nombres de façon plus complexe, distinguant notamment nombres entiers, nombres décimaux, etc. Vous aurez l'occasion de voir cette distinction en PHP.

### Le type *Boolean*, ou... booléen

Du nom du mathématicien George Boole, une variable de type booléen ne peut contenir que deux valeurs possibles : `true`, ou `false`. Vrai ou faux. C'est tout.

````js
let isCatHidden = true;
let isCatWhite = false;
````

Bien qu'il puisse vous sembler abstrait pour le moment, c'est un type absolument fondamental en programmation.

### C'est tout ?

Non. Il faudra encore parler des objets, des tableaux, ou même de null. Chaque chose en son temps. Ça fait déjà beaucoup à digérer. (:
