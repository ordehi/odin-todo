export const Todo = (id, title, description, doneStatus) => {
  const _props = {
    id,
    title,
    description,
    doneStatus: doneStatus || false,
  };

  const edit = (title, description) => {
    _props.title = title || _props.title;
    _props.description = description || _props.description;
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
    edit,
    toggle,
  };
};
