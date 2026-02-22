const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a Task");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <div class= "task-button">
        <button class = "complete-btn" onclick = "toggleComplete(this)">✔</button>
        <button class = "delete-btn" onclick = "deletetask(this)">✖</button>   
        </div>
    `;
    taskList.appendChild(li);
    taskInput.value="";
}

function toggleComplete(button){
    const li = button.closest("li");
    li.classList.toggle("completed");

}

function deletetask(button){
    const li = button.closest("li"); 
    taskList.removeChild(li);

}
function clearAll(){
    taskList.innerHTML ="";

}
