import Container from "../generic/Container";
import Label from "../generic/Label";
import DateInput from "../generic/DateInput";

const DueDateInput = ({ value = "" }) => {
  const attrs = {
    class: "todo-date-input",
  };

  const label = Label({ attrs: { for: "dueDate" }, children: ["Due Date"] });
  const dateInput = DateInput({ attrs: { name: "dueDate" }, value });

  const element = Container({ attrs, children: [label, dateInput] });

  element.setValue = (newValue) => {
    element.value = newValue;
  };

  function read() {
    return this.value;
  }

  element.read = read;
  return element;
};

export default DueDateInput;
