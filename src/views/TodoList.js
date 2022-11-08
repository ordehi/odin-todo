import { rootNode } from '../constants/domNodes';
import { TodoNode } from '../components/TodoNode';

const TodoList = (props) => {
  for (let count = 0; count < props.todos.length; count += 1) {
    let todo = props.todos[count];
    rootNode.appendChild(TodoNode(todo));
  }
};

export default TodoList;
