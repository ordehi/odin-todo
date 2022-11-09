import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoNameInput } from './TodoNameInput';

export const CreateTodoNode = (updater) => {
  // when a change happens that introduces input, this input should be rendered in place of a todoName
  let todoNameInput = TodoNameInput();
  const clickHandler = (e) => {
    let name = e.target.reference.value;
    if (name) {
      let change = {
        type: 'create',
        id: null,
        name,
      };
      // TODO: This shouldn't happen here, further abstract update logic
      updater.runTodoLogic(change);
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
