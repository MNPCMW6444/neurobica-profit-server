import React, { useState } from "react";

function Cell(props) {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.setter(e.target.value);
      }}
      type="number"
      min="0.00"
      max="100000000.00"
      step="0.01"
    ></input>
  );
}

export default Cell;
