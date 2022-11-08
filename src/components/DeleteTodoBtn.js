import { Button } from './Button';

export const DeleteTodoBtn = () => {
  let attrs = [
    { type: 'button' },
    { class: 'delete-todo' },
    { 'data-change': 'delete' },
  ];
  let content = 'Delete';

  let element = Button(attrs, [content]);

  return element;
};
