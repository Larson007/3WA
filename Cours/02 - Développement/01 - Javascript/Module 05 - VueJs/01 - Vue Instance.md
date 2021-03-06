# Module 05 - VueJs

## 01 - Vue Instance

### La Pour démarrer:

Installer l'extension officielle Vue.js pour votre navigateur :

[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

Ouvrir la console et aller dans l'onglet Vue puis cliquer sur root

Aller dans la console JS et taper

````console
vm
// ou
vm0
````

vm signifie 'view model'

### Bienvenue dans Vue (view)

[Documentation Offciel](https://vuejs.org/)

Vue.js est un framework JavaScript qui permet de développer des interfaces utilisateur de manière simple et efficace.

Vue peut être utilisé pour se faciliter la tâche quand on développe des applications simple, mais aussi des 'Single Page Applications'

On peut utiliser Vue seul ou avec d'autres librairies.

La façon la plus simple pour débuter avec Vue est d'intégrer un script depuis un CDN

````html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>>
````

Toutes les applications Vue commence en créant une nouvelle instance de Vue grâce à la fonction Vue:

````js
new Vue({
    //options
});
````

La fonction Vue accepte un objet en argument, cet objet contiendra nos données, fonctions et bien d'autres, qui serviront à gérer le comportement des pages.

Le guide officiel répertorie toutes les options disponibles.

Une application Vue est contenu dans une instance 'racine' (le root élément qu'on voit dans l'onglet Vue dans la console.) créée avec la fonction Vue, organisée de manière optionnelle en différents composants. Chaque composant apparaitra comme un enfant de cette instance.

L'élément root est un élément HTML auquel on attache une instance de Vue.

Voici le code qui rend cette page dynamique.

````js
<script type="module">
    import HeaderTemplate from './header.js';
    import FooterTemplate from './footer.js';
    new Vue({ 
        el: '#app', // on attache l'instance de Vue a cet élément. 
        components: { HeaderTemplate, FooterTemplate }, // Le footer et le header sous form de composants 
        data() { 
            return { 
                showVueIntro: false, // On commence avec le texte explicatif caché
            }; 
        }, 
        computed: { 
            classes() { 
                return this.showVueIntro ? 'active' : 'inactive'; // On applique une classe CSS dynamiquement.
            }, 
        }, 
    });
</script>
````

Ce code est certainement obscur pour l'instant mais vous allez voir au fur et à mesure de la semaine qu'il est en réalité très simple de travailler avec cette librairie.
