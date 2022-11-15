import Container from "../generic/Container";
import TodoTitle from "./TodoTitle";
import TodoDescription from "./TodoDescription";
import PrioritySelect from "../todoInput/PrioritySelect";

const TodoDetails = ({
  updatePriority,
  title = "",
  description = "",
  priority = 0,
}) => {
  const attrs = { class: "todo-details", "data-mutation": "edit" };
  const todoTitle = TodoTitle({ title });
  const todoDescription = TodoDescription({ description });
  const prioritySelect = PrioritySelect({ updatePriority, priority });
  const children = [todoTitle, todoDescription, prioritySelect];
  const element = Container({ attrs, children });

  function updateContent(content) {
    todoTitle.setContent(content.title);
    todoDescription.setContent(content.description);
    prioritySelect.setValue(content.priority);
  }

  element.updateContent = updateContent;
  return element;
};

export default TodoDetails;
