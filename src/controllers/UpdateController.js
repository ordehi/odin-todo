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

  const _runRenderLogic = (todo) => {
    return renderer.runRenderLogic({ todo });
  };

  const runTodoLogic = (name) => {
    let todo = _runStorageLogic(name);
    if (todo) {
      _runRenderLogic(todo);
      return todo;
    } else {
      return false;
    }
  };

  function initTodos() {
    renderer.initUI(this);
    let todos = Object.keys(storage.readAll()).map((todo) => todo.getProps());
    if (todos.length) {
      _runRenderLogic(todos);
    }
  }

  return {
    initTodos,
    runTodoLogic,
  };
};

export default updateController;
