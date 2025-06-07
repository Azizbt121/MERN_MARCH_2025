
const DeleteTask = ({ todos, settodos }) => {

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    settodos(updated);
  };

  return (
    <fieldset>
      <h2>Updated Todo list</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}{" "}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </fieldset>
  );
};

export default DeleteTask;
