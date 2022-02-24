const app = Vue.createApp({
    data() {
        return {
            title: 'TodoListe',
            taskText: '',
            isChecked: false,
            allTasks: [],

        };
    },
    methods: {
        addTask(e) {
            e.preventDefault();
            this.allTasks.push({ id: Date.now(), name: this.taskText });
            this.taskText = "";
        },
        checkTask(e) {

            this.isChecked = !this.isChecked;
        },
        removeTask(e) {
            this.allTasks = this.allTasks.filter(
                x => Number(x.id) !== Number(e.target.dataset.key)
            );
        }
    },
});

app.mount('#app');