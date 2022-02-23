const form = document.querySelector("form");
const liste = document.querySelector("ul");
const input = document.querySelector("form input");

// tableau contenant toutes les tâches
let allTasks = [];


// Compotement lors de la soumission du formulaire
form.addEventListener("submit", e => {
    //bloque l'envoi du formulaire lors du submit
    e.preventDefault();

    // Supprime les espaces avant et après le texte entrer dans le input
    const text = input.value.trim();

    // Si l'input.value (text) n'est pas vide 
    if (text !== "") {
        // On ajoute le text
        addTask(text);
        // Et on vide la value du input
        input.value = "";

    }
});

function addTask(text) {

    // Objet qui contien le text et un id à chaque task
    const todo = {
        text,
        // Renvoi le nombre de millisecondes depuis le 01/01/1970
        id: Date.now(),
    };
    displayList(todo);


    //console.log(allTasks);
}

//? Affichage de la tâche
function displayList(todo) {


    //* Création d'une balise li :
    const task = document.createElement("li");
    // Auquel on ajoute un ID générer via Date.now
    task.setAttribute("data-key", todo.id);


    //* Création dans la li d'un input de type checkbox :
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    // Execution de la fonction taskDone lors du click sur la checkbox
    check.addEventListener("click", taskDone);
    // On ajoute le input checkbox dans le li
    task.appendChild(check);


    //* On créer un span :
    const taskText = document.createElement("span");
    // dans lequel nous plaçons le texte (input.value)
    taskText.innerText = todo.text;
    // On ajoute le span dans le li
    task.appendChild(taskText);

    //* Création du boutton de suppresion de tâche :
    const btnDelete = document.createElement("button");
    // On execute la fonction deleteTask lors du click sur le btn
    btnDelete.addEventListener("click", deleteTask);

    //* Création d'un icone FontAwesome 
    const iconDelete = document.createElement('i');
    iconDelete.classList.add("fa-solid");
    iconDelete.classList.add("fa-delete-left");

    // On ajoute l'icone dans le boutton de suppression de tâche
    btnDelete.appendChild(iconDelete);
    // On ajoute au li le btn
    task.appendChild(btnDelete);

    //* Ajout des tâches li dans la liste ul
    liste.appendChild(task);

    //* Ajout des tâches dans le tableaux alltasks
    allTasks.push(task);

}

//? Action lors du click checkbox
function taskDone(e) {
    // Appel de la classe taskEnd CSS lors du click du la checkbox
    e.target.parentNode.classList.toggle("taskEnd");
}

//? Action lors du click sur le btnDelete
function deleteTask(e) {
    // (e) correspond au boutton
    // On boucle sur chaque tâche (task) stocker dans le tableau allTasks
    allTasks.forEach(task => {
        // Si le "data-key" du li === "data-key" d'une task du tableau allTasks
        if (e.target.parentNode.getAttribute("data-key") === task.getAttribute("data-key")) {
            // Alors on supprime cette tâche du DOM
            task.remove();
            // On le supprime également du tableau allTasks (en comparant les li avec ceux retirés du DOM)
            allTasks = allTasks.filter(li => li.dataset.key !== task.dataset.key);
        }
    });
}

console.log(allTasks);