// Création de l'appication VusJs 3 sous forme de CLass
const app = Vue.createApp({
    // data() : ou l'on stock les données qui peuvent intéragire avec le DOM 
    data() {
        return {
            title: 'TodoListe',
            taskText: '',
            allTasks: [],
        };
    },
    // methods : Les fonctions de la Class VueJs 3
    methods: {
        // Fonction pour ajouter une tâche
        addTask(e) {

            // (e) : correspond a l'evenement, ici le click
            // block le comportement par défault oors du click, ici le formualire lors du click sur le bouton ne soumettra pas le formulaire
            e.preventDefault(); 

            // this. : on utlise le this pour faire référence au data() de la class VusJs
            // ici, lors de l'execution de la fonction (lors du click), nous allons push dans le tableau vide allTasks des clés (Key) et leur valeurs suivantes  sous forme d'objets :
            // 1. id : Date.now() -> On génère un Id unique en uilisant le timeStamp
            // 2. name: this.taskText -> la value de l'input
            // 3. check: false -> un booleen pour garder en mémoire le changement de State d'un element du Dom (ici la checkbox)
            this.allTasks.push({ id: Date.now(), name: this.taskText, check: false });

            // on vide la value de l'input a chaque execution de la fonction 
            this.taskText = "";
        },
        // fonction qui va gérer le changement de false a true lors du click ds la checkbox
        checkTask(e) {
            // (e) : correspond a l'evenement, ici le check de la checkbox

            // déclaration d'une variable "task" qui correspond a une tâche sous forme d'objet du tableau allTasks
            const task = this.allTasks.find((task) => {
                // Dans le return, on va recuperer l'objet dans l'id est identique au data-key de l'input checkbox coché
                return Number(task.id) === Number(e.target.dataset.key)
            })
            // Lors du click dans la checkbox on le fait passer de false a true et inversement lors du décochage
            task.check = !task.check;
        },
        // fonction qui va supprimer du tableau allTasks les objets ciblé
        removeTask(e) {
            // (e) : correspond a l'evenement, ici le click sur le boutton de supression

            // On ecrase le tableau allTasks via un filter()
            this.allTasks = this.allTasks.filter(
                // fonction fléché qui retourne un nouveau tableau en excluent l'ibjet dont l'id est identique au data-key de l'input ciblé
                x => Number(x.id) !== Number(e.target.dataset.key)
            );
        }
    },
    // Fonction native de VueJs qui s'éxécutera à chaque chargement de l'application
    mounted() {
        // On lui demande récuprer les données stocker dans le localStorage dans le tableau allTasks en l'ayant "parse" (Fait passer d'un format Json a un tableau d'objet)
        // Et si aucune données dnas le local storage retourner un tableau vide
        this.allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    // Fonction native de VueJs qui garde en memoire chaque chngement effectuer dans un objet sous le formation suivant : handler(Nouvelle valeur, Ancienne valeur)
    watch: {
        // On precise au watch que l'on souhaite observe les changements du tableau allTasks
        allTasks: {
            // deep: true : Permet de vérifier que les donnée d'un element "constant" comme un array évolue
            // Sans cette methode, VueJs n'arrive pas a voire si le tableau a été modifié
            deep: true,
            // Via la fonction handler, on stock dans le localStorage le tableau allTasks au format Json (= string) a chaque fois qu'il est modifier (ajout/suppression de data)
            handler(newValue, oldValue) {
                localStorage.setItem("tasks", JSON.stringify(newValue));
            }
        }
    }
});

app.mount('#app');