import { TextInput } from '../generic/TextInput';

export const TodoTitleInput = (props) => {
  const attrs = {
    type: 'text',
    class: 'todo-title-input',
  };

  const value = props && props.value;

  const element = TextInput({ attrs, value });

  element.setValue = (value) => {
    element.value = value;
  };

  function read() {
    return this.value;
  }

  element.read = read;

  return element;
};
