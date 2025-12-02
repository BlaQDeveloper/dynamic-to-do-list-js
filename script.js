// Setting up for the page load
document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    loadTasks();
    // Creating a function "addTask" that add new task to the to-do list application
    function addTask() {
        const taskText = taskInput.value.trim();

        // checking if the taskText is not empty
        if (taskText !== "") {
            // creating a new list element
            const li = document.createElement("li");
            li.textContent = taskText;
            // creating a remove button
            const removeButton = document.createElement("button");
            removeButton.classList.add("remove-btn");
            removeButton.textContent = "Remove";

            // Assigning an onclick event to remove li element
            removeButton.onclick = function (){
                li.remove();
                removeTaskFromStorage(taskText);
            };

            // Append the remove button to li and append it to taskList
            li.appendChild(removeButton);
            taskList.appendChild(li);
            
            saveTaskToStorage(taskText); 
            // clear the task input field
            taskInput.value = "";
        }
        else {
            alert("Enter a task");
        }
    }
        // an event listener to addButton that calls addTask when the button is clicked
        addButton.addEventListener("click", addTask);

        // an event listener to taskInput for the 'keypress' event to allow tasks to be added by pressing the “Enter” key. 
        // Inside this event listener, check if event.key is equal to 'Enter' before calling addTask.
        taskInput.addEventListener("keypress", function(event){
            if (event.key === "Enter") {
                addTask();
            }

        });

        function saveTaskToStorage(taskText) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        

        function removeTaskFromStorage(taskText) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter(task => {task !== taskText});
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function loadTasks() {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach(taskText => {
                const li = document.createElement("li");
                li.textContent = taskText;

                const removeButton = document.createElement("button");
                removeButton.classList.add("remove-btn");
                removeButton.textContent = "Remove";

                removeButton.onclick = function (){
                    li.remove();
                    removeTaskFromStorage(taskText);
                };

                li.appendChild(removeButton);
                taskList.appendChild(li);
            });
        }
});