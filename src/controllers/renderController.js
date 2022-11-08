import { TodoNode } from '../components/TodoNode';
import { rootNode } from '../constants/domNodes';
import TodoList from '../views/TodoList';
import { CreateTodoNode } from '../components/CreateTodoNode';

const renderController = () => {
  const todoList = TodoList();
  const clickHandler = (e) => console.log(e);

  const _createTodoNode = (todo) => {
    return TodoNode(todo);
  };

  const runRenderLogic = (props) => {
    let todoNode = _createTodoNode(props.todo);
    todoList.appendChild(todoNode);
    rootNode.prepend(todoList);
  };

  const initUI = () => {
    rootNode.appendChild(CreateTodoNode({ clickHandler }));
  };

  return {
    initUI,
    runRenderLogic,
  };
};

export default renderController;
