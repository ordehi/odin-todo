import { Todo } from '../models/Todo';
import { debounce } from '../helpers/debounce';
const STORAGE_NAME = 'happy-todos';

const storageController = () => {
  let localStorage = window.localStorage;

  let _TODO_STORE = {};
  let _nextIdNum = 0;

  const getNextIdNum = (storage, currentId) => {
    while (storage[`a${currentId}`]) {
      currentId += 1;
    }
    return currentId;
  };

  const writeTodoOps = {
    create: (id, change) => {
      let todo = Todo(id, change.name);
      _TODO_STORE[id] = todo;
      return todo;
    },
    rename: (id, change) => {
      _TODO_STORE[id].name = change.name;
      return _TODO_STORE[id];
    },
    toggle: (id) => {
      _TODO_STORE[id].doneStatus = !_TODO_STORE[id].doneStatus;
      return _TODO_STORE[id];
    },
    delete: (id) => {
      let todo = _TODO_STORE[id];
      delete _TODO_STORE[id];
      return todo;
    },
  };

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

  const writeTodo = (change) => {
    let type = change.type;
    let id = change.id || `a${_nextIdNum++}`;
    let todo = writeTodoOps[type](id, change);
    /* 
    My problem here is that I'm storing Todo objects which dont expose their properties, so when I JSON.stringify them, they look like empty objects.

    For now, I'll hack this and traverse the collection when I need to store them in local
      */
    waitToProcessData(_TODO_STORE);

    return todo;
  };

  const readTodo = (id) => _TODO_STORE[id];

  const deleteTodo = (id) => {
    if (id in _TODO_STORE) delete _TODO_STORE[id];
  };

  function initStorage() {
    let store = localStorage.getItem(STORAGE_NAME);
    if (store !== null) {
      _TODO_STORE = JSON.parse(store);
      _nextIdNum = getNextIdNum(_TODO_STORE, _nextIdNum);
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
    deleteTodo,
  };
};

export default storageController;
