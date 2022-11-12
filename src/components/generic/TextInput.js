import { createElement } from '../../helpers/dom';

export const TextInput = (props) => {
  const attrs = {
    type: 'text',
    ...props.attrs,
  };

  const element = createElement('input', attrs);
  if (props && props.value) element.value = props.value;

  return element;
};
