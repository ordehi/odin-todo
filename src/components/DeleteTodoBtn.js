import { Button } from './Button';

export const DeleteTodoBtn = (props) => {
  const { clickHandler } = props;
  let attrs = [
    { type: 'button' },
    { class: 'delete-todo' },
    { 'data-type': 'delete' },
  ];
  let content = 'Delete';

  let element = Button(attrs, [content]);
  element.onclick = clickHandler;

  return element;
};
