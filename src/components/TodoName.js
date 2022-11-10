import { createElement } from '../helpers/dom';

export function TodoName(props) {
  let attrs = [
    { class: 'todo-name' },
    { 'data-change': 'toggle' },
    { 'data-mutation': 'idle' },
  ];
  let content = props.name;

  let element = createElement('span', attrs, [content]);

  return element;
}
