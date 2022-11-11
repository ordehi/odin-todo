import { createElement } from '../helpers/dom';
import { TodoTitle } from './TodoTitle';
import { TodoDescription } from './TodoDescription';

export const TodoDetails = (props) => {
  let attrs = [{ class: 'todo-details' }, { 'data-mutation': 'idle' }];

  const { title, description } = props;

  let content = [TodoTitle({ title }), TodoDescription({ description })];

  let element = createElement('span', attrs, content);

  return element;
};
