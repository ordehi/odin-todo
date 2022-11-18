import Container from "../components/generic/Container";
import CreateTodoNode from "../components/todoInput/CreateTodoNode";
import TodoNode from "../components/todoNode/TodoNode";
import "../styles/todoList.css";

const TodoList = (props) => {
  const { todos, updater } = props;
  const { updateHandler } = updater;
  const attrs = {
    class: "todo-list",
  };
  const element = Container({ attrs });
  const createTodoNode = CreateTodoNode({ updateHandler });

  element.appendChild(createTodoNode);

  const render = (todosToMap) => {
    todosToMap.map((todo) => {
      const todoNode = TodoNode({ todo, updateHandler });
      element.insertBefore(todoNode, createTodoNode);
      return todoNode;
    });
  };

  render(todos);

  const renderComment = (comment) => {
    const todoId = comment.id.split("-")[0];
    const todoNode = element.querySelector(`#${todoId}`);
    todoNode.addComment(comment);
  };

  element.render = render;
  element.renderComment = renderComment;
  element.removeTodo = (todosToMap) =>
    todosToMap.map((todo) =>
      element.removeChild(document.getElementById(todo.getProps().id))
    );

  return element;
};

export default TodoList;
