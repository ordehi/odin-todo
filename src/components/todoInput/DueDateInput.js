import Container from "../generic/Container";
import Label from "../generic/Label";
import DateInput from "../generic/DateInput";

const DueDateInput = ({ updateValue, dueDate = "" }) => {
  const attrs = {
    class: "todo-date-input",
  };

  const label = Label({ attrs: { for: "dueDate" }, children: ["Due Date"] });
  const dateInput = DateInput({ attrs: { name: "dueDate" }, dueDate });

  const element = Container({ attrs, children: [label, dateInput] });

  element.setValue = (newValue) => {
    dateInput.value = newValue;
  };

  function read() {
    return dateInput.value;
  }

  element.read = read;
  function sendDate() {
    const newValue = element.read();
    const change = { dueDate: newValue };
    updateValue(change);
  }

  if (updateValue) dateInput.onchange = sendDate;
  return element;
};

export default DueDateInput;
