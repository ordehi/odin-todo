import Container from "../generic/Container";
import TextInput from "../generic/TextInput";
import Button from "../generic/Button";

const AddTodoComment = ({ sendComment, value = "" }) => {
  const elementAttrs = { class: "add-comment-container" };
  const btnAttrs = {
    type: "button",
    class: "add-comment",
    "data-type": "comment",
  };
  const commentInput = TextInput({ attrs: { name: "commentInput" }, value });
  const addBtn = Button({ attrs: btnAttrs, children: ["Add Comment"] });
  const children = [commentInput, addBtn];
  const element = Container({ attrs: elementAttrs, children });
  function clickHandler() {
    if (commentInput.value === "") return null;
    return sendComment(commentInput.value);
  }

  addBtn.onclick = clickHandler;
  return element;
};

export default AddTodoComment;
