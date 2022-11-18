import { createElement } from "../../helpers/dom";

const Paragraph = ({ attrs, children = [] }) => {
  const elementProps = { tag: "p", attrs, children };
  const element = createElement(elementProps);
  return element;
};

export default Paragraph;
