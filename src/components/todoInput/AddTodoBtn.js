import { Button } from '../generic/Button';

export const AddTodoBtn = (props) => {
  const attrs = { type: 'button', class: 'create-todo', 'data-type': 'create' };

  const children = ['Create Todo'];

  const element = Button({ attrs, children });

  function clickHandler(e) {
    const parent = e.target.parentElement;
    const titleInput = parent.querySelector('.todo-title-input');
    const descriptionInput = parent.querySelector('.todo-description-input');
    const prioritySelect = parent.querySelector('.todo-priority-select');
    const [title, description, priority] = [
      titleInput.value,
      descriptionInput.value,
      prioritySelect.value,
    ];
    const type = 'create';
    let change = {};

    if (title) {
      change = {
        type,
        data: {
          title,
          description,
          checked: false,
          priority,
        },
      };

      titleInput.value = '';
      descriptionInput.value = '';
      prioritySelect.value = 0;
      props.updateHandler(change);
    }
  }

  element.onclick = clickHandler;

  return element;
};
