import { Todo } from '../models/Todo';
// const local = window.localStorage;

const storageController = () => {
  const _TODO_STORE = {};

  const readAll = () => _TODO_STORE;

  const writeTodo = (id, name) => {
    let todo = Todo(id, name);
    _TODO_STORE[id] = todo;
    return todo.getProps();
  };

  const readTodo = (id) => _TODO_STORE[id].getProps();

  const updateTodo = (id, type) => {
    _TODO_STORE[id][type](arguments);
  };

  const deleteTodo = (id) => {
    if (id in _TODO_STORE) delete _TODO_STORE[id];
  };

  return {
    readAll,
    writeTodo,
    readTodo,
    updateTodo,
    deleteTodo,
  };
};

export default storageController;
