import { Container } from '../generic/Container';

export function TodoDescription(props) {
  const attrs = { class: 'todo-description', 'data-change': 'refine' };
  const children = [props.description];

  const element = Container({ attrs, children });

  element.setContent = (Content) => {
    element.textContent = Content;
  };

  return element;
}
