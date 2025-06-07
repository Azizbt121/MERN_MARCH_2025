import { useState } from "react";

const Add = ({ todos, settodos }) => {
  const [todo, settodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      settodos([...todos, todo]);
      settodo("");
    }
  };

  return (
    <fieldset>
      <h1>Your Todo list:</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="What do you want to do?"
          value={todo}
          onChange={(e) => settodo(e.target.value)}
        />
        <button type="submit">Add task</button>
      </form>
    </fieldset>
  );
};

export default Add;
