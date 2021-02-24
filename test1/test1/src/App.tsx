import Questioncard from "./components/QuestionCard";
import React from "react";
const App: React.FC = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions ...</p>
      <Questioncard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
