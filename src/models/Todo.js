export const Todo = (id, title, description, checked) => {
  const _props = {
    id,
    title,
    description,
    checked: checked || false,
    dueDate: null,
    checkList: {},
    priority: null,
    label: null,
  };

  const edit = (title, description) => {
    _props.title = title || _props.title;
    _props.description = description || _props.description;
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
