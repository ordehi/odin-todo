import { createElement } from '../helpers/dom';

export const TodoNameInput = (props) => {
  let attrs = [
    {
      type: 'text',
    },
    { class: 'todo-name-input' },
    { name: 'todoNameInput' },
    { id: 'todoNameInput' },
    { 'data-mutation': 'edit' },
  ];

  let element = createElement('input', attrs);
  console.log(props);
  if (props) element.value = props.value;

  return element;
};
