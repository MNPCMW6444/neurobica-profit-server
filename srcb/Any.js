import Cell from "./Cell";
import Computed from "./Computed";

function Any(props) {
  const value = props.value;
  const setValue = props.setValue;
  if (props.type === "comp") setValue(value);

  return (
    <>
      <label>{props.label + ": "}</label>
      {props.type === "cell" && <Cell setter={setValue} />}
      {props.type === "comp" && <Computed value={value} />} <label>{"$"}</label>
      <br />
      <br />
    </>
  );
}

export default Any;
