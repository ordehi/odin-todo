const Todo = (data) => {
  const props = data;

  const edit = (change) => {
    Object.assign(props, change);
  };

  const toggle = (checked) => {
    props.checked = checked;
  };

  const getProps = () => props;

  const read = (prop) => props[prop];

  return {
    getProps,
    read,
    edit,
    toggle,
  };
};

export default Todo;
