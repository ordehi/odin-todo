import Checkbox from "../generic/Checkbox";

const CheckTodoInput = ({ checked }) => {
  const attrs = {
    class: "check-todo",
    "data-type": "toggle",
  };

  if (checked) attrs.checked = checked;
  const checkTodo = Checkbox({ attrs });
  return checkTodo;
};

export default CheckTodoInput;
