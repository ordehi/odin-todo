import { createElement } from '../../helpers/dom';
import { capitalize } from '../../helpers/text';

function OptionElement(option, selected) {
  const attrs = { value: option };
  if (selected) attrs.selected = selected;
  const children = [capitalize(option)];

  return createElement('option', attrs, children);
}

export const SelectInput = (props) => {
  const { attrs, options, selected } = props;

  const children = options.map((option, index) =>
    OptionElement(option, index === selected)
  );

  const element = createElement('select', attrs, children);

  return element;
};
