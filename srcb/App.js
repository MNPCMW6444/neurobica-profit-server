import React, { useState } from "react";
import Any from "./Any";

function App() {
  const [manuf, setmanuf] = useState();
  function setman(v) {
    setmanuf(v);
  }
  const [value2, setValue2] = useState(manuf * 10);
  function set2(v) {
    setValue2(v);
  }

  return (
    <>
      `
      <Any type="cell" label="ManfCost" value={manuf} setValue={setman} />
      <Any type="comp" label="fcomp" value={value2} setValue={set2} />
    </>
  );
}

export default App;
