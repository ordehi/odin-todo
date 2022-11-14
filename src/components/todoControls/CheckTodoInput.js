import { Checkbox } from '../generic/Checkbox';

export const CheckTodoInput = (props) => {
  const { toggleStatus } = props;
  const attrs = {
    class: 'check-todo',
    'data-type': 'toggle',
  };

  if (props.checked) attrs.checked = props.checked;

  const checkTodo = Checkbox(attrs);
  checkTodo.onclick = toggleStatus;

  return checkTodo;
};
