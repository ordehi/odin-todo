import { TextInput } from '../generic/TextInput';

export const TodoDescriptionInput = (props) => {
  const attrs = {
    type: 'text',
    class: 'todo-description-input',
    name: 'todoDescriptionInput',
    id: 'todoDescriptionInput',
  };

  const value = props && props.value;

  const element = TextInput({ attrs, value });

  return element;
};
