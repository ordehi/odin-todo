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

  const _editMutation = (todo) => {
    todoList.editMutation(todo);
  };

  const renderUpdate = (todos, change) => {
    if (change.type === 'create') return _reRender(todos);
    if (change.type === 'delete') return _removeTodo(todos);
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
