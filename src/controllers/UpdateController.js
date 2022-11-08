import storageController from './storageController';
import renderController from './renderController';

const storage = storageController();
const renderer = renderController();

const updateController = () => {
  const _runStorageLogic = (id, name) => {
    try {
      let todo = storage.writeTodo(id, name);
      return todo;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const _runRenderLogic = (todo, todoList) => {
    return renderer.runRenderLogic({ todo, todoList });
  };

  const runTodoLogic = (id, name, todoList) => {
    let todo = _runStorageLogic(id, name);
    if (todo) {
      _runRenderLogic(todo, todoList);
      return todo;
    } else {
      return false;
    }
  };

  return {
    runTodoLogic,
  };
};

export default updateController;
