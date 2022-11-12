import { Container } from '../generic/Container';
import { EditTodoBtn } from './EditTodoBtn';
import { DeleteTodoBtn } from './DeleteTodoBtn';

export const TodoControls = (props) => {
  const attrs = { class: 'todo-controls' };
  const { sendUpdate, toggleEditMode, deleteMe } = props;
  const children = [
    EditTodoBtn({ sendUpdate, toggleEditMode }),
    DeleteTodoBtn({ sendUpdate, deleteMe }),
  ];

  const element = Container({ attrs, children });

  return element;
};
