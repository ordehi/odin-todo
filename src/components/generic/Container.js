import { createElement } from "../../helpers/dom";

const Container = ({ attrs, children = [] }) => {
  const elementProps = { tag: "div", attrs, children };
  const element = createElement(elementProps);
  return element;
};

export default Container;
