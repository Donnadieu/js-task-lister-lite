class Task {
  constructor(id, description) {
    this.id = id
    this.description = description
  }
  renderTask(){
    return`
      <li id="edit-${this.id}">
        ${this.description}
        <button class="delete-task" id="${this.id}">X</button>
      </li>
    `
  }
}
