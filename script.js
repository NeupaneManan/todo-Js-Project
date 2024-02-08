document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const check = document.getElementById("chk-box");

  addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  check.addEventListener('check', function(){
    
  })

  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.textContent = taskText;

    taskItem.addEventListener("click", function () {
      taskItem.classList.toggle("completed");
    });


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click event from triggering the taskItem click event
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
  }
});
