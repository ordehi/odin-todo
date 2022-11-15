import { Container } from '../generic/Container';
import { TodoTitle } from './TodoTitle';
import { TodoDescription } from './TodoDescription';
import { PrioritySelect } from '../todoInput/PrioritySelect';

export const TodoDetails = ({ title = '', description = '', priority = 0 }) => {
  const attrs = { class: 'todo-details', 'data-mutation': 'edit' };
  const todoTitle = TodoTitle({ title });
  const todoDescription = TodoDescription({ description });
  const prioritySelect = PrioritySelect({ priority });
  const children = [todoTitle, todoDescription, prioritySelect];
  const element = Container({ attrs, children });

  function updateContent(content) {
    const { title, description, priority } = content;
    todoTitle.setContent(title);
    todoDescription.setContent(description);
    prioritySelect.setValue(priority);
  }

  element.updateContent = updateContent;
  return element;
};
