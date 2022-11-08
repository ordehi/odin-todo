import { Button } from './Button';

export const AddTodoBtn = () => {
  let attrs = [
    { type: 'button' },
    { class: 'create-todo' },
    { 'data-change': 'create' },
  ];
  let content = 'Create Todo';

  let element = Button(attrs, [content]);

  return element;
};
