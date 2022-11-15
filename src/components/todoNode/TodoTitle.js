import { Container } from '../generic/Container';

export function TodoTitle({ title = '' }) {
  const attrs = { class: 'todo-title', 'data-change': 'toggle' };
  const children = [title];
  const element = Container({ attrs, children });

  element.setContent = (Content) => {
    element.textContent = Content;
  };

  return element;
}
