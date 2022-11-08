import { Button } from './Button';

export const EditTodoBtn = () => {
  let attrs = [
    { type: 'button' },
    { class: 'edit-todo' },
    { 'data-change': 'rename' },
  ];
  let content = 'Edit';

  let element = Button(attrs, [content]);

  return element;
};
