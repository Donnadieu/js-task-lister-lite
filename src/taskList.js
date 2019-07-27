class TaskList {
  constructor() {
    this.tasks = []
  }
  addTask(description){
    let id = this.tasks.length + 1
    if (description == "") {
      alert("Task cannot be empty")
    }else {
      this.tasks.push(new Task(id, description))
    }
  }

  renderList(){
    return this.tasks.map((task) => task.renderTask()).join("")
  }

  removeTask(id){
    return this.tasks = this.tasks.filter( task => task.id != id )
  }
}
