import { createElement } from '../helpers/dom';

const TodoList = (props) => {
  let container = createElement(
    'div',
    { class: 'todo-list' },
    props ? props.todos : []
  );

  return container;
};

export default TodoList;
