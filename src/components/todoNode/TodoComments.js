import Container from "../generic/Container";
import TodoComment from "./TodoComment";
import AddTodoComment from "../todoInput/AddTodoComment";

function TodoComments({ updateComments, comments = {} }) {
  const attrs = { class: "todo-comments" };
  const commentItems = (newComments) =>
    Object.entries(newComments).map((comment) =>
      TodoComment({ id: comment[0], text: comment[1] })
    );

  const items = commentItems(comments);
  const commentsContainer = Container({
    attrs: { class: "comments" },
    children: items,
  });

  const setComment = (newComment) => {
    const newItem = TodoComment({
      id: newComment.id,
      text: newComment.comment,
    });
    commentsContainer.append(newItem);
  };

  const sendComment = (comment) => {
    updateComments(comment);
  };

  const addComment = AddTodoComment({ sendComment, value: "" });
  const children = [commentsContainer, addComment];
  const element = Container({ attrs, children });
  element.setComment = setComment;
  return element;
}

export default TodoComments;
