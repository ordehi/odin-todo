import SelectInput from "../generic/SelectInput";

const options = ["choose priority", "normal", "medium", "major", "critical"];

const PrioritySelect = ({ priority: selected }) => {
  const attrs = {
    class: "todo-priority-select",
  };
  const element = SelectInput({ attrs, options, selected: Number(selected) });
  element.setValue = (value) => {
    element.value = value;
  };

  function read() {
    return Number(this.value);
  }

  element.read = read;
  return element;
};

export default PrioritySelect;
