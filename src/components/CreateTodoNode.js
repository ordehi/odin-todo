import { createElement } from '../helpers/dom';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoChange } from './TodoChange';

export const CreateTodoNode = (props) => {
  let todoChange = TodoChange();

  let addTodoBtn = AddTodoBtn({ updateHandler: props.updateHandler });

  let element = createElement(
    'div',
    [{ class: 'create-todo' }],
    [todoChange, addTodoBtn]
  );

  return element;
};
