import React from "react";

function Cell(props) {
  return (
    <input
      value={props.value}
      type="number"
      min="0.00"
      max="100000000.00"
      step="0.01"
      disabled
    ></input>
  );
}

export default Cell;
