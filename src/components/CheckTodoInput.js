import { createElement } from '../helpers/dom';

export const CheckTodoInput = () => {
  let checkTodo = createElement('input', [
    { type: 'checkbox' },
    { class: 'check-todo' },
    { 'data-type': 'toggle' },
  ]);

  return checkTodo;
};
