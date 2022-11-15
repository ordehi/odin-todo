import { Container } from '../generic/Container';
import { AddTodoBtn } from './AddTodoBtn';
import { TodoChange } from './TodoChange';
import '../../styles/createTodo.css';

export const CreateTodoNode = ({ updateHandler }) => {
  const attrs = { class: 'create-todo' };
  const todoChange = TodoChange({});
  const addTodoBtn = AddTodoBtn({ updateHandler });
  const children = [todoChange, addTodoBtn];
  let element = Container({ attrs, children });
  return element;
};
