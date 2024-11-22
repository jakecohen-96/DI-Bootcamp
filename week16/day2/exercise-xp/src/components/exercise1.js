import React from "react";

function Exercise1() {
  const jsxElement = <h1> I love jsx!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Hello World</p>
      {jsxElement}
      <p>react is {sum} times better with jsx</p>
    </div>
  );
};

export default Exercise1;
