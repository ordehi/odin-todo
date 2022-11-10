import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoNameInput } from './TodoNameInput';

export const CreateTodoNode = (props) => {
  // when a change happens that introduces input, this input should be rendered in place of a todoName
  let todoNameInput = TodoNameInput();

  let addTodoBtn = AddTodoBtn({ clickHandler: props.clickHandler });

  let element = createElement(
    'div',
    [{ class: 'create-todo' }],
    [todoNameInput, addTodoBtn]
  );

  return element;
};
