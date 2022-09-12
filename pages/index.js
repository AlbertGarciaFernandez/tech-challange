import React from "react";
import ButtonFetch from "../src/components/ButtonFetch/ButtonFetch";
import ButtonRandom from "../src/components/ButtonRandom/ButtonRandom";

export default function App() {
  return (
    <div classname="App">
      <ButtonRandom />
      <ButtonFetch />
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          .App {
            display: flex;
            height: 100vh;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
