import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoNameInput } from './TodoNameInput';

export const CreateTodoNode = (props) => {
  let todoNameInput = TodoNameInput();
  let addTodoBtn = AddTodoBtn();

  let element = createElement(
    'div',
    [{ class: 'create-todo' }],
    [todoNameInput, addTodoBtn]
  );

  return element;
};
