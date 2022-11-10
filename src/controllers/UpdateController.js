import storageController from './storageController';
import renderController from './renderController';

const storageLogic = ['create', 'rename', 'toggle', 'delete'];

const updateController = () => {
  let renderer, storage;

  const _runStorageLogic = (change) => {
    try {
      let todo = storage.writeTodo(change);
      return todo;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const _runInitRenderLogic = (todos) => {
    return renderer.initTodoUI(todos);
  };

  const _runRenderLogic = (todos) => {
    return renderer.reRender(todos);
  };

  const _runTodoLogic = (change) => {
    let todo = _runStorageLogic(change);
    if (todo) {
      _runRenderLogic([todo]);
      return todo;
    } else {
      return false;
    }
  };

  function clickHandler(e) {
    let type = e.target.dataset.type;
    let parent = e.target.parentElement;
    let parentId = parent?.id;
    let input = parent.querySelector('.todo-name-input');
    let change = {};

    if (input.value || type === 'delete') {
      change = {
        type,
        id: parentId,
        name: input.value,
      };

      _runTodoLogic(change);
    }
  }

  function initTodos() {
    storage = storageController(this);
    renderer = renderController(this);

    let store = storage.initStorage();
    let storeToMap = Object.entries(store);
    if (storeToMap.length) {
      let todos = storeToMap.map((todo) => todo[1]);
      _runInitRenderLogic(todos);
    }
  }

  return {
    clickHandler,
    initTodos,
  };
};

export default updateController;
