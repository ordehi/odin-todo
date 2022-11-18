class Todo {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.priority = data.priority;
    this.checked = data.checked;
    this.dueDate = data.dueDate;
    this.checklist = data.checklist;
    this.comments = data.comments || {};
    this.nextCommentId = data.nextCommentId || 0;
  }

  getNextCommentId(comments, currentId) {
    let newId = currentId;
    while (comments[`${this.id}-c${newId}`]) {
      newId += 1;
    }
    return newId;
  }

  edit(change) {
    Object.assign(this, change);
  }

  comment(comment) {
    const commentId = `${this.id}-c${this.nextCommentId}`;
    this.comments[commentId] = comment;
    this.nextCommentId = this.getNextCommentId(
      this.comments,
      this.nextCommentId
    );
    return { id: commentId, comment: this.comments[commentId] };
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
