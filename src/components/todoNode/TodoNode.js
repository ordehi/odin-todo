import { Container } from '../generic/Container';
import { CheckTodoInput } from '../todoControls/CheckTodoInput';
import { TodoDetails } from './TodoDetails';
import { TodoChange } from '../todoInput/TodoChange';
import { TodoControls } from '../todoControls/TodoControls';
import '../../styles/todoNode.css';

export function TodoNode(props) {
  const state = { editing: false };
  const { todo, updateHandler } = props;
  let { id, title, description, checked, dueDate, checkList, priority, label } =
    todo.getProps();

  const attrs = {
    id,
    class: `todo-item todo-${checked ? 'checked' : 'unchecked'}`,
    'data-state': 'todo',
  };

  const todoDetails = TodoDetails({ title, description });
  const todoChange = TodoChange({ title, description });
  let oldChild, newChild;
  if (state.editing) {
    oldChild = todoChange;
    newChild = todoDetails;
  } else {
    oldChild = todoDetails;
    newChild = todoChange;
  }

  const sendUpdate = (change) => {
    updateHandler(change);
  };

  function toggleStatus() {
    checked = this.checked;
    const change = {
      type: 'toggle',
      checked,
      id,
    };
    sendUpdate(change);
  }

  const toggleEditMode = (editFinished) => {
    if (editFinished) {
      const values = todoChange.readValues();
      todoDetails.updateContent(values);
      const change = {
        id,
        type: 'edit',
        title: values.title,
        description: values.description,
      };
      sendUpdate(change);
    }
    state.editing = !state.editing;
    document.getElementById(id).replaceChild(newChild, oldChild);
    [oldChild, newChild] = [newChild, oldChild];
  };

  function deleteTodo() {
    const change = {
      type: 'delete',
      id,
    };
    sendUpdate(change);
  }

  const children = [
    CheckTodoInput({ toggleStatus, checked }),
    oldChild,
    TodoControls({ toggleEditMode, deleteTodo }),
  ];

  const todoNode = Container({ attrs, children });

  return todoNode;
}
