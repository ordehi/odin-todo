import { createElement } from "../../helpers/dom";

const TextInput = ({ attrs, value = "" }) => {
  const elementProps = {
    tag: "input",
    attrs: {
      type: "text",
      ...attrs,
    },
  };

  const element = createElement(elementProps);
  element.value = value;

  return element;
};

export default TextInput;
