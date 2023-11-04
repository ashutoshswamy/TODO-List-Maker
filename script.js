function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = "❌";

    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit";

    li.appendChild(document.createTextNode(taskText));
    li.appendChild(span);
    li.appendChild(editButton);
    taskList.appendChild(li);

    span.addEventListener("click", function () {
      taskList.removeChild(li);
    });

    editButton.addEventListener("click", function () {
      const editedText = prompt("Edit the task:", taskText);
      if (editedText !== null) {
        li.firstChild.textContent = editedText;
      }
    });

    taskInput.value = "";
  }
}
