import { Checkbox } from '../generic/Checkbox';

export const CheckTodoInput = ({ toggleStatus, checked }) => {
  const attrs = {
    class: 'check-todo',
    'data-type': 'toggle',
  };

  if (checked) attrs.checked = checked;

  const checkTodo = Checkbox({ attrs });
  checkTodo.onclick = toggleStatus;

  return checkTodo;
};
