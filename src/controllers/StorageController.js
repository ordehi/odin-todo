import { Todo } from '../models/Todo';
import { debounce } from '../helpers/debounce';
const STORAGE_NAME = 'happy-todos';
const EMPTY_OBJ = {};
const EMPTY_OBJ_STRING = '{}';

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

  const _writeTodoOps = {
    create: (id, change) => {
      let todo = Todo(id, change.title, change.description);
      _TODO_STORE[id] = todo;
      return todo;
    },
    edit: (id, change) => {
      _TODO_STORE[id].edit(change.title, change.description);
      return _TODO_STORE[id];
    },
    toggle: (id, change) => {
      _TODO_STORE[id].toggle(change.checked);
      return _TODO_STORE[id];
    },
    delete: (id) => {
      let todo = _TODO_STORE[id];
      delete _TODO_STORE[id];
      return todo;
    },
  };

  const storeData = (stringData) => {
    localStorage.setItem(STORAGE_NAME, stringData);
  };

  const todoToJson = (storeToParse) => {
    return Object.values(storeToParse).reduce((parsed, todo) => {
      let id = todo.read('id');
      parsed[id] = todo.getProps();
      return parsed;
    }, {});
  };

  const processData = (data) => {
    let processedData = todoToJson(data);
    let stringData = JSON.stringify(processedData);
    storeData(stringData);
  };

  // TODO: change the hardcoded timer to wait for idle input
  const waitToProcessData = debounce((data) => processData(data), 500);

  const readAll = () => _TODO_STORE;

  const writeTodo = (change) => {
    let type = change.type;
    let id = change.id || `a${_nextIdNum++}`;
    let todo = _writeTodoOps[type](id, change);
    waitToProcessData(_TODO_STORE);

    return todo;
  };

  const readTodo = (id) => _TODO_STORE[id];

  const deleteTodo = (id) => {
    if (id in _TODO_STORE) delete _TODO_STORE[id];
  };

  const jsonToTodo = (parsedStore) => {
    return Object.values(parsedStore).reduce((store, todo) => {
      let { id, title, description, checked } = todo;
      store[id] = Todo(id, title, description, checked);
      return store;
    }, {});
  };

  function initStorage() {
    let store = localStorage.getItem(STORAGE_NAME);
    if (store !== null && store !== EMPTY_OBJ_STRING) {
      let parsedStore = JSON.parse(store);
      let toStore = jsonToTodo(parsedStore);
      _TODO_STORE = toStore;

      _nextIdNum = getNextIdNum(_TODO_STORE, _nextIdNum);
    } else {
      localStorage.setItem(STORAGE_NAME, EMPTY_OBJ_STRING);
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
