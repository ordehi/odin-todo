import { createElement } from '../helpers/dom';
import { CheckTodoInput } from './CheckTodoInput';
import { TodoName } from './TodoName';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { EditTodoBtn } from './EditTodoBtn';

// const clickHandler = (e, updater) => {
//   let name = e.target.reference.value;
//   const { type, refId } = e.target;
//   let change = {
//     type,
//     id: refId,
//     name: reference.querySelector('.todo-name').textContent,
//   };
//   if (change.type) {
//     updater.runTodoLogic(change);
//   }
// };

export const TodoNode = (props) => {
  const { todo, clickHandler } = props;
  const { id, name, doneStatus } = todo.getProps();
  let todoNode = createElement('div', [
    { id },
    { class: `todo-${doneStatus ? 'done' : 'todo'}` },
    { 'data-state': 'todo' },
  ]);

  let checkTodo = CheckTodoInput();
  let todoName = TodoName({ name });
  let editTodo = EditTodoBtn({ clickHandler });
  let deleteTodo = DeleteTodoBtn({ clickHandler });

  todoNode.append(checkTodo, todoName, editTodo, deleteTodo);

  return todoNode;
};

/* 
export const CreateTodoNode = (updater) => {
  let todoNameInput = TodoNameInput();
  const clickHandler = (e) => {
    let name = e.target.reference.value;
    if (name) {
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

*/
