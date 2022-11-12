import { Container } from '../generic/Container';
import { TodoTitle } from './TodoTitle';
import { TodoDescription } from './TodoDescription';

export const TodoDetails = (props) => {
  const attrs = { class: 'todo-details', 'data-mutation': 'edit' };
  const { title, description } = props;

  const todoTitle = TodoTitle({ title });
  const todoDescription = TodoDescription({ description });
  const children = [todoTitle, todoDescription];

  const element = Container({ attrs, children });

  function updateContent(content) {
    const { title, description } = content;
    todoTitle.setContent(title);
    todoDescription.setContent(description);
  }

  element.updateContent = updateContent;

  return element;
};
