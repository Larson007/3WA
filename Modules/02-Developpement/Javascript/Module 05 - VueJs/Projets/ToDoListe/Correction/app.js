"use strict"

Vue.createApp({
  data: function () {
    return {
      title: "Liste des choses à faire",
      tasks: [],
      currentTaskContent: ""
    }
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        id: Date.now(),
        content: this.currentTaskContent,
        stroke: false
      })
      this.currentTaskContent = ""
    },
    removeTask: function (event) {
      this.tasks = this.tasks.filter(function (task) {
        return Number(task.id) !== Number(event.target.dataset.id)
      })
    },
    toggleTask: function (event) {
      const task = this.tasks.find(function (task) {
        return Number(task.id) === Number(event.target.dataset.id)
      })
      task.stroke = !task.stroke
    }
  }
}).mount("#app")
