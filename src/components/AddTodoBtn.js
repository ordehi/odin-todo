import { Button } from './Button';

export const AddTodoBtn = (clickHandler) => {
  let attrs = [
    { type: 'button' },
    { class: 'create-todo' },
    { 'data-change': 'create' },
  ];

  let content = 'Create Todo';

  let element = Button(attrs, [content]);
  console.log(clickHandler);
  element.onclick = clickHandler;

  return element;
};
