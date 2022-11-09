import { Todo } from '../models/Todo';
import { debounce } from '../helpers/debounce';
const STORAGE_NAME = 'happy-todos';

const storageController = () => {
  let localStorage = window.localStorage;

  let _TODO_STORE = {};
  let _nextIdNum = 0;

  const storeData = (processedData) => {
    localStorage.setItem(STORAGE_NAME, processedData);
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

  function initStorage() {
    let store = localStorage.getItem(STORAGE_NAME);
    if (store !== null) {
      _TODO_STORE = JSON.parse(store);
    } else {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(_TODO_STORE));
    }
    return _TODO_STORE;
  }

  return {
    initStorage,
    readAll,
    writeTodo,
    readTodo,
    updateTodo,
    deleteTodo,
  };
};

export default storageController;
