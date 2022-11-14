import TodoList from '../views/TodoList';
import { rootNode } from '../constants/domNodes';

const renderController = (updater) => {
  let todoList;

  const _render = () => {
    rootNode.appendChild(todoList);
  };

  const _reRender = (todos) => {
    todoList.rerender(todos);
  };

  const _removeTodo = (todos) => {
    todoList.removeTodo(todos);
  };

  const renderUpdate = (todos, type) => {
    if (type === 'create') return _reRender(todos);
    if (type === 'delete') return _removeTodo(todos);
  };

  const initTodoUI = (todos) => {
    todoList = TodoList({ todos, updater });
    _render();
  };

  return {
    initTodoUI,
    renderUpdate,
  };
};

export default renderController;
