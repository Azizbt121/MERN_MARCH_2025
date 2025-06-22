import { useState } from "react";
import Add from "./components/Add";
import DeleteTask from "./components/delete";
import Display from "./components/Display";

function App() {
  const [todos, settodos] = useState([]);

  return (
    <fieldset>
      <Add todos={todos} settodos={settodos} />
      <Display todos={todos} />
      <DeleteTask todos={todos} settodos={settodos} />

    </fieldset>
  );
}

export default App;
