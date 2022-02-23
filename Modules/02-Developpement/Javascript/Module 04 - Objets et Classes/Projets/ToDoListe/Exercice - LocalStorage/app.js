const form = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");

let allTasks = [];
let storage = [];
const jsonTask = {};


form.addEventListener("submit", e => {
    e.preventDefault();
    const text = input.value.trim();

    if (text !== "") {
        addTask(text);
        input.value = "";
    }
});


function addTask(text) {

    const todo = {
        text,
        id: Date.now(),
    };
    displayList(todo);

}


function displayList(todo) {

    const task = document.createElement("li");
    task.setAttribute("data-key", todo.id);

    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("click", taskDone);
    task.appendChild(check);

    const taskText = document.createElement("span");
    taskText.innerText = todo.text;
    task.appendChild(taskText);

    const btnDelete = document.createElement("button");
    btnDelete.addEventListener("click", deleteTask);

    const iconDelete = document.createElement('i');
    iconDelete.classList.add("fa-solid");
    iconDelete.classList.add("fa-delete-left");

    btnDelete.appendChild(iconDelete);
    task.appendChild(btnDelete);

    liste.appendChild(task);

    allTasks.push(task);


    jsonTask[todo.id] = todo.text;
    storage.push(jsonTask);
    //console.log(storage);

    const jsonTasks = JSON.stringify(storage);
    console.log(jsonTasks);

    localStorage.setItem("tasks", jsonTasks);


}

function taskDone(e) {
    e.target.parentNode.classList.toggle("taskEnd");
}


function deleteTask(e) {
    allTasks.forEach(task => {
        if (e.target.parentNode.getAttribute("data-key") === task.getAttribute("data-key")) {
            task.remove();
            allTasks = allTasks.filter(li => li.dataset.key !== task.dataset.key);

            //TODO Gestion du localStorage
        }
    });
}
