import TextInput from "../generic/TextInput";

const TodoDescriptionInput = ({ value = "" }) => {
  const attrs = {
    type: "text",
    class: "todo-description-input",
  };
  const element = TextInput({ attrs, value });

  element.setValue = (newValue) => {
    element.value = newValue;
  };

  function read() {
    return this.value;
  }

  element.read = read;
  return element;
};

export default TodoDescriptionInput;
