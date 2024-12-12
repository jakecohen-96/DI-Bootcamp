import { memo } from "react";
const ToDo = ({ todos }) => {
  console.log("render todo...", todos);
  return (
    <>
      <h2>Todos:</h2>
      {todos.map((task, indx) => {
        return (
          <div key={indx}>
            {indx} {task}
          </div>
        );
      })}
    </>
  );
};
export default memo(ToDo);
