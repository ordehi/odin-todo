import Todo from "../models/Todo";
import debounce from "../helpers/debounce";
import { STORAGE_NAME, EMPTY_OBJ_STRING } from "../constants/vars";

const storageController = () => {
  const { localStorage } = window;
  let TODO_STORE = {};
  let nextIdNum = 0;

  const getNextIdNum = (storage, currentId) => {
    let newId = currentId;
    while (storage[`a${newId}`]) {
      newId += 1;
    }
    return newId;
  };

  const writeTodoOps = {
    create: (id, change) => {
      const todoId = `a${id}`;
      const data = { id: todoId, ...change };
      const todo = new Todo(data);
      TODO_STORE[todoId] = todo;
      nextIdNum = getNextIdNum(TODO_STORE, nextIdNum);
      return todo;
    },
    edit: (id, change) => {
      TODO_STORE[id].edit(change);
      return TODO_STORE[id];
    },
    comment: (id, change) => {
      TODO_STORE[id].comment(change.comments);
      return TODO_STORE[id];
    },
    toggle: (id, change) => {
      TODO_STORE[id].toggle(change.checked);
      return TODO_STORE[id];
    },
    delete: (id) => {
      const todo = TODO_STORE[id];
      delete TODO_STORE[id];
      return todo;
    },
  };

  const storeData = (stringData) => {
    localStorage.setItem(STORAGE_NAME, stringData);
  };

  const todoToJson = (storeToParse) =>
    Object.values(storeToParse).reduce((parsed, todo) => {
      const toWrite = todo.getProps();
      const parsedStore = { ...parsed };
      parsedStore[toWrite.id] = toWrite;
      return parsedStore;
    }, {});
  const processData = (data) => {
    const processedData = todoToJson(data);
    const stringData = JSON.stringify(processedData);
    storeData(stringData);
  };

  // TODO: change the hardcoded timer to wait for idle input
  const waitToProcessData = debounce((data) => processData(data), 500);

  const readAll = () => TODO_STORE;

  const writeTodo = ({ type, data }) => {
    const id = data?.id || nextIdNum;
    const todo = writeTodoOps[type](id, data);
    waitToProcessData(TODO_STORE);
    return todo;
  };

  const readTodo = (id) => TODO_STORE[id];

  const deleteTodo = (id) => {
    if (id in TODO_STORE) delete TODO_STORE[id];
  };

  const jsonToTodo = (parsedStore) =>
    Object.values(parsedStore).reduce((store, todo) => {
      const { ...data } = todo;
      const todoStore = { ...store };
      todoStore[data.id] = new Todo(data);
      return todoStore;
    }, {});
  function initStorage() {
    const store = localStorage.getItem(STORAGE_NAME);
    if (store !== null && store !== EMPTY_OBJ_STRING) {
      const parsedStore = JSON.parse(store);
      const toStore = jsonToTodo(parsedStore);
      TODO_STORE = toStore;
      nextIdNum = getNextIdNum(TODO_STORE, nextIdNum);
    } else {
      localStorage.setItem(STORAGE_NAME, EMPTY_OBJ_STRING);
    }

    return TODO_STORE;
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
