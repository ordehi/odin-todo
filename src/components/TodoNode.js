import { createElement } from '../helpers/dom';
import { CheckTodoInput } from './CheckTodoInput';
import { TodoDetails } from './TodoDetails';
import { DeleteTodoBtn } from './DeleteTodoBtn';
import { EditTodoBtn } from './EditTodoBtn';

export const TodoNode = (props) => {
  const { todo, updateHandler } = props;
  const { id, title, description, doneStatus } = todo.getProps();
  let todoNode = createElement('div', [
    { id },
    { class: `todo-${doneStatus ? 'done' : 'todo'}` },
    { 'data-state': 'todo' },
  ]);

  let checkTodo = CheckTodoInput();
  let details = TodoDetails({ title, description });
  let editTodo = EditTodoBtn({ updateHandler });
  let deleteTodo = DeleteTodoBtn({ updateHandler });

  todoNode.append(checkTodo, details, editTodo, deleteTodo);

  return todoNode;
};
