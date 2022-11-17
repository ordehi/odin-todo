import Container from "../generic/Container";
import TodoDescription from "./TodoDescription";
import PrioritySelect from "../todoInput/PrioritySelect";
import DueDateInput from "../todoInput/DueDateInput";

const TodoDetails = ({
  updateValue,
  description = "",
  priority = 0,
  dueDate = "",
}) => {
  const attrs = { class: "todo-details", "data-mutation": "edit" };
  const todoDescription = TodoDescription({ description });
  const prioritySelect = PrioritySelect({ updateValue, priority });
  const dueDateInput = DueDateInput({ updateValue, dueDate });
  const children = [todoDescription, prioritySelect, dueDateInput];
  const element = Container({ attrs, children });

  function updateContent(content) {
    todoDescription.setContent(content.description);
    prioritySelect.setValue(content.priority);
    dueDateInput.setValue(content.dueDate);
  }

  element.updateContent = updateContent;
  return element;
};

export default TodoDetails;
