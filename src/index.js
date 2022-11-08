import updateController from './controllers/updateController';

const updater = updateController();

updater.initTodos();

const mockTodos = [
  updater.runTodoLogic('123', 'abc'),
  updater.runTodoLogic('124', 'abc'),
  updater.runTodoLogic('125', 'abc'),
  updater.runTodoLogic('126', 'abc'),
  updater.runTodoLogic('127', 'abc'),
  updater.runTodoLogic('128', 'abc'),
  updater.runTodoLogic('129', 'abc'),
  updater.runTodoLogic('130', 'abc'),
];
