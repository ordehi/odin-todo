import { createElement } from '../helpers/dom';
import { CreateTodoNode } from '../components/CreateTodoNode';
import { TodoNode } from '../components/TodoNode';

const TodoList = (props) => {
  const { todos, updater } = props;
  const { clickHandler } = updater;
  let element = createElement('div', [{ class: 'todo-list' }]);
  const createTodoNode = CreateTodoNode({ clickHandler });

  element.appendChild(createTodoNode);
  const render = (todos) => {
    todos.map((todo) => {
      let todoNode = TodoNode({ todo, clickHandler });
      element.insertBefore(todoNode, createTodoNode);
    });
  };

  render(todos);

  element.rerender = render;

  return element;
};

export default TodoList;
