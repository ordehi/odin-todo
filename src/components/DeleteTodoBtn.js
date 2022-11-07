import { Button } from './Button';
/* 
props
  tagName: button
  type: button
  textContent: Delete Todo (to be replaced by icon)
  data-change: String "delete"
eventListener
  type: click
  handler: deleteTodo()
*/

export const DeleteTodoBtn = () => {
  let attrs = [
    { type: 'button' },
    { class: 'delete-todo' },
    { 'data-change': 'delete' },
  ];
  let content = 'Delete Todo';

  let element = Button(attrs, content);

  return element;
};
