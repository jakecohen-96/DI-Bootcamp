const Counter = (props) => {
    const { count, setCount } = props;
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    return (
      <>
        <h2>My Counter</h2>
        <button onClick={handleIncrement}>count: </button>
      </>
    );
  };
  
  export default Counter;