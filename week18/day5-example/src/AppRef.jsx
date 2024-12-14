import { useRef, useState } from "react";

/**
 * reffernce to html element
 * holding a value
 */
const AppRef = () => {
  const [count, setCount] = useState(0);
  //   const exampleRef = useRef({ a: "123" });

  let name = "Dan";
  const nameRef = useRef("John");

  console.log(name);
  console.log(nameRef.current);

  //   const divRef = useRef();
  //   const nameInputRef = useRef()

  //   console.log(exampleRef.current);

  const handleClick = () => {
    // console.log(divRef.current);
    // divRef.current.style.backgroundColor ='yellow'
    // console.log(nameInputRef.current.value);
    name = "Anne";
    nameRef.current = "Marry";
    console.log(name);
    console.log(nameRef.current);
  };
  return (
    <>
      <h2>The useRef hook</h2>
      <h2>{name}</h2>
      <h2>{nameRef.current}</h2>
      <button onClick={handleClick}>Click</button>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </div>
      {/* <div ref={divRef}>
        <h2>My Div</h2>
        <button onClick={handleClick}>Click</button>
      </div>
      <input ref={nameInputRef} /> */}
    </>
  );
};
export default AppRef;
