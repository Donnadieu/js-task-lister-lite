document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form')
  const list = document.getElementById('tasks')
  const taskList = new TaskList

  const handleDelete = (e) => {
    e.preventDefault()

    taskList.removeTask(e.target.id)

    renderState(taskList)
  }

  list.addEventListener("click", handleDelete)

  const handleSubmit = (e) => {
    e.preventDefault()

    let input = e.target.querySelector("#new-task-description")
    let description = input.value

    taskList.addTask(description)
    input.value = ""

    renderState(taskList)
  }

  taskForm.addEventListener("submit", handleSubmit)

  const renderState = (taskList) => {
    list.innerHTML = taskList.renderList()
  }

  renderState(taskList)
});
