import { createElement } from "../../helpers/dom";

const Label = ({ attrs = {}, children = [] }) => {
  const elementProps = { tag: "label", attrs, children };
  const element = createElement(elementProps);
  return element;
};

export default Label;
