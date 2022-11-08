import { createElement } from '../helpers/dom';

export const TodoNameInput = () => {
  let attrs = [
    {
      type: 'text',
      class: 'todo-name-input',
      name: 'todoNameInput',
      id: 'todoNameInput',
    },
  ];

  let element = createElement('input', attrs);

  return element;
};
