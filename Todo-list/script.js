const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const btn = document.querySelector(".btn");

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
rendertasks();

function addTask() {
  const taskvalues = taskInput.value.trim();
  if (!taskvalues) return "No data";
  tasks.push(taskvalues);
  updateLocalStorage();
  rendertasks();
  taskInput.value = "";
}

function rendertasks() {
  taskList.innerHTML = "";
  tasks.map((tasks, index) => {
    const li = document.createElement("li");
    li.innerText = tasks;

    const delbutton = document.createElement("button");
    delbutton.innerText = "❌";
    delbutton.onclick = () => deletTasks(index);

    li.appendChild(delbutton);
    taskList.appendChild(li);
  });
}

function deletTasks(index) {
  tasks.splice(index, 1);
  updateLocalStorage();
  rendertasks();
}

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
