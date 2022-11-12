import { createElement } from '../../helpers/dom';

export const Checkbox = (props) => {
  const attrs = {
    type: 'checkbox',
    class: props.class,
    name: props.name,
    id: props.id,
  };

  const element = createElement('input', attrs);

  return element;
};
