import { useContext } from "react";
import { AppContext } from "../App";
const ShowCouter = () => {
  const { count, name } = useContext(AppContext);
  //   const { count } = props;
  return (
    <>
      <h2>Count = {count} {name}</h2>
    </>
  );
};
export default ShowCouter;
