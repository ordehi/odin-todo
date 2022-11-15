import Button from "../generic/Button";

const DeleteTodoBtn = ({ deleteTodo }) => {
  const attrs = { type: "button", class: "delete-todo", "data-type": "delete" };
  const children = ["Delete"];
  const element = Button({ attrs, children });
  element.onclick = deleteTodo;
  return element;
};

export default DeleteTodoBtn;
