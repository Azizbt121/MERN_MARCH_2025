import { useState } from "react";

const Box = ({ colors, setColors }) => {
  const [color, setColor] = useState("");

  const chooseColor = (e) => {
    e.preventDefault();

    if (color.trim() !== "") {
      setColors([...colors, color]);
      setColor("");
    }
  };

  return (
    <fieldset>
      <h1>Box Generator</h1>
      <form onSubmit={chooseColor}>
        <input
          type="text"
          placeholder="Enter a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add color</button>
      </form>
    </fieldset>
  );
};

export default Box;
