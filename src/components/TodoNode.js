import { createElement } from '../helpers/dom';
import { CheckTodoInput } from './CheckTodoInput';
import { TodoName } from './TodoName';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { EditTodoBtn } from './EditTodoBtn';

export const TodoNode = (props) => {
  let checkTodo = CheckTodoInput();
  console.log(props);
  let todoName = TodoName({ name: props.name });
  let editTodo = EditTodoBtn();
  let deleteTodo = DeleteTodoBtn();

  let todoNode = createElement(
    'div',
    [{ id: props.id }, { class: 'todo-todo' }],
    [checkTodo, todoName, editTodo, deleteTodo]
  );

  return todoNode;
};
