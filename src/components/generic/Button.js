import { createElement } from "../../helpers/dom";

const Button = ({ attrs, children = [] }) => {
  const elementProps = { tag: "button", attrs, children };
  const element = createElement(elementProps);
  return element;
};

export default Button;
