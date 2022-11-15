import TodoList from "../views/TodoList";
import rootNode from "../constants/domNodes";

const renderController = (updater) => {
  let todoList;

  const render = () => {
    rootNode.appendChild(todoList);
  };

  const reRender = (todos) => {
    todoList.rerender(todos);
  };

  const removeTodo = (todos) => {
    todoList.removeTodo(todos);
  };

  const renderUpdate = (todos, type) => {
    if (type === "create") return reRender(todos);
    if (type === "delete") return removeTodo(todos);
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
