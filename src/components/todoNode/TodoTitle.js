import Heading from "../generic/Heading";

function TodoTitle({ level = 2, title = "" }) {
  const attrs = { class: "todo-title", "data-change": "toggle" };
  const children = [title];
  const element = Heading({ level, attrs, children });

  element.setContent = (content) => {
    element.textContent = content;
  };

  return element;
}

export default TodoTitle;
