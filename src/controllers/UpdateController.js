import storageController from './storageController';
import renderController from './renderController';

const storage = storageController();
const renderer = renderController();

const updateController = () => {
  const _runStorageLogic = (name) => {
    try {
      let todo = storage.writeTodo(name);
      return todo;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const _runRenderLogic = (todos) => {
    return renderer.runRenderLogic(todos);
  };

  const runTodoLogic = (name) => {
    let todo = _runStorageLogic(name);
    if (todo) {
      _runRenderLogic([todo]);
      return todo;
    } else {
      return false;
    }
  };

  function initTodos() {
    renderer.initUI(this);
    let store = storage.initStorage();
    let storeToMap = Object.entries(store);
    if (storeToMap.length) {
      let todos = storeToMap.map((todo) => todo[1]);
      console.log(todos);
      _runRenderLogic(todos);
    }
  }

  return {
    initTodos,
    runTodoLogic,
  };
};

export default updateController;
