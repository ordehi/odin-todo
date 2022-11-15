import { createElement } from "../../helpers/dom";

const Checkbox = ({ attrs }) => {
  const elementProps = {
    tag: "input",
    attrs: {
      type: "checkbox",
      ...attrs,
    },
  };
  const element = createElement(elementProps);
  return element;
};

export default Checkbox;
