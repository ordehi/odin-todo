import { TextInput } from './TextInput';

export const TodoDescriptionInput = (props) => {
  let properties = {
    type: 'text',
    class: 'todo-description-input',
    name: 'todoDescriptionInput',
    id: 'todoDescriptionInput',
    value: props && props.value,
  };

  let element = TextInput(properties);

  return element;
};
