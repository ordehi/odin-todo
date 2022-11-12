import { Button } from '../generic/Button';

export const AddTodoBtn = (props) => {
  const attrs = { type: 'button', class: 'create-todo', 'data-type': 'create' };

  const children = ['Create Todo'];

  const element = Button({ attrs, children });

  function clickHandler(e) {
    const parent = e.target.parentElement;
    const titleInput = parent.querySelector('.todo-title-input');
    const descriptionInput = parent.querySelector('.todo-description-input');
    const [title, description] = [titleInput.value, descriptionInput.value];
    let change = {};

    if (title) {
      change = {
        type: 'create',
        title,
        description,
      };

      titleInput.value = '';
      descriptionInput.value = '';
      props.updateHandler(change);
    }
  }

  element.onclick = clickHandler;

  return element;
};
