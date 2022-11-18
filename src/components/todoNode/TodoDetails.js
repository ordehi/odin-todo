import Container from "../generic/Container";
import TodoDescription from "./TodoDescription";
import PrioritySelect from "../todoInput/PrioritySelect";
import DueDateInput from "../todoInput/DueDateInput";
import TodoComments from "./TodoComments";

const TodoDetails = ({
  updateValue,
  updateComments,
  description = "",
  priority = 0,
  dueDate = "",
  comments = [],
}) => {
  const attrs = { class: "todo-details", "data-mutation": "edit" };
  const todoDescription = TodoDescription({ description });
  const prioritySelect = PrioritySelect({ updateValue, priority });
  const dueDateInput = DueDateInput({ updateValue, dueDate });
  const todoComments = TodoComments({ updateComments, comments });
  const children = [
    todoDescription,
    prioritySelect,
    dueDateInput,
    todoComments,
  ];
  const element = Container({ attrs, children });

  function updateContent(content) {
    todoDescription.setValue(content.description);
    prioritySelect.setValue(content.priority);
    dueDateInput.setValue(content.dueDate);
  }

  element.updateContent = updateContent;
  return element;
};

export default TodoDetails;
