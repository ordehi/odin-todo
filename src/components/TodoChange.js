import { createElement } from '../helpers/dom';
import { TodoTitleInput } from './TodoTitleInput';
import { TodoDescriptionInput } from './TodoDescriptionInput';

export const TodoChange = (props) => {
  let attrs = [{ class: 'todo-change' }, { 'data-mutation': 'change' }];

  const { title, description } = props || ['', ''];

  let content = [
    TodoTitleInput({ value: title }),
    TodoDescriptionInput({ value: description }),
  ];

  let element = createElement('span', attrs, content);

  return element;
};
