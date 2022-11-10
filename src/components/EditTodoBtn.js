import { Button } from './Button';
import { TodoNameInput } from './TodoNameInput';
import { TodoName } from './TodoName';

export const EditTodoBtn = (props) => {
  const { clickHandler } = props;
  // function mutate() {
  //   let oldChild = this.reference.querySelector('[data-mutation="edit"]');
  //   if (oldChild) {
  //     let text = oldChild.textContent || oldChild.value;
  //     let newChild =
  //       oldChild.tagName.toLowerCase() === 'span'
  //         ? TodoNameInput({ value: text })
  //         : TodoName({ name: text });
  //     console.log(newChild);
  //     this.reference.replaceChild(newChild, oldChild);
  //     this.textContent = this.textContent === 'Save' ? 'Edit' : 'Save';
  //   }
  // }

  let attrs = [
    { type: 'button' },
    { class: 'edit-todo' },
    { 'data-type': 'rename' },
  ];
  let content = 'Edit';

  let element = Button(attrs, [content]);
  element.onclick = clickHandler;

  return element;
};
