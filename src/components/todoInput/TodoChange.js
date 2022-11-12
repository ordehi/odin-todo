import { Container } from '../generic/Container';
import { TodoTitleInput } from './TodoTitleInput';
import { TodoDescriptionInput } from './TodoDescriptionInput';

export const TodoChange = (props) => {
  const attrs = {
    class: 'todo-change',
    'data-mutation': 'edit',
    'data-type': 'edit',
  };

  const { title, description } = props || ['', ''];

  const children = [
    TodoTitleInput({ value: title }),
    TodoDescriptionInput({ value: description }),
  ];

  const element = Container({ attrs, children });

  return element;
};
