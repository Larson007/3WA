const app = Vue.createApp({
    data() {
        return {
            names: ["Mohamed", "Yannis", "Thomas", "Adba", "Abdel"],
            columns: ["name", "power"],
            rows: [
                { name: "Chuck Norris", power: Infinity },
                { name: "Bruce Lee", power: 9000 },
                { name: "Jackie Chan", power: 7000 },
                { name: "Jet Li", power: 8000 }
            ]
        }
    },
})

app.mount('#app');