import React from "react";

const Greeting = ({ name }) => {
  return (
    <h1>
      {name && name.trim() !== "" ? `Hello, ${name}!` : "Welcome, Guest!"}
    </h1>
  );
};

export default Greeting;
