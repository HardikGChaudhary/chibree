import React, { useState } from "react";
import Header from "../shared/Header";
import QA from "./quiz/QuizData";

const GKQuiz = () => {
  const [que, setQue] = useState(0);
  const handleNextQA = () => {
    const NextQA = que + 1;
    setQue(NextQA);
  };

  return (
    <>
      <Header></Header>
      <h1>Hi I am GK Quiz</h1>
      {/* Quetions section */}
      <div className="que-sec">
        <div>Score: 5</div>
        <div className="que-count">
          <span>Question {que + 1} of {QA.length}</span>
        </div>
        <div className="quetion">{QA[que].question}</div>
      </div>

      {/* Answer sction */}
      <div className="ans-sec">
        {QA[que].answers.map((ans, i) => {
          return (
            <>
              <button key={i}>{ans.Option}</button>
            </>
          );
        })}
      </div>
      <div>
        <button>Quit</button>
        <button onClick={handleNextQA}>Next</button>
      </div>
    </>
  );
};

export default GKQuiz;
