import { TextInput } from '../generic/TextInput';

export const TodoTitleInput = (props) => {
  const attrs = {
    type: 'text',
    class: 'todo-title-input',
    name: 'todoTitleInput',
    id: 'todoTitleInput',
  };

  const value = props && props.value;

  const element = TextInput({ attrs, value });

  return element;
};
