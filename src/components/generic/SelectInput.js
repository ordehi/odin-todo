import { createElement } from '../../helpers/dom';
import { capitalize } from '../../helpers/text';

function OptionElement(option, index, selected) {
  const children = [capitalize(option)];
  const elementProps = { tag: 'option', attrs: { value: index }, children };
  if (index === selected) elementProps.attrs.selected = true;
  return createElement(elementProps);
}

export const SelectInput = ({ attrs, options, selected }) => {
  const children = options.map((option, index) =>
    OptionElement(option, index, selected)
  );
  const elementProps = { tag: 'select', attrs, children };
  const element = createElement(elementProps);
  return element;
};
