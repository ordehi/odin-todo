import { Button } from './Button';
import { TodoChange } from './TodoChange';
import { TodoDetails } from './TodoDetails';

export const EditTodoBtn = (props) => {
  const { updateHandler } = props;
  function clickHandler() {
    let todo = this.parentElement;
    let oldChild = todo.querySelector('span[data-mutation]');
    if (oldChild) {
      let title, description, newChild;
      let children = oldChild.children;

      if (oldChild.dataset.mutation === 'idle') {
        title = children[0].textContent;
        description = children[1].textContent;
        newChild = TodoChange({ title, description });
      } else {
        title = children[0].value;
        description = children[1].value;
        newChild = TodoDetails({ title, description });
        let change = {
          type: 'edit',
          id: todo.id,
          title,
          description,
        };
        updateHandler(change);
      }

      todo.replaceChild(newChild, oldChild);
      this.textContent = this.textContent === 'Save' ? 'Edit' : 'Save';
    }
  }

  let attrs = [
    { type: 'button' },
    { class: 'edit-todo' },
    { 'data-type': 'edit' },
  ];
  let content = 'Edit';

  let element = Button(attrs, [content]);
  element.onclick = clickHandler;

  return element;
};
