import updateController from './controllers/updateController';
import TodoList from './views/TodoList';

const updater = updateController();
const list = TodoList();

updater.initTodos(list);

const mockTodos = [
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('124', 'abc', list),
  updater.runTodoLogic('125', 'abc', list),
  updater.runTodoLogic('126', 'abc', list),
  updater.runTodoLogic('127', 'abc', list),
  updater.runTodoLogic('128', 'abc', list),
  updater.runTodoLogic('129', 'abc', list),
  updater.runTodoLogic('130', 'abc', list),
];
