import { Button } from './Button';
import { TodoNameInput } from './TodoNameInput';
import { TodoName } from './TodoName';

export const EditTodoBtn = (props) => {
  const { clickHandler } = props;
  function mutate() {
    let todo = this.parentElement;
    let oldChild = todo.querySelector('[data-mutation]');
    if (oldChild) {
      let text, newChild;

      if (oldChild.dataset.mutation === 'idle') {
        text = oldChild.textContent;
        newChild = TodoNameInput({ value: text });
      } else {
        text = oldChild.value;
        newChild = TodoName({ name: text });
        let change = {
          type: 'rename',
          id: todo.id,
          name: text,
        };
        clickHandler(change);
      }

      todo.replaceChild(newChild, oldChild);
      this.textContent = this.textContent === 'Save' ? 'Edit' : 'Save';
    }
  }

  let attrs = [
    { type: 'button' },
    { class: 'edit-todo' },
    { 'data-type': 'rename' },
  ];
  let content = 'Edit';

  let element = Button(attrs, [content]);
  element.onclick = mutate;

  return element;
};
