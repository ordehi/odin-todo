// const local = window.localStorage;

const storageController = () => {
  const _TODO_STORE = {};

  const readAll = () => _TODO_STORE;

  const writeTodo = (id, todo) => {
    _TODO_STORE[id] = todo;
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

export const todoStorage = storageController();
