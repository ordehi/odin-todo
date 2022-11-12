import { Checkbox } from '../generic/Checkbox';

export const CheckTodoInput = () => {
  const attrs = {
    class: 'check-todo',
    'data-type': 'toggle',
    name: 'checkTodo',
    id: 'checkTodo',
  };

  const checkTodo = Checkbox(attrs);

  return checkTodo;
};
