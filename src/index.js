import updateController from "./controllers/updateController";
import "./styles/globals.css";

const updater = updateController();

updater.initTodos();
