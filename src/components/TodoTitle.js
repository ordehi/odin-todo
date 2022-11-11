import { createElement } from '../helpers/dom';

export function TodoTitle(props) {
  let attrs = [{ class: 'todo-title' }, { 'data-change': 'toggle' }];
  let content = props.title;

  let element = createElement('span', attrs, [content]);

  return element;
}
