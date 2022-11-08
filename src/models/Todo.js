export const Todo = (id, name) => {
  const _props = {
    id,
    name,
    doneStatus: false,
  };

  const rename = (name) => {
    _props.name = name;
  };

  const toggle = () => {
    _props.doneStatus = !_props.doneStatus;
  };

  const getProps = () => {
    return _props;
  };

  const read = (prop) => _props[prop];

  return {
    rename,
    toggle,
    getProps,
    read,
  };
};
