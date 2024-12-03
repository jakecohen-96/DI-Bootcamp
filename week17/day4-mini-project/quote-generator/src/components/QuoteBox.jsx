import React from "react";

const QuoteBox = ({ quote = "Loading...", author = "", onClick, style }) => {
  return (
    <div style={{ ...style, textAlign: "center", padding: "20px", background: "white", borderRadius: "8px" }}>
      <h1>"{quote}"</h1>
      {author && <h3>- {author}</h3>}
      <button style={{ marginTop: "20px" }} onClick={onClick}>
        New quote
      </button>
    </div>
  );
};

export default QuoteBox;