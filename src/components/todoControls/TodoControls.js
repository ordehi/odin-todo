import { Container } from '../generic/Container';
import { EditTodoBtn } from './EditTodoBtn';
import { DeleteTodoBtn } from './DeleteTodoBtn';

export const TodoControls = (props) => {
  const attrs = { class: 'todo-controls' };
  const { toggleEditMode, deleteTodo } = props;
  const children = [
    EditTodoBtn({ toggleEditMode }),
    DeleteTodoBtn({ deleteTodo }),
  ];

  const element = Container({ attrs, children });

  return element;
};
