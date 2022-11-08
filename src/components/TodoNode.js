import updateController from '../controllers/updateController';
import { createElement } from '../helpers/dom';
import { CheckTodoInput } from './CheckTodoInput';
import { TodoName } from './TodoName';
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
export const TodoNode = (props) => {
  let checkTodo = CheckTodoInput();
  console.log(props.name);
  let todoName = TodoName({ name: props.name });
  let editTodo = EditTodoBtn();
  let deleteTodo = DeleteTodoBtn();

  let todoNode = createElement(
    'div',
    [{ id: 'a123' }, { class: 'todo-todo' }],
    [checkTodo, todoName, editTodo, deleteTodo]
  );

  return todoNode;
};
