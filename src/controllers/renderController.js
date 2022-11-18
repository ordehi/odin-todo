import TodoList from "../views/TodoList";
import rootNode from "../constants/domNodes";

const renderController = (updater) => {
  let todoList;

  const render = () => {
    rootNode.appendChild(todoList);
  };

  const renderUpdate = (data, type) => {
    if (type === "create") return todoList.render(data);
    if (type === "delete") return todoList.removeTodo(data);
    if (type === "comment") return todoList.renderComment(...data);
    return false;
  };

  const initTodoUI = (todos) => {
    todoList = TodoList({ todos, updater });
    render();
  };

  return {
    initTodoUI,
    renderUpdate,
  };
};

export default renderController;
