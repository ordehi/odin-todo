import { Button } from '../generic/Button';

export const DeleteTodoBtn = (props) => {
  const { sendUpdate, deleteMe } = props;
  let attrs = { type: 'button', class: 'delete-todo', 'data-type': 'delete' };
  let children = ['Delete'];

  function clickHandler(e) {
    let todo = e.target.parentElement.parentElement;
    let id = todo.id;
    let change = {
      type: 'delete',
      id,
    };

    deleteMe();
  }

  let element = Button({ attrs, children });
  element.onclick = clickHandler;

  return element;
};
