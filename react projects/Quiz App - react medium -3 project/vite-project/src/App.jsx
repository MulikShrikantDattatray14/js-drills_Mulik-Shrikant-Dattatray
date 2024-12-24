import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [startQuiz, setStartQuiz] = useState(true);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [lockedAnswers, setLockedAnswers] = useState([]);

  const quizQuestions = [
    {
      question: "Who was the first President of India?",
      options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Indira Gandhi", "Subhas Chandra Bose"],
      answer: "Dr. Rajendra Prasad"
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi"
    },
    {
      question: "When did India gain independence?",
      options: ["1942", "1947", "1950", "1965"],
      answer: "1947"
    },
    {
      question: "Who wrote the national anthem of India?",
      options: ["Mahatma Gandhi", "Rabindranath Tagore", "Sarojini Naidu", "Vikram Sarabhai"],
      answer: "Rabindranath Tagore"
    },
    {
      question: "Which river is the longest in India?",
      options: ["Yamuna", "Ganga", "Godavari", "Indus"],
      answer: "Ganga"
    },
    {
      question: "What is the national flower of India?",
      options: ["Rose", "Lotus", "Tulip", "Sunflower"],
      answer: "Lotus"
    },
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Bhagat Singh"],
      answer: "Mahatma Gandhi"
    },
    {
      question: "Which is the largest state in India by area?",
      options: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
      answer: "Rajasthan"
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
      answer: "Indira Gandhi"
    },
    {
      question: "In which year was the Indian Constitution adopted?",
      options: ["1947", "1950", "1952", "1956"],
      answer: "1950"
    }
  ];

  const handleAnswer = (answer) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const index = newAnswers.findIndex(
        (answerObj) => answerObj.questionIndex === currentQuestionIndex
      );
      if (index === -1) {
        newAnswers.push({ questionIndex: currentQuestionIndex, selectedAnswer: answer });
      } else {
        newAnswers[index].selectedAnswer = answer;
      }
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    setLockedAnswers((prevLockedAnswers) => [
      ...prevLockedAnswers,
      currentQuestionIndex
    ]);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStartQuiz(false);
    }
  };

  const Result = () => {
    const correctAnswers = selectedAnswers.filter(
      (answer) =>
        quizQuestions[answer.questionIndex].answer === answer.selectedAnswer
    ).length;

    const wrongAnswers = quizQuestions.length - correctAnswers;

    return (
      <div className="result-container">
        <h2>Quiz Finished!</h2>
        <div className="result-table">
          <table>
            <thead>
              <tr>
                <th>Result</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Correct Answers</td>
                <td>{correctAnswers+"/10"}</td>
              </tr>
              <tr>
                <td>Wrong Answers</td>
                <td>{wrongAnswers+"/10"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Answer Breakdown:</h3>
        <ul>
          {selectedAnswers.map((answer, index) => {
            const question = quizQuestions[answer.questionIndex];
            const isCorrect = question.answer === answer.selectedAnswer;
            return (
              <li
                key={index}
                style={{
                  color: isCorrect ? "green" : "red",
                }}
              >
                Question {answer.questionIndex + 1}: {answer.selectedAnswer}{" "}
                {isCorrect ? "(Correct)" : "(Wrong)"}
                {!isCorrect && (
                  <span>
                    {" "}
                    (Correct answer: {question.answer})
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Quiz = () => {
    return (
      <div className="quiz-container">
       
        <div className="card">
        <h2>Question {currentQuestionIndex + 1} of 10</h2>
          <div className="question">
            <h3>{quizQuestions[currentQuestionIndex].question}</h3>
          </div>
          <div className="options">
            {quizQuestions[currentQuestionIndex].options.map((option, index) => {
              const isLocked = lockedAnswers.includes(currentQuestionIndex);
              const isSelected =
                selectedAnswers.find(
                  (answer) => answer.questionIndex === currentQuestionIndex
                )?.selectedAnswer === option;

              return (
                <button
                  key={index}
                  onClick={() => !isLocked && handleAnswer(option)}
                  className={`option-button ${isSelected ? "selected" : ""} ${isLocked ? "locked" : ""}`}
                  disabled={isLocked}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
        <button
          onClick={nextQuestion}
          className="next-button"
          disabled={selectedAnswers.find(
            (answer) => answer.questionIndex === currentQuestionIndex
          ) === undefined}
        >
          {currentQuestionIndex === quizQuestions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      {startQuiz ? <Quiz /> : <Result />}
    </div>
  );
};

export default App;
