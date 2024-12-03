import React, { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import quotes from "./QuotesDatabase";

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [bgColor, setBgColor] = useState("#ffffff");


  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    setCurrentQuote(quotes[randomIndex]);
    setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

 
  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        color: "#000", 
      }}
    >
      <QuoteBox
        quote={currentQuote.quote}
        author={currentQuote.author}
        onClick={generateRandomQuote}
        style={{ color: "#000" }}
      />
    </div>
  );
};

export default App;