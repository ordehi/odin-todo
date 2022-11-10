import TodoList from '../views/TodoList';
import { rootNode } from '../constants/domNodes';

const renderController = (updater) => {
  let todoList;

  const _render = () => {
    rootNode.appendChild(todoList);
  };

  const reRender = (todos) => {
    todoList.rerender(todos);
  };

  const initTodoUI = (todos) => {
    todoList = TodoList({ todos, updater });
    _render();
  };

  return {
    initTodoUI,
    reRender,
  };
};

export default renderController;
