import Container from "../generic/Container";
import CheckTodoInput from "../todoControls/CheckTodoInput";
import TodoDetails from "./TodoDetails";
import TodoChange from "../todoInput/TodoChange";
import TodoControls from "../todoControls/TodoControls";
import "../../styles/todoNode.css";

function TodoNode({ todo, updateHandler }) {
  const state = { editing: false };
  const todoProps = todo.getProps();
  const { id, title, description, priority } = todoProps;
  const attrs = {
    id,
    class: `todo-item todo-${todoProps.checked ? "checked" : "unchecked"}`,
    "data-state": "todo",
  };

  const sendUpdate = (change) => {
    updateHandler(change);
  };

  const updatePriority = (newValue) =>
    sendUpdate({
      type: "edit",
      data: {
        id,
        priority: newValue,
      },
    });

  const todoDetails = TodoDetails({
    updatePriority,
    title,
    description,
    priority,
  });
  const todoChange = TodoChange({ title, description, priority });
  let [oldChild, newChild] = state.editing
    ? [todoChange, todoDetails]
    : [todoDetails, todoChange];

  function toggleStatus() {
    todoProps.checked = this.checked;
    const change = {
      type: "toggle",
      data: {
        id,
        checked: todoProps.checked,
      },
    };
    sendUpdate(change);
  }

  const toggleEditMode = (editFinished) => {
    if (editFinished) {
      const values = todoChange.readValues();
      todoDetails.updateContent(values);
      const change = {
        type: "edit",
        data: {
          id,
          ...values,
        },
      };
      sendUpdate(change);
    }

    state.editing = !state.editing;
    document.getElementById(id).replaceChild(newChild, oldChild);
    [oldChild, newChild] = [newChild, oldChild];
  };

  function deleteTodo() {
    const change = {
      type: "delete",
      data: { id },
    };
    sendUpdate(change);
  }

  const children = [
    CheckTodoInput({ toggleStatus, checked: todoProps.checked }),
    oldChild,
    TodoControls({ toggleEditMode, deleteTodo }),
  ];
  const todoNode = Container({ attrs, children });
  return todoNode;
}

export default TodoNode;
