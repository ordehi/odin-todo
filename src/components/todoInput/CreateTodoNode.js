import { Container } from '../generic/Container';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoChange } from './TodoChange';
import '../../styles/createTodo.css';

export const CreateTodoNode = (props) => {
  const attrs = { class: 'create-todo' };

  const todoChange = TodoChange();
  const addTodoBtn = AddTodoBtn({ updateHandler: props.updateHandler });
  const children = [todoChange, addTodoBtn];

  let element = Container({ attrs, children });

  return element;
};
