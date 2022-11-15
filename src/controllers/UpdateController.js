import storageController from "./storageController";
import renderController from "./renderController";

const updateController = () => {
  let renderer;
  let storage;
  const runStorageLogic = (change) => {
    try {
      const todo = storage.writeTodo(change);
      return todo;
    } catch (error) {
      return false;
    }
  };

  const runInitRenderLogic = (todos) => renderer.initTodoUI(todos);
  const runRenderLogic = (todos, type) => renderer.renderUpdate(todos, type);
  const runTodoLogic = (change) => {
    const todo = runStorageLogic(change);
    if (todo) {
      runRenderLogic([todo], change.type);
      return todo;
    }
    return false;
  };

  function updateHandler(change) {
    runTodoLogic(change);
  }

  function initTodos() {
    storage = storageController(this);
    renderer = renderController(this);

    const store = storage.initStorage();
    const storeToMap = Object.entries(store);
    let todos = [];
    if (storeToMap.length) {
      todos = storeToMap.map((todo) => todo[1]);
    }
    runInitRenderLogic(todos);
  }

  return {
    updateHandler,
    initTodos,
  };
};

export default updateController;
