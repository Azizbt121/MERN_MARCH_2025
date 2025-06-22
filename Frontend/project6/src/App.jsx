import { useState } from "react";
import Box from "./components/box";
import Display from "./components/Display";

function App() {
  const [colors, setColors] = useState([]);

  return (
    <div>
      <Box colors={colors} setColors={setColors} />
      <Display colors={colors} />
    </div>
  );
}

export default App;
