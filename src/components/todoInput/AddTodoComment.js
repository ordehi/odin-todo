import Container from "../generic/Container";
import TextInput from "../generic/TextInput";
import Button from "../generic/Button";

const AddTodoComment = ({ updateHandler, value = "" }) => {
  const elementAttrs = { class: "add-comment-container" };
  const btnAttrs = {
    type: "button",
    class: "add-comment",
    "data-type": "comment",
  };
  const commentInput = TextInput({ attrs: { name: "commentInput" }, value });
  const addBtn = Button({ attrs: btnAttrs, children: ["Add Comment"] });
  const children = [commentInput, addBtn];
  const element = Container({ elementAttrs, children });

  function clickHandler(e) {
    updateHandler(e);
  }

  element.onclick = clickHandler;
  return element;
};

export default AddTodoComment;
