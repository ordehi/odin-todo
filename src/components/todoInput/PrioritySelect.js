import { SelectInput } from '../generic/SelectInput';

const options = ['choose priority', 'normal', 'medium', 'major', 'critical'];

export const PrioritySelect = (props) => {
  const attrs = {
    class: 'todo-priority-select',
  };
  const { priority: selected } = props;

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
