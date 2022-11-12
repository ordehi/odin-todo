export const createElement = (tag, attrs, children = []) => {
  const element = document.createElement(tag);

  for (const attr in attrs) {
    element.setAttribute(attr, attrs[attr]);
  }

  element.append(...children);

  return element;
};

export const destroy = (node) => node.remove();
