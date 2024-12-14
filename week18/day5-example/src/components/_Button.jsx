import { useContext } from "react";
import { AppContext } from "../App";

const _Button = () => {
  const { setCount } = useContext(AppContext);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </>
  );
};
export default _Button;
