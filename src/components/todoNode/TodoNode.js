import { Container } from '../generic/Container';
import { CheckTodoInput } from '../todoControls/CheckTodoInput';
import { TodoDetails } from './TodoDetails';
import { TodoChange } from '../todoInput/TodoChange';
import { TodoControls } from '../todoControls/TodoControls';
import '../../styles/todoNode.css';

export function TodoNode(props) {
  const state = { editing: false };
  const { todo, updateHandler } = props;
  const {
    id,
    title,
    description,
    checked,
    dueDate,
    checkList,
    priority,
    label,
  } = todo.getProps();

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
    console.log(change);
    //updateHandler(change);
  };

  const toggleEditMode = () => {
    state.editing = !state.editing;
    document.getElementById(id).replaceChild(newChild, oldChild);
    [oldChild, newChild] = [newChild, oldChild];
  };

  function deleteMe() {
    document.getElementById(id).remove();
  }

  const children = [
    CheckTodoInput(),
    oldChild,
    TodoControls({ sendUpdate, toggleEditMode, deleteMe }),
  ];

  const todoNode = Container({ attrs, children });

  return todoNode;
}
