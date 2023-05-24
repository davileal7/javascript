function addTask() {

    const taskTitle = document.querySelector("#task-title").value;

    if (taskTitle) {

        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        newTask.querySelector(".task-title").textContent = taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list");

        list.appendChild(newTask)

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function () {
            removeTask(this);
        });

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function () {
            completeTask(this);
            
        })

        //limpar
        document.querySelector("#task-title").value='';
    }
    
}

function removeTask(task) {
    task.parentNode.remove(true)
    
}

function completeTask(task) {
    const tasktoComplete = task.parentNode;

    tasktoComplete.classList.toggle("done");
}


const addBTN = document.querySelector("#add-btn");

addBTN.addEventListener("click", function (e) {
   
    e.preventDefault();

    addTask();

})