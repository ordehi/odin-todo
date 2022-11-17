import Container from "../generic/Container";
import TodoHeader from "../todoNode/TodoHeader";
import TodoDetails from "../todoNode/TodoDetails";
import TodoChange from "../todoInput/TodoChange";
import TodoControls from "../todoControls/TodoControls";
import "../../styles/todoNode.css";

function TodoModal({ todo, updateHandler }) {
  const state = { editing: false };
  const todoProps = todo.getProps();
  const { id, title, description, priority, dueDate } = todoProps;
  const attrs = {
    id,
    class: `todo-item todo-${todoProps.checked ? "checked" : "unchecked"}`,
    "data-state": "todo",
  };

  const sendUpdate = (change) => {
    updateHandler(change);
  };

  const updateValue = (newValues) => {
    sendUpdate({
      type: "edit",
      data: {
        id,
        ...newValues,
      },
    });
  };

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

  // TODO: refactor editDisplay and detailsDisplay into their own components
  const todoHeader = TodoHeader({
    toggleStatus,
    checked: todoProps.checked,
    title,
  });
  const todoDetails = TodoDetails({
    updateValue,
    title,
    description,
    priority,
    dueDate,
    type: "modal",
  });
  const detailsDisplay = Container({
    attrs: {
      class: "todo-info-display",
    },
    children: [todoHeader, todoDetails],
  });
  // TODO: refactor change so it doesn't have to re-render priority, dueDate and any inputs that can be updated without edit mode
  const todoChange = TodoChange({ title, description, priority, dueDate });
  const editDisplay = Container({
    attrs: {
      class: "todo-edit-display",
    },
    children: [todoChange],
  });
  let [oldChild, newChild] = state.editing
    ? [editDisplay, detailsDisplay]
    : [detailsDisplay, editDisplay];

  const toggleEditMode = (editFinished) => {
    if (editFinished) {
      const values = todoChange.readValues();
      todoHeader.updateContent(values);
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

  const children = [oldChild, TodoControls({ toggleEditMode, deleteTodo })];
  const todoNode = Container({ attrs, children });
  return todoNode;
}

export default TodoModal;
