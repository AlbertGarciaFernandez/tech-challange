import React, { useState } from "react";

function ButtonFetch() {
  const initialText = "Submit >";
  const [buttonText, setButtonText] = useState(initialText);
  const [errorMessage, setErrorMessage] = useState("");
  const [isActive, setIsActive] = useState(false);

  // posible scenario

  const [users, setUsers] = useState(null);

  const handleClick = () => {
    setButtonText("Loading...");
    setIsActive(true);
    setTimeout(() => {
      fetch("")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setUsers(data);

          setError(null);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
      setButtonText("Success");
    }, 3000);
  };

  return (
    <>
      <div>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: isActive ? "green" : "",
            border: "green",
            color: isActive ? "white" : "",
          }}
        >
          {buttonText}
        </button>
        <div>{users && <div>Users</div>}</div>
      </div>
    </>
  );
}

export default ButtonFetch;
