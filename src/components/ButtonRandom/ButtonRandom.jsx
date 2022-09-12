import React, { useState } from "react";

function ButtonRandom() {
  const [value, setValue] = useState("");

  const handleValueRandom = () => {
    const values = ["true", "false"];
    const int = Math.floor(Math.random() >= 0.5);
    setValue(values[int]);
  };
  return (
    <div className="buttonRandomSection">
      <button onClick={handleValueRandom}>Click to random value</button>
      <p>Value is {value}</p>
    </div>
  );
}

export default ButtonRandom;
