import { createElement } from '../helpers/dom';

export const TodoName = (props) => {
  let attrs = [{ class: 'todo-name' }, { 'data-change': 'toggle' }];
  let content = props.name;

  let element = createElement('span', attrs, [content]);

  return element;
};
