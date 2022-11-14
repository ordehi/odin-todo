export const Todo = (data) => {
  const _props = data;

  const edit = (change) => {
    Object.assign(_props, change);
  };

  const toggle = (checked) => {
    _props.checked = checked;
  };

  const getProps = () => {
    return _props;
  };

  const read = (prop) => _props[prop];

  return {
    getProps,
    read,
    edit,
    toggle,
  };
};
