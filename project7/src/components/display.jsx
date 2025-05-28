
const Display = ({ todos }) => {
  return (
    <fieldset>
      <h2>Current Todo list</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Display;
