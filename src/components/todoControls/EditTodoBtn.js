import Button from "../generic/Button";

const EditTodoBtn = ({ toggleEditMode }) => {
  const state = { editing: false };
  function clickHandler() {
    state.editing = !state.editing;
    this.textContent = state.editing ? "Save" : "Edit";
    toggleEditMode(!state.editing);
  }

  const attrs = { type: "button", class: "edit-todo", "data-type": "edit" };
  const children = ["Edit"];
  const element = Button({ attrs, children });
  element.onclick = clickHandler;
  return element;
};

export default EditTodoBtn;
