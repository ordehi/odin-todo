import { Checkbox } from '../generic/Checkbox';

export const CheckTodoInput = (props) => {
  const { toggleStatus } = props;
  const attrs = {
    class: 'check-todo',
    'data-type': 'toggle',
  };

  const checkTodo = Checkbox(attrs);
  checkTodo.toggleStatus = toggleStatus;

  return checkTodo;
};
