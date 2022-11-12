import { Button } from '../generic/Button';
import { TodoChange } from '../todoInput/TodoChange';
import { TodoDetails } from '../todoNode/TodoDetails';

export const EditTodoBtn = (props) => {
  let oldChild;
  const { sendUpdate, toggleEditMode } = props;
  console.log(toggleEditMode);
  function clickHandler() {
    const todo = this.parentElement.parentElement;
    toggleEditMode();
    // sendUpdate(change);
  }

  let attrs = { type: 'button', class: 'edit-todo', 'data-type': 'edit' };
  let children = ['Edit'];

  let element = Button({ attrs, children });
  element.onclick = clickHandler;

  return element;
};
