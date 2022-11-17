import Container from "../generic/Container";
import Label from "../generic/Label";
import SelectInput from "../generic/SelectInput";

const options = ["choose priority", "normal", "medium", "major", "critical"];

const PrioritySelect = ({ updateValue, priority: selected }) => {
  const attrs = {
    class: "todo-priority-select",
  };
  const label = Label({
    attrs: { for: "todoPriority" },
    children: ["Priority"],
  });
  const select = SelectInput({
    attrs: { name: "todoPriority" },
    options,
    selected: Number(selected),
  });
  const children = [label, select];
  const container = Container({ attrs, children });
  container.setValue = (value) => {
    select.value = value;
  };

  function read() {
    return Number(select.value);
  }

  function sendPriority() {
    const newValue = select.read();
    const change = { priority: newValue };
    updateValue(change);
  }

  container.read = read;
  if (updateValue) select.onchange = sendPriority;
  return container;
};

export default PrioritySelect;
