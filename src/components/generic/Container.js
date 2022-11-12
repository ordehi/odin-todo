import { createElement } from '../../helpers/dom';

export const Container = (props) => {
  const { attrs, children = [] } = props;
  const element = createElement('div', attrs, children);

  return element;
};
