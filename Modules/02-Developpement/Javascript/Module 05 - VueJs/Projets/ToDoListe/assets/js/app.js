const app = Vue.createApp({
    data() {
        return {
            title: 'TodoListe',
            taskText:'',
            dataKey:Date.now(),
            checked: false,
            allTasks: [],
            
        }
    },
    methods: {
        addTask(e) {
            e.preventDefault();
            this.allTasks.push({id:this.dataKey, name:this.taskText});
            this.taskText = "";
        },
        // TODO check class
        checkTask(e){
            console.log(this.checked);
        },
        // deleteTask(e) {

        //     allTasks.forEach(task => {

        //         if (e.target.parentNode.getAttribute("data-key") === task.getAttribute("data-key")) {
        //             task.remove();
        //             allTasks = allTasks.filter(li => li.dataset.key !== task.dataset.key);
        //         }
        //     });
        // }
    },
})


app.mount('#app');