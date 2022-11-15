import { Button } from '../generic/Button';

export const AddTodoBtn = ({ updateHandler }) => {
  const attrs = { type: 'button', class: 'create-todo', 'data-type': 'create' };
  const children = ['Create Todo'];
  const element = Button({ attrs, children });

  function clickHandler(e) {
    const parent = e.target.parentElement;
    const titleInput = parent.querySelector('.todo-title-input');
    const descriptionInput = parent.querySelector('.todo-description-input');
    const prioritySelect = parent.querySelector('.todo-priority-select');
    const values = {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: prioritySelect.value,
    };
    const type = 'create';
    let change = {};
    if (values.title) {
      change = {
        type,
        data: {
          checked: false,
          ...values,
        },
      };

      titleInput.value = '';
      descriptionInput.value = '';
      prioritySelect.value = 0;
      updateHandler(change);
    }
  }

  element.onclick = clickHandler;
  return element;
};
