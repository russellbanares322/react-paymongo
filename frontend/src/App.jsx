import { useState } from "react";
import Product from "./components/Product/Product";

const questions = [
  {
    question: "Favorite color?",
    choices: [
      {
        option: "Red",
        correctAnswer: true,
      },
      {
        option: "Black",
        correctAnswer: false,
      },
      {
        option: "Blue",
        correctAnswer: false,
      },
    ],
  },
  {
    question: "Who is the CEO of Facebook?",
    choices: [
      {
        option: "Jack Hughe",
        correctAnswer: false,
      },
      {
        option: "Mark Zuckerberg",
        correctAnswer: true,
      },
      {
        option: "Dendi Ishka",
        correctAnswer: false,
      },
    ],
  },
  {
    question: "Who is the lead vocalist of Guns and Roses?",
    choices: [
      {
        option: "Bon Jovi",
        correctAnswer: false,
      },
      {
        option: "Appl De Ap",
        correctAnswer: false,
      },
      {
        option: "Axl Rose",
        correctAnswer: true,
      },
    ],
  },
];

function App() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [savedAnswers, setSavedAnswers] = useState([]);
  const isCurrentIndexTheLastQuestion =
    currentQuestionIndex === questions.length - 1;
  const questionToBeDisplayed = questions[currentQuestionIndex];

  const handleOptionChange = (selectedAnswerData) => {
    setSelectedAnswer(selectedAnswerData);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer.correctAnswer) {
      setScore(score + 1);
      setFeedbackMessage("Correct answer, very good!");
    } else {
      setFeedbackMessage("Incorrect answer, better luck next time");
    }
    setSavedAnswers([...savedAnswers, selectedAnswer]);

    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setFeedbackMessage("");
    }, 1000);
  };
  return (
    <div className="font-karla">
      <Product />
      <br />
      <div className="flex justify-between items-center">
        <h1>
          {currentQuestionIndex > questions.length - 1
            ? "Done"
            : `Question # ${currentQuestionIndex + 1}`}
        </h1>
        <h1>
          Current Score:{" "}
          <span className="text-lg text-green-500">
            {score} / {questions.length}
          </span>
        </h1>
      </div>
      <h3>{questionToBeDisplayed?.question}</h3>
      {questionToBeDisplayed?.choices.map((choice) => (
        <div key={choice}>
          <div
            className="flex justify-start items-center gap-2"
            key={choice.option}
          >
            <input
              checked={selectedAnswer?.option === choice.option}
              onChange={() => handleOptionChange(choice)}
              type="radio"
            />
            <label>{choice.option}</label>
          </div>
        </div>
      ))}
      <h3
        className={`${
          selectedAnswer?.correctAnswer ? "text-green-500" : "text-red-700"
        } text-center`}
      >
        {feedbackMessage}
      </h3>
      <button
        disabled={selectedAnswer === null}
        onClick={handleCheckAnswer}
        className="bg-green-500 text-white px-2 disabled:bg-gray disabled:cursor-not-allowed"
      >
        {isCurrentIndexTheLastQuestion ? "Check" : "Next"}
      </button>
    </div>
  );
}

export default App;
