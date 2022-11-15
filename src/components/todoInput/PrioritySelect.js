import SelectInput from "../generic/SelectInput";

const options = ["choose priority", "normal", "medium", "major", "critical"];

const PrioritySelect = ({ updatePriority, priority: selected }) => {
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

  function sendPriority() {
    const newValue = element.read();
    updatePriority(newValue);
  }

  element.read = read;

  element.onchange = sendPriority;
  return element;
};

export default PrioritySelect;
