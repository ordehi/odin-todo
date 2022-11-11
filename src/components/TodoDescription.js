import { createElement } from '../helpers/dom';

export function TodoDescription(props) {
  let attrs = [{ class: 'todo-description' }, { 'data-change': 'refine' }];
  let content = props.description;

  let element = createElement('span', attrs, [content]);

  return element;
}
