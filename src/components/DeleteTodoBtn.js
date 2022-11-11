import { Button } from './Button';

export const DeleteTodoBtn = (props) => {
  const { updateHandler } = props;
  let attrs = [
    { type: 'button' },
    { class: 'delete-todo' },
    { 'data-type': 'delete' },
  ];
  let content = 'Delete';

  function clickHandler(e) {
    let todo = e.target.parentElement;
    let id = todo.id;
    let change = {
      type: 'delete',
      id,
    };

    updateHandler(change);
  }

  let element = Button(attrs, [content]);
  element.onclick = clickHandler;

  return element;
};
