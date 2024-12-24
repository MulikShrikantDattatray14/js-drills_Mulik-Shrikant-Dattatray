import React, { useState } from "react";
import "./App.css";
const RandomNumberGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 101);
    console.log(random);
    setRandomNumber(random);
    setMessage(""); 
  };

  
  const handleInputChange = (e) => {
    const value = e.target.value;
    
      setUserInput(value);
    
  };


  const checkNumber = () => {
    if (userInput === "" ) {
      setMessage("Please enter a number.");
    } else if (parseInt(userInput) === randomNumber) {
      setMessage("Your guess is right");
    } else if (parseInt(userInput) < randomNumber) {
      setMessage(`Your guess is Less than the actual number`);
    } else if (parseInt(userInput) > randomNumber) {
      setMessage(`Your guess is Higher than the actual number`);
    }
  };

  
  const resetGame = () => {
    setUserInput("");
    setMessage("");
    setRandomNumber(null);
  };

  return (
    <div className="center-content">
      <h1>Guess the number</h1>
      <button onClick={generateRandomNumber}>Start/Restart</button>
      <br />
      <h3>Guess a Number between 0 and 100.</h3>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Enter a number between 0 and 100"
      />
      <br />
      <div>
      <button onClick={resetGame}>Reset</button>
        <button onClick={checkNumber}>Check</button>
      </div>
      
      <br />
      {message && <p>{message}</p>}
    </div>
  );
};

export default RandomNumberGame;
