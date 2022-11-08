import { Todo } from '../models/Todo';

const storageController = () => {
  let localStorage = window.localStorage;

  const _TODO_STORE = {};
  let _nextIdNum = 0;

  const readAll = () => _TODO_STORE;

  const writeTodo = (name) => {
    let id = `a${_nextIdNum}`;
    let todo = Todo(id, name);
    _TODO_STORE[id] = todo;
    // TODO: need to define a solution for localStorage, stringifying an object is only one level deep and my storage is two
    localStorage.setItem('happy-todos', JSON.stringify(_TODO_STORE));
    _nextIdNum += 1;
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
