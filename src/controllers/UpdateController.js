import { Todo } from '../models/Todo';
import { TodoStorage } from './storageController';

export const UpdateController = () => {
  const _createTodo = (id, name) => {
    let todo = Todo(id, name);
    try {
      TodoStorage.writeTodo(id, todo);
      return todo;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const _createTodoNode = (todo) => {
    return 'mockTodo';
  };

  const runTodoLogic = (id, name) => {
    let todo = _createTodo(id, name);
    if (todo) {
      return _createTodoNode(todo);
    } else {
      return false;
    }
  };

  return {
    runTodoLogic,
  };
};
