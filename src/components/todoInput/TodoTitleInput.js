import TextInput from "../generic/TextInput";

const TodoTitleInput = ({ value = "" }) => {
  const attrs = {
    type: "text",
    class: "todo-title-input",
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

export default TodoTitleInput;
