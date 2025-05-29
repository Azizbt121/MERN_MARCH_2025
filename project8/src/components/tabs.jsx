import { useState } from "react";

const Tab = () => {
  const [tab, setTab] = useState("tab1");

  const [text, setText] = useState({
    tab1: "Tab 1 content is showing here...",
    tab2: "Tab 2 content is showing here...",
    tab3: "Tab 3 content is showing here..."
  });

  const textWriting = (e) => {
    setText({...text,[tab]: e.target.value});
  };

  const submitINFO = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitINFO}>
        <div>
          <button type="button" onClick={() => setTab("tab1")}>Tab 1</button>
          <button type="button" onClick={() => setTab("tab2")}>Tab 2</button>
          <button type="button" onClick={() => setTab("tab3")}>Tab 3</button>
        </div>

        <textarea value={text[tab]} onChange={textWriting} style={{ height: "400px", width: "800px", display: "block", margin: "0 auto" }} />

      </form>
    </>
  );
};

export default Tab;
