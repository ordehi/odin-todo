import { createElement } from "../../helpers/dom";

const DateInput = ({ attrs = {}, value = "" }) => {
  const elementProps = {
    tag: "input",
    attrs: {
      type: "date",
      ...attrs,
    },
  };

  const element = createElement(elementProps);
  element.value = value;

  return element;
};

export default DateInput;
