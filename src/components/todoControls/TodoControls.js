import { Container } from '../generic/Container';
import { EditTodoBtn } from './EditTodoBtn';
import { DeleteTodoBtn } from './DeleteTodoBtn';

export const TodoControls = ({ toggleEditMode, deleteTodo }) => {
  const attrs = { class: 'todo-controls' };
  const children = [
    EditTodoBtn({ toggleEditMode }),
    DeleteTodoBtn({ deleteTodo }),
  ];

  const element = Container({ attrs, children });

  return element;
};
