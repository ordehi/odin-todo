import { Button } from './Button';
/* 
props
  tagName: button
  type: button
  textContent: Edit Todo (to be replaced by icon later)
  data-change: String "renam
eventListener
  click: if not editing RenderTodoNameInput || if editing UpdateController(data-change, Todo.id, name)
*/

export const EditTodoBtn = () => {
  let attrs = [
    { type: 'button' },
    { class: 'edit-todo' },
    { 'data-change': 'rename' },
  ];
  let content = 'Edit Todo';

  let element = Button(attrs, content);

  return element;
};
