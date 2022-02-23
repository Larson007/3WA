import TaskList from 'TaskList.js'; // Importer le composant

const app = Vue.createApp({
    components: { TaskList }, // NE pas oublier d'enregistrer le composant.
    data() {},
})

app.mount('#app');