import Container from "../generic/Container";
import TodoComment from "./TodoComment";
import AddTodoComment from "../todoInput/AddTodoComment";

function TodoComments({ updateComments, comments = [] }) {
  const attrs = { class: "todo-comments" };
  const commentItems = (newComments) =>
    newComments.map((comment) => TodoComment({ text: comment }));
  const items = commentItems(comments);
  const commentsContainer = Container({
    attrs: { class: "comments" },
    children: items,
  });

  const setComments = (newComments) => {
    const newItems = commentItems(newComments);
    commentsContainer.append(...newItems);
  };

  const sendComments = (change) => {
    updateComments(change);
    setComments(change.comments);
  };

  const addComment = AddTodoComment({ sendComments, value: "" });
  const children = [commentsContainer, addComment];
  const element = Container({ attrs, children });
  element.setComments = setComments;
  return element;
}

export default TodoComments;
