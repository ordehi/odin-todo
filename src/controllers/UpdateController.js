import { Todo } from '../models/Todo';
import { TodoNode } from '../components/TodoNode';
import { todoStorage } from './storageController';

const updateController = () => {
  const _createTodo = (id, name) => {
    let todo = Todo(id, name);
    try {
      todoStorage.writeTodo(id, todo);
      return todo;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const _createTodoNode = (todo) => {
    return TodoNode(todo.getProps());
  };

  const runTodoLogic = (id, name) => {
    let todo = _createTodo(id, name);
    if (todo) {
      return todo.getProps();
    } else {
      return false;
    }
  };

  return {
    runTodoLogic,
  };
};

export default updateController;
