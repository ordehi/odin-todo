export const Todo = (id, name, doneStatus) => {
  const _props = {
    id,
    name,
    doneStatus: doneStatus || false,
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
    getProps,
    read,
    rename,
    toggle,
  };
};
