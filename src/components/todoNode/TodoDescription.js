import Container from "../generic/Container";

function TodoDescription({ description }) {
  const attrs = { class: "todo-description", "data-change": "refine" };
  const children = [description];
  const element = Container({ attrs, children });

  element.setContent = (Content) => {
    element.textContent = Content;
  };

  return element;
}

export default TodoDescription;
