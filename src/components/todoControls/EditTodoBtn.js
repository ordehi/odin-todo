import { Button } from '../generic/Button';

export const EditTodoBtn = ({ toggleEditMode }) => {
  const state = { editing: false };
  function clickHandler(e) {
    state.editing = !state.editing;
    if (state.editing) {
      this.textContent = 'Save';
    } else {
      this.textContent = 'Edit';
    }
    toggleEditMode(!state.editing);
  }

  let attrs = { type: 'button', class: 'edit-todo', 'data-type': 'edit' };
  let children = ['Edit'];

  let element = Button({ attrs, children });
  element.onclick = clickHandler;

  return element;
};
