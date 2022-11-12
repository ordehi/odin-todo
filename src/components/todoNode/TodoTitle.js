import { Container } from '../generic/Container';

export function TodoTitle(props) {
  const attrs = { class: 'todo-title', 'data-change': 'toggle' };
  const children = [props.title];

  const element = Container({ attrs, children });

  return element;
}
