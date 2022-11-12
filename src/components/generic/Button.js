import { createElement } from '../../helpers/dom';

export const Button = (props) => {
  const { attrs, children = [] } = props;
  const element = createElement('button', attrs, children);

  return element;
};
