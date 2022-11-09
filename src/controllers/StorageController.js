import { Todo } from '../models/Todo';
import { debounce } from '../helpers/debounce';

const storageController = () => {
  let localStorage = window.localStorage;

  const _TODO_STORE = {};
  let _nextIdNum = 0;

  const storeData = (processedData) => {
    localStorage.setItem('happy-todos', processedData);
    console.log('stored', processedData);
  };

  const processData = (data) => {
    let processedData = JSON.stringify(data);
    storeData(processedData);
  };

  // TODO: change the hardcoded timer to wait for idle input
  const waitToProcessData = debounce((data) => processData(data), 500);

  const readAll = () => _TODO_STORE;

  const writeTodo = (name) => {
    let id = `a${_nextIdNum}`;
    let todo = Todo(id, name);
    /* 
    My problem here is that I'm storing Todo objects which dont expose their properties, so when I JSON.stringify them, they look like empty objects.

    For now, I'll hack this and traverse the collection when I need to store them in local
      */
    _TODO_STORE[id] = todo;
    _nextIdNum += 1;
    waitToProcessData(_TODO_STORE);

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
