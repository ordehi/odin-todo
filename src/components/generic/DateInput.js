import { createElement } from "../../helpers/dom";

const DateInput = ({ attrs = {}, dueDate = "" }) => {
  const elementProps = {
    tag: "input",
    attrs: {
      type: "date",
      ...attrs,
    },
  };

  const element = createElement(elementProps);
  element.value = dueDate;
  return element;
};

export default DateInput;
