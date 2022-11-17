import Container from "../generic/Container";
import CheckTodoInput from "../todoControls/CheckTodoInput";
import TodoTitle from "./TodoTitle";

const TodoHeader = ({ toggleStatus, checked = false, title = "" }) => {
  const attrs = { class: "todo-header" };
  const checkTodoInput = CheckTodoInput({ toggleStatus, checked });
  const todoTitle = TodoTitle({ level: 2, title });
  const children = [checkTodoInput, todoTitle];
  const element = Container({ attrs, children });

  function updateContent(content) {
    todoTitle.setContent(content.title);
  }

  element.updateContent = updateContent;
  return element;
};

export default TodoHeader;
