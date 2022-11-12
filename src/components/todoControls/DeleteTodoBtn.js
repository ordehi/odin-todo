import { Button } from '../generic/Button';

export const DeleteTodoBtn = (props) => {
  const { deleteTodo } = props;
  let attrs = { type: 'button', class: 'delete-todo', 'data-type': 'delete' };
  let children = ['Delete'];

  let element = Button({ attrs, children });
  element.onclick = deleteTodo;

  return element;
};
