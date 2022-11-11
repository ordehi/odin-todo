import { createElement } from '../helpers/dom';
import { CreateTodoNode } from '../components/CreateTodoNode';
import { TodoNode } from '../components/TodoNode';

const TodoList = (props) => {
  const { todos, updater } = props;
  const { updateHandler } = updater;
  let element = createElement('div', [{ class: 'todo-list' }]);
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
