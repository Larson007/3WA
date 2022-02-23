# **VueJs** *(FrameWork Js)*

Lien vers la formation :

> <https://mega.nz/file/bKhBBDzD#25B6-5kMj99r_CWN381rEY27Mi5Gb05AIyOYoImTV2w>

## **SOMMAIRE**

* **Documenation**
* **Installation**
* **Les Données**
* **Les Méthodes**
* **Les Directives**
* **Les évènements**
* **Les propriétés calculés**
* **Attribues `style` et `class`**
* **Les formulaires**
* **Les Composants**
* **Les effets de transitions**
* **La mise en production**

&nbsp;

---
---

## **Documentation**

*La documentation est disponible en Français :*

> <https://fr.vuejs.org/v2/guide/index.html>

&nbsp;

---
---

## **Installation**

---

### **Plugin Navigateur**

`Vue.js` devtools :

> <https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd/related>

Ce plugin de debuggage `Vue.js` permet :

* De voire les propriétés de notre application en temps réel
* les événement émis
* Des indices de performance
* Accèes au routage de l'application *(si usage de view router)*
* VueX qu gère la zone de stockage

 Ce plugin est accèssible via la console du navigateur sur une page utilisant `Vue.js` en mode **développement**

Si le plugin génere le message d'erreur suivant :

> Vue.js is detected on this page. Devtools inspection is not available because it's in production mode or explicitly disabled by the author.

Il suffit d'indiquer la ligne suivante dans le fichier racine app.js

````js
Vue.config.devtools = true;
````

 &nbsp;

---

### **CDN**

Lien vers le CDN :

> <https://vuejs.org/v2/guide/installation.html>

````html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.js"></script>
````

***ATTENTION :*** *Pour bénéficier de la dernère version, penser a retirer la ***version mineur*** du CDN pour bénéficier de la dernier révision automatiquement de celle-ci.*

````html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.js"></script>
````

***ATTENTION :*** *Penser à rajouter `/dist/vue.js` à la fin du CDN afin que le plugin **Vue.js devtools** puissent fonctionner*.

 &nbsp;

---

### **app.js**

Ce fichier contiendra nos fonctions `Vue.js` et sera appeler en `defer` *(Ce chargera après le CDN)*

* `1.` On commence par créer le fichier dans notre dossier de projet :

````js
projet/app.js
// ou
projet/js/app.js
````

* `2.` On importe le fichier dans notre `index.html` après le **CDN** en indiquant dans la balise `defer`:

````html
<script src="app.js" defer></script>
````

 &nbsp;

---

### **Initialisation du projet**

Afin d'initialiser `Vue.js` sur un projet, on va passer par 2 étapes :

* `1.` on va placer un `#id app` dans notre html qui contiendra notre application `Vue.js` :

````html
<!-- index.html -->

<body>
    <div id="app">
        <!-- Vue.js sera appeler dans la <div> dont l'id est app -->
    </div>
</body>
````

* `2.` On fais appel dans le fichier `app.js` à l'**Objet** `Vue` :

````js
// app.js

const vm = new Vue({
    el:'#app'
})
````

&nbsp;

---
---

## **Les Données**

---

***ATTENTION : Les données doivent toujours avoir une valeurs par défault !***

Les données vont permettres à l'application d'être réactive, lorsque celle-ci seront mise à jour, l'affichage sera également modifier.

* Elle se déclare via la **propriétée** `data`
* Elle contiend un litérale d'`Objet {}`

Les données contiennent donc toutes les valeurs que l'on souhaiterai afficher

````js
// app.js
const vm = new Vue({
    el:'#app',
    data: {
        tutos: [
            {name: "Laravel 5"}
        ]
    }
})

// Ici, la propriété data est un objet qui contient un tableau
````

&nbsp;

Pour afficher une donnée, on utilisera la synthaxe des double `{{...}}` dans le fichier `index.html`

````html
<!--index.html-->
<h1 class="text-center">{{ tutos[0].name }}</h1>

<!-- Ici, on affiche la donnée stocker dans data avec les double {{}} -->
````

&nbsp;

---
---

## **Les méthodes**

---

### **Requête HTTP Asynchrone avec `Axios`**

`Axios` est une **API** ***haut niveau*** qui va nous permettre d'exécuter des ***requêtes Http async*** (comme **API** `fetch`)

* Permet de faire des `XMLHttpRequests` depuis le navigateur
* Permet de faire des `request HTTP` depuis `Node.js`
* Support des `Promise` API (fetch...)
* Intercepte les `request` et les `response`
* Transforme les `requests` et `responses` en données
* Annule les `requests`
* Transforme automatiquement les données au format `JSON`
* Protection contre les attaques `XSRF`

---

&nbsp;

#### **Installation Axios**

> <https://github.com/axios/axios#installing>

Via le CDN :

````html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js" defer></script>
````

Ou via npm

````cmd
npm install axios
````

&nbsp;

#### **Exemple Axios**

Dans l'exemple suivant on va utliser **Axios** afin de ce connecter a une `BDD MySQL` sur le **localhost** en passant par un fichier `data.php` qui contient **les données** `PDO` :

````php
// data.php

<?php
header('Content-Type: application/json');

const HOST = 'localhost';   // Votre Host ('IP', 'localhost')
const PORT ='3308';         // Le port MySQL
const DB = 'homestead';     // Nom de la base de données
const USER = 'root';        // Nom d'utilisateur ('homestead', 'root', ...)
const PASSWORD = '';        // Mot de passe ('root', 'secret', '', ...)

$db = new PDO('mysql:host=' . HOST . ';port=' . PORT . ';dbname=' . DB . ';charset=utf8', USER, PASSWORD);
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

if (isset($_GET['q']) && $_GET['q']) {
  $query = $db->prepare('SELECT * FROM tutos WHERE name LIKE :q OR content LIKE :q');
  $query->bindValue('q', '%' . $_GET['q'] . '%', PDO::PARAM_STR);
  $query->execute();
} else {
  $query = $db->query('SELECT * FROM tutos');
}

$tutos = $query->fetchAll();

echo json_encode($tutos);
````

&nbsp;

Maintenant que le `PDO` a bien été configuré afin de ce connecter à la BDD, on va utiliser **Axios** afin de faire notre `Promise` et récupérer les données de manière ***Asynchrone*** (comme pour un `fetch`) en passant par une **`METHODS:`** avec une gestion des erreurs :

````js
// app.js
const vm = new Vue({
    el:'#app',
    created(){                  // la fonction created() permet d'afficher les données de la BDD contenu dans import(json) pour le template html
        this.import()
    },
    data: {
        tutos: [],
        error: {
            active: false,
            message: "",
        }
    },
    methods: {
        import() {
            axios.get('data.php')       // axios utilise une synthaxe quasi-similaire à l'API fetch
            .then(response => {
                if (response.data.length) {
                    this.error.active = false
                    this.tutos = response.data
                } else {
                    this.error.active = true
                    this.error.message  = "Désolé. Pas de résulat : ("
                }
            })
            .catch( ()=> {
                this.error.active = true
                this.error.message  = "une erreur s'est produite : ("
            })
        }
    }
});
````

&nbsp;

Les données sont dorénavants stocker à la racine *(`<root>`)* de l'`app` dans le tableau `[tutos]` .

On peut les visualiés dans la console via le plugin `Vue.js` devtools :

![100% center](images/axios.png)

&nbsp;

***Afin de mieux visualisé les données traiter pour les exemples suivants, voici le contenu de la `Bdd homestead` :***

![100% center](images/bdd-homestead.png)

&nbsp;

---
---

&nbsp;

## **Les directives**

---

Les directives permettent d'envoyer des données dans le `DOM HTML`

Exemple :

````html
<div v-text="message"></div>
````

* Ici, le préfixe est `v` qui représente la directive par défault de `Vue.js`. L'`ID` de la directive `v` est `text` et l'expression de celle-ci est `"message"`.

* Cette directive demande à `Vue.js` de mettre à jour le `textContent` de la `<div>` à chaque fois que la propriété du `"message"` dans l'instance `app` de `Vue.js` est modifier.

* Ainsi le rendu de la `<div>` sera la donnée contenu dans `message` défnit dans `app.js`

&nbsp;

Les directives support la concaténation :

````html
<div v-text="'hello ' + user.firstName + ' ' + user.lastName"></div>
````

---

&nbsp;

### **Rendu conditionnel `v-if` & `v-show`**

Permet d'avoir un rendu de la directive si une condtion est respecté :

````html
<!--index.html-->
<h1 v-if="error.active" class="text-center">{{error.message}}</h1>
<h1 v-else="error.active" class="text-center">{{error.message}}</h1>
    <!--OU-->
<h1 v-show="error.active" class="text-center">{{error.message}}</h1>

<!--
v-if / v-show       : la directive de rendu conditionnel
error.active        : Gestion des erreurs définit dans le app.js
{{error.message}}   : Les doubles {{...}} permettent d'afficher le message définit dans app.js
-->
````

La différence sur les 2 conditions suivantes :

* `v-show` : va générer le code que la condition soit `true` ou `false` dans le `DOM html`. Il va juste appliquer un `display:none` sur la condition qui n'est pas remplie. Cette solution est a préviligié si la permutation de la condition est récurrente *(`true` -> `false` -> `true` -> `false` ...)*

* `v-if` / `v-else-if` / `v-else` : Seul la condion `true` sera générer dans le `DOM html` ***(meilleur perfomance si la condtion ne permute pas)***

---

&nbsp;

### **Boucles `v-for`**

La directive `v-for` permet de faire des boucles pour afficher des chaque élémént d'un tableau `[]` dans un `éléments html`.

````html
<!--index.html-->

<div v-for="tuto in tutos" :key="tuto.id" class="mb-6">

<!--
v-for="tuto in tutos"   : permet de boucler sur chaque élémént tuto du tableau tutos de app.js

:key="tuto.id" (= v-bind:key="tuto.id") : On attribue à chaque élément de tuto un id 
-->
````

* `Vue.js` demande lors de l'usage de la directive `v-for` d'attribuer une clé unique à chaque élémént générer.

* Pour ajouter un `attribue 'ID'`, il faut utiliser la directive `v-bind:#` ***( = `:#` )***.

---

&nbsp;

### **Directive Custom `v-bind:#`**

* Cette directive permet de créer une propriété personnalisé de `Vue.js`.

* On doit l'utiliser à chaque fois que l'`attribue` d'un `élémént html` renseigne une expression `Js`

* Il est recommander d'utiliser une synthaxe plus légère qui consiste a just ecrire `:#` au lieu de `v-bind:#`

Exemple :

````html
<!--index.html-->

<img :src="tuto.img" class="rounded-t">
<!-- OU -->
<img v-bind:src="tuto.img" class="rounded-t">
````

---

&nbsp;

### **Directive `v-model`**

Permet de lier une donnée à un champ de formulaire

> Voire le chapitre sur les [Formulaires](##-**Les-formulaires**)

&nbsp;

---
---

&nbsp;

## **Les évènements**

---

* Comme en `Js native`, les événements vont permettre d'effectuer des actions sur le `DOM html` *(`onCLick`, `onPress`...)*.
* Pour cela on va a nouveau utilsé des directives

---

&nbsp;

### **Directive `v-on:#` *(SANS modificateur)***

* Le raccourcie de la directive `v-on:#` est `@#`

Vidéo :

> 03-Les évènements / 01.Les évènements classiques

---

&nbsp;

### **Directive `v-on:#` *(AVEC modificateur)***

Modificateurs d’évènements :

> <https://fr.vuejs.org/v2/guide/events.html#Modificateurs-d%E2%80%99evenements>

ils permettent de modifier le comportement par défault des évènements

* `.prevent` : annule l'action par défault *(= `preventDefault` en `Js`)*

Exemple :

* `@submit.prevent` : Annule le comprtement par défault de la soumission de formulaire *(La touche `Enter` ne le soumettra pas)*
* `@keyup.enter` : Le touche `Enter` permettra d'appeler à la place de la soumission la méthode `typing`

````html
      <form action="" @submit.prevent>

        <input @keyup.enter="typing" v-model="query" type="text" placeholder="Cherchez la formation de vos rêves ! :D" class="self-center bg-white h-16 text-lg text-gray-700 px-4 rounded shadow-lg mb-10 md:mb-16 w-full md:w-3/4 lg:w-1/2">

      </form>
````

&nbsp;

---
---

&nbsp;

## **Les propriétés calculés**

---

* Les propriétés calculer sont déclarer à l'interieur de la propriété `computed`

* Elles vont formater des données pour les afficher côter **vue**

Exemple :

````html
<!--index.html-->
<h1 class="self-center mb-10 text-2xl opacity-50">{{ counter }}</h1>
<!--
    {{ counter }} : l'expression Js est définit dans app.js
-->
````

````js
// Instanciation du App (*vm pour View Model)
const vm = new Vue({

    el:'#app',

    ...

    ...

    computed: {
        counter(){
            //return `${this.tutos.length} Résultat`
            return (this.tutos.length) + " Résultat"
        }
    }
});

// La méthode 'computed' va formaté et retouner la longuer du tableau tutos  
````

Resultat :

````txt
11 Résultat

et NON

tutos[11] Résultat
````

&nbsp;

---
---

&nbsp;

## **Attribues `style` et `class`**

---

* Lorsque les attribues html `styles`  et `class` sont modifier via le `v-blind:`, elles bénéficient de **fonctionnalitées en +**
* Elles ce déclarent avec `:` et nécéssites un `objet` appelé par des accolades simples `{'NomDeLaClass': Boolean}` pour afficher les valeurs appelées si la conditions est remplie

---

&nbsp;

### **`:class`**

L'attribue `:class` prend respect la synthaxe suivante :

* `:class="{'NomDeLaClass': Boolean}"`

Exemple

````html
<!--index.html-->

<h1 class="self-center" :class="{'text-gray-600': !tutos.length}">{{ counter }}</h1>

<!--
    L'attribue text-gray-600 sera déclarer si le tuto.lenth est vide
-->
````

---

&nbsp;

### **`:style`**

* Elle ce déclare comme l'attribue `:class`
* Permet d'afficher une expression `Js` définit dans la méthode `data` de l'`objet Vue` dans **app.js**

Exemple :

````js
//app.js

const vm = new Vue({

    el:'#app',

    data: {
        color: 'red',
        size: '5',
    },
});
````

````html
<!--index/html-->
<h1 class="self-center" :style="{ color: color, 'font-size': size + 'em' }">{{ counter }}</h1>
````

&nbsp;

---
---

&nbsp;

## **Les formulaires**

---

* On utilisera la déclaration `v-model`

---

&nbsp;

### **Champs de type `Radio`**

````html
<!--index.html-->
<div id="app">
    <h1>FrameWork sélectionné : {{framework}}</h1>
    <input type="radio" id="vue" value="Vue.js" v-model="framework">
    <label for="vue">Vue.js</label>
    <input type="radio" id="react" value="React" v-model="framework">
    <label for="react">React</label>
</div>

<!--
    {{framework}}           : va afficher le data.framework:"" définit dans app.js
    v-model="framework"     : va placer la value dans data.framework:""
-->
````

````js
//app.js
const vm = new Vue({
    el:'#app',

    data: {
        framework: ''
    }
});
````

Si l'on souhaite donnée une des 2 valeurs des inputs par ***défault***, il suffit de la définir dans le `data.framework` de **app.js**

````js
//app.js
    data: {
        framework: 'Vue.js'
    }
````

---

&nbsp;

### **Champs de type `checkbox`**

***`1.` Dans le cas ou la `checkbox` a un usage de validation *(ex : CGV)****

Exemple :

* Par défault si la case n'est pas coché, elle retoune un `false`
* Et devient `true` lorsque celle-ci est coché

````html
<!--index.html-->
<div id="app">
    <h1>Veuillez cochez la case pour accpeter les conditions générales</h1>
    <input type="checkbox" id="checked" v-model="checked">
    <label for="checked">{{checked}}</label>
</div>

<!--
    {{checked}}             : va afficher la valeur de data.checked:"" qui est un boolean
-->
````

````js
//app.js
const vm = new Vue({
    el:'#app',

    data: {
        checked: false
    }
});
````

&nbsp;

***`2.` Dans le cas ou la `checkbox` a un usage de choix multiples***

````html
<!--index.html-->
  <div id="app">
    <h1>Pack : {{pack}}</h1>
    <input type="checkbox" id="train" value="train" v-model="pack">
    <label for="train">Train</label>
    <input type="checkbox" id="hotel" value="hôtel" v-model="pack">
    <label for="hotel">Hôtel</label>
    <input type="checkbox" id="repas" value="repas" v-model="pack">
    <label for="repas">Repas</label>
  </div>

<!--
    {{pack}}            : va afficher sans formatage le contenu [pack] de app.js
    v-model="pack"      : la valeur de chaque input va être envoyer dans [pack]
-->
````

````js
//app.js
const vm = new Vue({
    el:'#app',

    data: {
        pack: ['hôtel'] // valeur par défault précoché
    }
});
````

---

&nbsp;

### **Balise de type `<select>`**

````html
<!--index.html-->
  <div id="app">
    <select v-model="vol">
      <option>Allez</option>
      <option>Allez-Retour</option>
    </select>
  </div>
````

````js
//app.js
const vm = new Vue({
    el:'#app',

    data: {
        vol: '' // Si on veut une valuer par défault, il suffit d'indiquer la valeur de <option> dans les ''
    }
});
````

&nbsp;

---
---

&nbsp;

## **Les Composants**

---

L'interêt d'utiliser des `composants` sont nombreux :

* Permet de séparer la logique de l'application en plusieurs blocs *(Modules, SFC)*
* La possibilté d'utiliser un composant plusieurs fois
* Optimise la structure et l'organisation de l'application

Il existe 3 méthodes pour créer des composants :

* `1.` La méthode component
* `2.` Les singles files components *(nécéssite WebPack)*
* `3.` Via la création de litéral d'`Object` avec le template et les différents éléments du composent

Dans l'exemple suivant, c'est la méthode `1` ***component*** que l'on va présenter !

---

&nbsp;

### **La structure**

Comme indiquer en préambule, les `composants` vont permettre de séparer le code en plusieurs bloc :

![100% center](images/composant.png)

---

&nbsp;

### **La synthaxe**

````js
//app.js
Vue.component('nom-du-composent', {
    template: '<le code html>',         // notre template html
    data() {                            // Méthode data()
        return {
            tutos: [],                  // La donnée du data:
        }
    }
})
````

````html
<!--index.html-->
<nom-du-composent></nom-du-composent>

<!--
    On met le nom du composent dans des balises <> pour l'appeler sur notre fichier html
-->
````

&nbsp;

Exemple :

````js
//app.js
Vue.component('tuto-list', {
    template: `
    <div>
        <tuto-list-item v-for="tuto in tutos" :key="tuto.id"></tuto-list-item>
    </div>
    `
})

Vue.component('tuto-list-item', {
    template: `
    <div>
        <div>
        <img :src="tuto.img">
            <div>
                <h1>{{tuto.name}}</h1>
                <p>{{tuto.content}}</p>
                <a :href="tuto.url" target="_blank">Voir un extrait</a>
            </div>
        </div>
    </div>
    `
})
````

````html
<!--index.html-->
<tuto-list></tuto-list>

<!--
    tuto-list-item est appeler dans le template de tuto-list
-->
````

**ASTUCE :** Il suffit de placer le code entre le symbole **`** pour pouvoir placer **les balises html** dans le template sur ***plusieurs lignes***

---

&nbsp;

### **L'héritage *parents* `->` *enfant***

> <https://fr.vuejs.org/v2/guide/components-props.html#Types-des-props>

Pour transmettre des données d'un éléménts `parent` vers un éléments `enfant`, il suffit de renseigner un **attribue** `props` via une déclaration `v-bind:#`

````html
<!--index.html-->
<tuto-list :error="error"></tuto-list>
````

````js
//app.js
Vue.component('tuto-error', {
    template : '<h1 v-show="error.active" class="text-center font-hairline text-2xl sm:text-3xl md:text-4xl text-white">{{ error.message }}</h1>',

    props: {
        required: true,     // requiered va nous retourner une erreur cibé en cas de pb (ce qui facilite le débogage)
        type: Object,       // On précise le type de la donnée reçu du parent
    }
})

````

---

&nbsp;

### **Un *bus d'évènements***

Un ***bus d'événements*** permet de faire passer des données entre les différents `composent` peut importe leur liens de parentés.

> Video 05-04

&nbsp;

**Il est préférable d'utiliser la biblihotèque ***`VueX`*****

&nbsp;

---
---

&nbsp;

## **Les effets de transitions**

---

&nbsp;

Documentation :
> <https://fr.vuejs.org/v2/guide/transitions.html>

&nbsp;

La logique de transition `Vue.js` :

![100% center](images/transition.png)

&nbsp;

Pour bénéficier d'**effet de transition** avec `Vue.js`, il faut  :

* `1.` utilisé **composant conteneur** `<transition name="`#`"></transition>`
* `2.` Utilisé les class spéciales  de transition `v-enter` & `v-leave`

Exemple :

````js
//app.js

const vm = new Vue({
    el:'#app',
    data: {
        show: true  // Par défault show retourne le boolean true
    }
})
````

````html
<!--index.html-->

    <div id="app">
      <button @click="show = !show">Permuter</button>
      <transition name="test">
        <h1 v-show="show">Mon texte</h1>
      </transition>
    </div>

<!--
    <button @click="show = !show">  :   A chaque click sur le <button> le boolean de show changera

    <transition name="test">        :   On utilise la balise transition a laquelle on donne un nom qui le servira de class personnalisé
    
-->
````

````css
/*style.css*/

.test-enter {
    transform: rotateY(90deg);
}

.test-enter-to {
    transition: all .7s ease;
}

.test-leave-active {
    transition: all .5s ease;
    font-size: 5em;
    color: red;
}

.test-leave-to {
    transition: all .5s ease;
    transform: rotateY(90deg);
}

/*
    .test-enter : est en réalisté la class .v-entry mais on mets change son nom définit dans la balise <transition name="test"> afin d'appliquer l'effet sur plusieur élémént
*/
````

***Il est possible d'utilisé `<transition-group></transition-group>` si la balise contients plusieurs éléménts qui doivent bénéficier du même effet de transition.***

&nbsp;

---
---

&nbsp;

## **La mise en production**

---

&nbsp;

Avec `Vue.js`, rien de plsu simple, il suffit de modifier le lien du **CDN** :

&nbsp;

**Mode DEV :**

````html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.js"></script>
````

**Mode PROD :**

````html
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6/dist/vue.min.js"></script>
````

&nbsp;

**ATTENTION** : passant en mode production nous perdons les message d'alerte de la console et l'accèes a **Vue Devtools**
