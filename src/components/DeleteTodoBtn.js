import { Button } from './Button';

export const DeleteTodoBtn = (clickHandler, refId) => {
  let attrs = [
    { type: 'button' },
    { class: 'delete-todo' },
    { 'data-type': 'delete' },
  ];
  let content = 'Delete';

  let element = Button(attrs, [content]);
  element.dataset.refId = refId;
  element.onclick = clickHandler;

  return element;
};
