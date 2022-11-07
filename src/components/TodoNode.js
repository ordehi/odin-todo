import { createElement } from '../helpers/dom';
import { CheckTodoInput } from './CheckTodoInput';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { EditTodoBtn } from './EditTodoBtn';

/* 
props
  id: Todo.id
  class: Todo.status

children
  CheckTodoInput
  TodoName || TodoNameInput
  EditTodoBtn
  DeleteTodoBtn
*/
export const TodoNode = () => {
  let checkTodo = CheckTodoInput();
  let text = 'mock text, do this';
  let editTodo = EditTodoBtn();
  let deleteTodo = DeleteTodoBtn();

  let todoNode = createElement(
    'div',
    [{ id: 'a123' }, { class: 'todo-todo' }],
    [checkTodo, text, editTodo, deleteTodo]
  );

  return todoNode;
};
