import { Button } from '../generic/Button';
import { TodoChange } from '../todoInput/TodoChange';
import { TodoDetails } from '../todoNode/TodoDetails';

export const EditTodoBtn = (props) => {
  const state = { editing: false };
  const { toggleEditMode } = props;
  function clickHandler(e) {
    const todo = this.parentElement.parentElement;
    state.editing = !state.editing;
    if (state.editing) {
      this.textContent = 'Save';
    } else {
      this.textContent = 'Edit';
    }
    toggleEditMode(!state.editing);
    // sendUpdate(change);
  }

  let attrs = { type: 'button', class: 'edit-todo', 'data-type': 'edit' };
  let children = ['Edit'];

  let element = Button({ attrs, children });
  element.onclick = clickHandler;

  return element;
};
