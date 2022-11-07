export const Todo = (id, name) => {
  const _id = id;
  let _name = name;
  let _doneStatus = false;

  const rename = (name) => {
    _name = name;
  };

  const toggle = () => {
    _doneStatus = !_doneStatus;
  };

  const getProps = () => {
    return { id: _id, name: _name, doneStatus: _doneStatus };
  };

  const readName = () => _name;
  const readId = () => _id;
  const readStatus = () => _doneStatus;

  return {
    rename,
    toggle,
    getProps,
    readName,
    readId,
    readStatus,
  };
};
