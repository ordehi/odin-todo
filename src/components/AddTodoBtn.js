import { Button } from './Button';

export const AddTodoBtn = (props) => {
  let attrs = [
    { type: 'button' },
    { class: 'create-todo' },
    { 'data-type': 'create' },
  ];

  let content = 'Create Todo';

  let element = Button(attrs, [content]);
  // element.reference = todoNameInput;
  element.onclick = props.clickHandler;

  return element;
};
