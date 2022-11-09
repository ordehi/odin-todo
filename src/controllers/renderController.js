import TodoList from '../views/TodoList';
import { TodoNode } from '../components/TodoNode';
import { rootNode } from '../constants/domNodes';
import { CreateTodoNode } from '../components/CreateTodoNode';

const renderController = () => {
  const todoList = TodoList();

  const _createTodoNode = (todo) => {
    return TodoNode(todo);
  };

  const runRenderLogic = (todos) => {
    todos.map((todo) => {
      let todoNode = _createTodoNode(todo);
      todoList.appendChild(todoNode);
    });
    rootNode.prepend(todoList);
  };

  const initUI = (updater) => {
    rootNode.appendChild(CreateTodoNode(updater));
  };

  return {
    initUI,
    runRenderLogic,
  };
};

export default renderController;
