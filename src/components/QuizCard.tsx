import React, { useContext, useState } from "react";
import { Contextprops } from "../services/Types";
import { QuizContext } from "../context/GlobalContext";
import Questions from "./Questions";

const QuizCard = () => {
  let { QuizData } = useContext<Contextprops>(QuizContext);
  let [score, setscore] = useState<number>(0);
  let [enable, setenable] = useState(false);
  let [step, setstep] = useState(0);

  const startQuiz = () => {
    setstep(0);
    setscore(0);
  };

  let handlequestion = (e: React.MouseEvent) => {
    const answer = e.currentTarget.textContent;
    const correct = QuizData[step].correct_answer === answer;

    if (correct) {
      setscore(++score);
    }

    setenable(true);
  };

  let nextQ = () => {
    setstep(++step)
    setenable(false);
  };

  if (!QuizData.length) {
    return <h1> Loading... </h1>;
  }

  return (
    <div className="quizcard">
      {step < 10 ? (
        <div>
          <h2>YOUR SCORE : <span className="score">{score}</span> </h2>
          <Questions
            question={QuizData[step].question}
            option={QuizData[step].option}
            callback={handlequestion}
            click={enable}
          />
          {enable ? <button onClick={nextQ}>Next</button> : null}
        </div>
      ) : (
        <div>
          <button onClick={startQuiz}>START AGAIN</button>
          <h2>Your Total Score is {score}</h2>
          <h4 className={score > 5 ? "green" : "red"}>{score > 5 ? "CONGRATULATION! YOU HAVE PASSED." : "FAILED! TRY AGAIN"}</h4>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
