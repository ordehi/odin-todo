import { createElement } from '../helpers/dom';

/* 
props
  tagName: input
  type: checkbox
  class: checkTodoInput
  data-change: String "status"
eventListener
  click: UpdateController(data-change, Todo.id)
*/

export const CheckTodoInput = () => {
  let checkTodo = createElement('input', [
    { type: 'checkbox' },
    { class: 'check-todo' },
    { 'data-change': 'toggle' },
  ]);

  return checkTodo;
};
