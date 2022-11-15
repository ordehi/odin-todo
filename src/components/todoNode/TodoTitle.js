import Container from "../generic/Container";

function TodoTitle({ title = "" }) {
  const attrs = { class: "todo-title", "data-change": "toggle" };
  const children = [title];
  const element = Container({ attrs, children });

  element.setContent = (content) => {
    element.textContent = content;
  };

  return element;
}

export default TodoTitle;
