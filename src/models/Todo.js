export const Todo = (id, name) => {
  const _id = id;
  let _name = name;
  let _doneStatus = false;

  const changeName = (name) => {
    _name = name;
  };

  const toggleStatus = () => {
    _doneStatus = !_doneStatus;
  };

  const readName = () => _name;
  const readId = () => _id;
  const readStatus = () => _doneStatus;

  return {
    changeName,
    toggleStatus,
    readName,
    readId,
    readStatus,
  };
};
