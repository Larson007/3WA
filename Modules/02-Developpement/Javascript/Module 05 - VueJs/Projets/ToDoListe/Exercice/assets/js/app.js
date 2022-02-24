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
        }
    },
});

app.mount('#app');