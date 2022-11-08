import updateController from './controllers/updateController';
import TodoList from './views/TodoList';

const updater = updateController();
const list = TodoList();

const mockTodos = [
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
  updater.runTodoLogic('123', 'abc', list),
];
