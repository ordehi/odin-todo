import { Button } from './Button';

export const AddTodoBtn = (props) => {
  let attrs = [
    { type: 'button' },
    { class: 'create-todo' },
    { 'data-type': 'create' },
  ];

  let content = 'Create Todo';

  let element = Button(attrs, [content]);

  function clickHandler(e) {
    let parent = e.target.parentElement;
    let titleInput = parent.querySelector('.todo-title-input');
    let descriptionInput = parent.querySelector('.todo-description-input');
    let [title, description] = [titleInput.value, descriptionInput.value];
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
