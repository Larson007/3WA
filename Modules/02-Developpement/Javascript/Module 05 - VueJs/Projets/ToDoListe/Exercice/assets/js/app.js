const app = Vue.createApp({
    data() {
        return {
            title: 'TodoListe',
            taskText: '',
            allTasks: [],
        };
    },
    methods: {
        addTask(e) {
            e.preventDefault();
            this.allTasks.push({ id: Date.now(), name: this.taskText, check: false });
            //localStorage.setItem("tasks", JSON.stringify(this.allTasks));
            this.taskText = "";
        },
        checkTask(e) {
            const task = this.allTasks.find((task) => {
                return Number(task.id) === Number(e.target.dataset.key)
            })
            task.check = !task.check;
        },
        removeTask(e) {
            this.allTasks = this.allTasks.filter(
                x => Number(x.id) !== Number(e.target.dataset.key)
            );
            //localStorage.setItem("tasks", JSON.stringify(this.allTasks));
        }
    },
    mounted() {
        // Tâche executé à chaque foisnque l'application Vue est lancé
        this.allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    watch: {
        // Compare la nouvelle valeur a l'ancienne à chaque execution
        allTasks: {
            // Permet de vérifier que les donnée d'un element constant comme un array évolue
            deep: true,
            handler(newValue, oldValue) {
                localStorage.setItem("tasks", JSON.stringify(newValue));
            }
        }
    }
});

app.mount('#app');