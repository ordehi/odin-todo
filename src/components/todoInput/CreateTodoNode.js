import Container from "../generic/Container";
import AddTodoBtn from "./AddTodoBtn";
import TodoChange from "./TodoChange";
import "../../styles/createTodo.css";

const CreateTodoNode = ({ updateHandler }) => {
  const attrs = { class: "create-todo" };
  const todoChange = TodoChange({});
  const addTodoBtn = AddTodoBtn({ updateHandler });
  const children = [todoChange, addTodoBtn];
  const element = Container({ attrs, children });
  return element;
};

export default CreateTodoNode;
