import { Todo } from '../models/Todo';
import { debounce } from '../helpers/debounce';
import { STORAGE_NAME } from '../constants/vars';
import { EMPTY_OBJ_STRING } from '../constants/vars';

const storageController = () => {
  const localStorage = window.localStorage;
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
      const data = { id, ...change };
      let todo = Todo(data);
      _TODO_STORE[id] = todo;
      return todo;
    },
    edit: (id, change) => {
      _TODO_STORE[id].edit(change);
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
      let toWrite = todo.getProps();
      parsed[toWrite.id] = toWrite;
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

  const writeTodo = ({ type, data }) => {
    let id = data?.id || `a${_nextIdNum++}`;
    let todo = _writeTodoOps[type](id, data);
    waitToProcessData(_TODO_STORE);
    return todo;
  };

  const readTodo = (id) => _TODO_STORE[id];

  const deleteTodo = (id) => {
    if (id in _TODO_STORE) delete _TODO_STORE[id];
  };

  const jsonToTodo = (parsedStore) => {
    return Object.values(parsedStore).reduce((store, todo) => {
      const { ...data } = todo;
      store[data.id] = Todo(data);
      return store;
    }, {});
  };

  function initStorage() {
    const store = localStorage.getItem(STORAGE_NAME);
    if (store !== null && store !== EMPTY_OBJ_STRING) {
      const parsedStore = JSON.parse(store);
      const toStore = jsonToTodo(parsedStore);
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
