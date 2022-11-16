import SelectInput from "../generic/SelectInput";

const options = ["choose priority", "normal", "medium", "major", "critical"];

const PrioritySelect = ({ updateValue, priority: selected }) => {
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
    const change = { priority: newValue };
    updateValue(change);
  }

  element.read = read;
  if (updateValue) element.onchange = sendPriority;
  return element;
};

export default PrioritySelect;
