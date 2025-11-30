// Setting up for the page load
document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Creating a function "addTask" that add new task to the to-do list application
    function addTask() {
        let taskText = document.getElementById("task-input").value.trim()

        // checking if the taskText is not empty
        if (!taskText === "") {
            // creating a new li element
            document.createElement("li").textContent = taskText;
            // creating a remove button
            const removeButton = document.createElement("button");
            removeButton.className = "remove-btn";
            removeButton.textContent = "Remove";

            // Assigning an onclick event to remove li element
            removeButton.onclick = function (){
                li.remove();
            };

            // Append the remove button to li
            li.appendChild(removeButton);
            
            //  Append the li to taskList
            taskList.appendChild(li);

            // clear the task input field
            taskInput.value = "";
        }
        else {
            alert("Enter a task");
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
    }
    //  This ensures your data fetching logic runs once the HTML document has fully loaded.
    document.addEventListener("DOMContentLoaded", addTask);
});