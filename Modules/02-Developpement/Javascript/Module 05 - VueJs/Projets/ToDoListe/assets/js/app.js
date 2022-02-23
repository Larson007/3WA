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
        checkTask() {
            this.isChecked = !this.isChecked;
        },
        removeTask(e) {

            this.allTasks.forEach(task => {

                console.log(task);
            });
        }
    },
});


app.mount('#app');