import { TodoInput } from './TodoInput';

export const TodoDescriptionInput = (props) => {
  let properties = {
    type: 'text',
    class: 'todo-description-input',
    name: 'todoDescriptionInput',
    id: 'todoDescriptionInput',
    value: props && props.value,
  };

  let element = TodoInput(properties);

  return element;
};
