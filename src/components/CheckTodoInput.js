import { createElement } from '../helpers/dom';

export const CheckTodoInput = () => {
  let checkTodo = createElement('input', [
    { type: 'checkbox' },
    { class: 'check-todo' },
    { 'data-change': 'toggle' },
  ]);

  return checkTodo;
};
