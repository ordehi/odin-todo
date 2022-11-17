import { createElement } from "../../helpers/dom";

const Heading = ({ level, attrs, children = [] }) => {
  const elementProps = { tag: `h${level}`, attrs, children };
  const element = createElement(elementProps);
  return element;
};

export default Heading;
