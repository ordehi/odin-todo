import { Container } from '../generic/Container';
import { TodoTitleInput } from './TodoTitleInput';
import { TodoDescriptionInput } from './TodoDescriptionInput';
import '../../styles/todoChange.css';

export const TodoChange = (props) => {
  const attrs = {
    class: 'todo-change',
    'data-mutation': 'edit',
    'data-type': 'edit',
  };

  const { title, description } = props || ['', ''];

  const todoTitleInput = TodoTitleInput({ value: title });
  const todoDescriptionInput = TodoDescriptionInput({ value: description });

  const children = [todoTitleInput, todoDescriptionInput];

  function updateValues(values) {
    const { title, description } = values;
    todoTitleInput.setValue(title);
    todoDescriptionInput.setValue(description);
  }

  function readValues() {
    const values = {
      title: todoTitleInput.read(),
      description: todoDescriptionInput.read(),
    };
    return values;
  }

  const element = Container({ attrs, children });
  element.updateValues = updateValues;
  element.readValues = readValues;

  return element;
};
