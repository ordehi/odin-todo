import { createElement } from '../helpers/dom';

export const Button = (attrs, content) => {
  let element = createElement('button', attrs, content);

  return element;
};
