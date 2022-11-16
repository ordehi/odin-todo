import Container from "../generic/Container";
import TodoTitle from "./TodoTitle";
import TodoDescription from "./TodoDescription";
import PrioritySelect from "../todoInput/PrioritySelect";
import DueDateInput from "../todoInput/DueDateInput";

const TodoDetails = ({
  updateValue,
  title = "",
  description = "",
  priority = 0,
  dueDate = "",
}) => {
  const attrs = { class: "todo-details", "data-mutation": "edit" };
  const todoTitle = TodoTitle({ title });
  const todoDescription = TodoDescription({ description });
  const prioritySelect = PrioritySelect({ updateValue, priority });
  const dueDateInput = DueDateInput({ updateValue, dueDate });
  const children = [todoTitle, todoDescription, prioritySelect, dueDateInput];
  const element = Container({ attrs, children });

  function updateContent(content) {
    todoTitle.setContent(content.title);
    todoDescription.setContent(content.description);
    prioritySelect.setValue(content.priority);
    dueDateInput.setValue(content.dueDate);
  }

  element.updateContent = updateContent;
  return element;
};

export default TodoDetails;
