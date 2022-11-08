import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoNameInput } from './TodoNameInput';

export const CreateTodoNode = (updater) => {
  let todoNameInput = TodoNameInput();
  const clickHandler = (e) => {
    let name = e.target.reference.value;
    let id = '323';
    if (name) {
      updater.runTodoLogic(id, name);
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
