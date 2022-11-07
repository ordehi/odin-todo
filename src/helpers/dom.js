export const createElement = (tag, attrs, children) => {
  let element = document.createElement(tag);

  if (attrs && attrs.length) {
    attrs.forEach((attr) => {
      let [attrName, attrValue] = Object.entries(attr)[0];
      element.setAttribute(attrName, attrValue);
    });
  }

  if (children && children.length) {
    element.append(...children);
  }

  return element;
};

export const destroy = (node) => node.remove();
