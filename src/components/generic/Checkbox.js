import { createElement } from '../../helpers/dom';

export const Checkbox = (props) => {
  const attrs = {
    type: 'checkbox',
    ...props,
  };

  const element = createElement('input', attrs);

  return element;
};
