import { Container } from '../components/generic/Container';
import { CreateTodoNode } from '../components/todoInput/CreateTodoNode';
import { TodoNode } from '../components/todoNode/TodoNode';
import '../styles/todoList.css';

const TodoList = (props) => {
  const { todos, updater } = props;
  const { updateHandler } = updater;
  const attrs = {
    class: 'todo-list',
  };
  const element = Container({ attrs });
  const createTodoNode = CreateTodoNode({ updateHandler });

  element.appendChild(createTodoNode);

  const render = (todos) => {
    todos.map((todo) => {
      let todoNode = TodoNode({ todo, updateHandler });
      element.insertBefore(todoNode, createTodoNode);
    });
  };

  render(todos);

  element.rerender = render;
  element.removeTodo = (todos) =>
    todos.map((todo) =>
      element.removeChild(document.getElementById(todo.read('id')))
    );

  // element.editMutation = (todo) =>
  //   document.getElementById(todo[0].id).clickHandler();

  return element;
};

export default TodoList;
