import { createElement } from '../../helpers/dom';

export const Button = ({ attrs, children = [] }) => {
  const elementProps = { tag: 'button', attrs, children };
  const element = createElement(elementProps);
  return element;
};
