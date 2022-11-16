import Container from "../generic/Container";
import TodoTitleInput from "./TodoTitleInput";
import TodoDescriptionInput from "./TodoDescriptionInput";
import PrioritySelect from "./PrioritySelect";
import DueDateInput from "./DueDateInput";
import "../../styles/todoChange.css";

const TodoChange = ({
  title = "",
  description = "",
  priority = 0,
  dueDate = "",
}) => {
  const attrs = {
    class: "todo-change",
    "data-mutation": "edit",
    "data-type": "edit",
  };

  const todoTitleInput = TodoTitleInput({ value: title });
  const todoDescriptionInput = TodoDescriptionInput({ value: description });
  const prioritySelect = PrioritySelect({ priority });
  const dueDateInput = DueDateInput({ dueDate });

  const children = [
    todoTitleInput,
    todoDescriptionInput,
    prioritySelect,
    dueDateInput,
  ];

  function updateValues(values) {
    todoTitleInput.setValue(values.title);
    todoDescriptionInput.setValue(values.description);
    prioritySelect.setValue(values.priority);
    dueDateInput.setValue(values.dueDate);
  }

  function readValues() {
    const values = {
      title: todoTitleInput.read(),
      description: todoDescriptionInput.read(),
      priority: prioritySelect.read(),
      dueDate: dueDateInput.read(),
    };
    return values;
  }

  const element = Container({ attrs, children });
  element.updateValues = updateValues;
  element.readValues = readValues;

  return element;
};

export default TodoChange;
