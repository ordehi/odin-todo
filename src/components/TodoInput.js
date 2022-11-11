import { createElement } from '../helpers/dom';

export const TodoInput = (props) => {
  let attrs = [
    {
      type: 'text',
    },
    { class: props.class },
    { name: props.name },
    { id: props.id },
  ];

  let element = createElement('input', attrs);
  if (props && props.value) element.value = props.value;

  return element;
};
