class Todo {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.priority = data.priority;
    this.checked = data.checked;
    this.dueDate = data.dueDate;
    this.checklist = data.checklist;
    this.comments = data.comments;
  }

  edit(change) {
    Object.assign(this, change);
  }

  toggle(checked) {
    this.checked = checked;
  }

  getProps() {
    return this;
  }

  read(prop) {
    return this[prop];
  }
}

export default Todo;
