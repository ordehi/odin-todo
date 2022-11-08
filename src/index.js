import updateController from './controllers/updateController';
import TodoList from './views/TodoList';

const App = updateController();

const mockTodos = [
  App.runTodoLogic('123', 'abc'),
  App.runTodoLogic('124', 'abd'),
  App.runTodoLogic('125', 'abe'),
];

TodoList({ todos: mockTodos });
