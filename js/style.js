  let tasks = [];

  function addTask(){
    let text = document.getElementById("taskInput").value.trim();
    if (text === "") return;

    tasks.push({ text: text, done: false });
    document.getElementById("taskInput").value = "";
    renderTasks();
  }

  function renderTasks(){
    let html = "";

    for (let i = 0; i < tasks.length; i++){
      let task = tasks[i];
      let textStyle = "";
      if (task.done){
        textStyle = "text-decoration:line-through; color:#888;";
      }

      html += "<li>";
      html += "<span style='" + textStyle + "' onclick='toggleDone(" + i + ")'>" + task.text + "</span>";
      html += "<button onclick='deleteTask(" + i + ")'>حذف</button>";
      html += "</li>";
    }

    document.getElementById("taskList").innerHTML = html;
  }

  function toggleDone(index){
    tasks[index].done = !tasks[index].done;
    renderTasks();
  }

  function deleteTask(index){
    tasks.splice(index, 1);
    renderTasks();
  }




