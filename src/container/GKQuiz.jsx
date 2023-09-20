import React, { useState } from "react";
import Header from "../shared/Header";
import QA from "./quiz/QuizData";
import QuizResult from "./quiz/QuizResult";

const GKQuiz = () => {
  const [que, setQue] = useState(0);
  const handleNextQA = () => {
    const NextQA = que + 1;
    if (NextQA < QA.length) {
      setQue(NextQA);
    } else {
      setShowResult(true);
    }
  };
  // Increase score
  const [score, setScore] = useState(0);
  // If ans is true thn increase score
  const [correctAns, setCorrectAns] = useState(0);
  const handleOptions = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAns(correctAns + 1);
    }
  };
  // Show the result
  const [showResult, setShowResult] = useState(false);

  // PlayAgain
  const PlayAgain = () => {
    setQue(0)
    setScore(0)
    setCorrectAns(0)
    setShowResult(false)
  }

  return (
    <>
      <Header></Header>
      <h1>Hi I am GK Quiz</h1>
      <div>
        {showResult ? (
          <QuizResult score={score} correctAns={correctAns} QA={QA} PlayAgain={PlayAgain} />
        ) : (
          <div>
            {/* Quetions section */}
            <div className="que-sec">
              <div>Score: {score}</div>
              <div className="que-count">
                <span>
                  Question {que + 1} of {QA.length}
                </span>
              </div>
              <div className="quetion">{QA[que].question}</div>
            </div>

            {/* Answer sction */}
            <div className="ans-sec">
              {QA[que].answers.map((ans, i) => {
                return (
                  <>
                    <button
                      onClick={() => handleOptions(ans.isCorrect)}
                      key={i}
                    >
                      {ans.Option}
                    </button>
                  </>
                );
              })}
            </div>
            <div>
              <button onClick={PlayAgain}>Quit</button>
              <button onClick={handleNextQA}>Next</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GKQuiz;
