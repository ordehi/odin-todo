import Container from "../generic/Container";
import Button from "../generic/Button";
import Paragraph from "../generic/Paragraph";

function TodoComment({ id = "", text = "" }) {
  const attrs = { class: "todo-comment", id };
  const comment = Paragraph({
    attrs: { class: "comment-text" },
    children: [text],
  });
  const editBtn = Button({
    attrs: { class: "edit-comment" },
    children: ["Edit"],
  });
  const deleteBtn = Button({
    attrs: { class: "delete-comment" },
    children: ["Delete"],
  });
  const children = [comment, editBtn, deleteBtn];
  const element = Container({ attrs, children });
  element.setContent = (content) => {
    element.textContent = content;
  };

  return element;
}

export default TodoComment;
