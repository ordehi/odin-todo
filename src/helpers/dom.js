export const createElement = ({ tag = 'div', attrs = {}, children = [] }) => {
  const element = document.createElement(tag);
  Object.entries(attrs).map((attr) => element.setAttribute(attr[0], attr[1]));
  element.append(...children);
  return element;
};

export const destroy = (node) => node.remove();
