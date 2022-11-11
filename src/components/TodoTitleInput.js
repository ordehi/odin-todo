import { TextInput } from './TextInput';

export const TodoTitleInput = (props) => {
  let properties = {
    type: 'text',
    class: 'todo-title-input',
    name: 'todoTitleInput',
    id: 'todoTitleInput',
    value: props && props.value,
  };

  let element = TextInput(properties);

  return element;
};
