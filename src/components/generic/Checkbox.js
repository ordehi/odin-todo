import { createElement } from '../../helpers/dom';

export const Checkbox = ({ attrs }) => {
  const elementProps = {
    tag: 'input',
    attrs: {
      type: 'checkbox',
      ...attrs,
    },
  };
  const element = createElement(elementProps);
  return element;
};
