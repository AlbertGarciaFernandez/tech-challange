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
      <style jsx>
        {`
          * {
            margin: 1em;
            padding: 0.5em;
          }
          .buttonRandomSection {
            display: flex;
            flex-direction: row;
          }
          button {
            margin-top: 10px;
            border: 2px solid black;
            color: white;
            background-color: #080736;
            cursor: pointer;
            padding: 10px 20px;
            font-family: "Lato", sans-serif;
            text-transform: uppercase;
            border-radius: 5px;
          }
          button:hover {
            background-color: #383636;
            color: #fff;
            transition: all 0.3s ease-in-out;
          }
          .error {
            color: red;
          }
        `}
      </style>
    </div>
  );
}

export default ButtonRandom;
