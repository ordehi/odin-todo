import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoNameInput } from './TodoNameInput';

export const CreateTodoNode = (updater) => {
  let todoNameInput = TodoNameInput();
  const clickHandler = (e) => {
    let name = e.target.reference.value;
    if (name) {
      // TODO: This shouldn't happen here, further abstract update logic
      updater.runTodoLogic(name);
    }
  };

  let addTodoBtn = AddTodoBtn(clickHandler, todoNameInput);

  let element = createElement(
    'div',
    [{ class: 'create-todo' }],
    [todoNameInput, addTodoBtn]
  );

  return element;
};
