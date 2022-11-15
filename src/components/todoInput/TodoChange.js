import { Container } from '../generic/Container';
import { TodoTitleInput } from './TodoTitleInput';
import { TodoDescriptionInput } from './TodoDescriptionInput';
import { PrioritySelect } from './PrioritySelect';
import '../../styles/todoChange.css';

export const TodoChange = ({ title = '', description = '', priority = 0 }) => {
  const attrs = {
    class: 'todo-change',
    'data-mutation': 'edit',
    'data-type': 'edit',
  };

  const todoTitleInput = TodoTitleInput({ value: title });
  const todoDescriptionInput = TodoDescriptionInput({ value: description });
  const prioritySelect = PrioritySelect({ priority });

  const children = [todoTitleInput, todoDescriptionInput, prioritySelect];

  function updateValues(values) {
    const { title, description, priority } = values;
    todoTitleInput.setValue(title);
    todoDescriptionInput.setValue(description);
    prioritySelect.setValue(priority);
  }

  function readValues() {
    const values = {
      title: todoTitleInput.read(),
      description: todoDescriptionInput.read(),
      priority: prioritySelect.read(),
    };
    return values;
  }

  const element = Container({ attrs, children });
  element.updateValues = updateValues;
  element.readValues = readValues;

  return element;
};
