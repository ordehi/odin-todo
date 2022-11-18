import Container from "../generic/Container";
import AddTodoComment from "../todoInput/AddTodoComment";

function TodoComments({ comments = [] }) {
  const attrs = { class: "todo-comments" };
  const addComment = AddTodoComment({ updateHandler: "", value: "" });
  const children = [...comments, addComment];
  const element = Container({ attrs, children });
  element.setContent = (content) => {
    element.textContent = content;
  };

  return element;
}

export default TodoComments;
