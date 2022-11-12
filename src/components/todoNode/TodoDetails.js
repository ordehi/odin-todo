import { Container } from '../generic/Container';
import { TodoTitle } from './TodoTitle';
import { TodoDescription } from './TodoDescription';

export const TodoDetails = (props) => {
  const attrs = { class: 'todo-details', 'data-mutation': 'edit' };

  const { title, description } = props;

  const children = [TodoTitle({ title }), TodoDescription({ description })];

  const element = Container({ attrs, children });

  return element;
};
