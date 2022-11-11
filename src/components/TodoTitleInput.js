import { TodoInput } from './TodoInput';

export const TodoTitleInput = (props) => {
  let properties = {
    type: 'text',
    class: 'todo-title-input',
    name: 'todoTitleInput',
    id: 'todoTitleInput',
    value: props && props.value,
  };

  let element = TodoInput(properties);

  return element;
};
