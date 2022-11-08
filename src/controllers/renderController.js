import { TodoNode } from '../components/TodoNode';
import { rootNode } from '../constants/domNodes';

const renderController = () => {
  const _createTodoNode = (todo) => {
    return TodoNode(todo);
  };

  const runRenderLogic = (props) => {
    let todoNode = _createTodoNode(props.todo);
    props.todoList.appendChild(todoNode);
    rootNode.appendChild(props.todoList);
  };

  return {
    runRenderLogic,
  };
};

export default renderController;
