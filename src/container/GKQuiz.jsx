import React, { useState } from "react";
import Header from "../shared/Header";
import QA from "./quiz/QuizData";
import QuizResult from "./quiz/QuizResult";
import ProgressBar from "./progress-bar/ProgressBar";

const GKQuiz = () => {

  const [que, setQue] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleNextQA = () => {
    const NextQA = que + 1;
    if (NextQA < QA.length) {
      setQue(NextQA);
    } else {
      setShowResult(true);
    };
  };
  // Increase score
  const [score, setScore] = useState(0);
  // If ans is true thn increase score
  const [correctAns, setCorrectAns] = useState(0);

  const handleOptions = (isCorrect, optionIndex) => {
    setSelectedOption(optionIndex);
    if (isCorrect) {
      setScore(score + 1);
      setCorrectAns(correctAns + 1);
    }
    increaseWidth();
    setTimeout(handleNextQA, 1000);
  };
  // Show the result
  const [showResult, setShowResult] = useState(false);

  // PlayAgain
  const PlayAgain = () => {
    setQue(0);
    setScore(0);
    setCorrectAns(0);
    setShowResult(false);
    setWidth(0);
  };

  const [width, setWidth] = useState(0);

  const increaseWidth = () => {
    setWidth(width + 25);
  };

  return (
    <>
      <Header></Header>
      <div className="bg-doveOrange p-10">
        <div className="bg-primaryBlue p-4">
          <ProgressBar increaseWidth={increaseWidth} width={width} />
        </div>
        {showResult ? (
          <QuizResult
            score={score}
            correctAns={correctAns}
            QA={QA}
            PlayAgain={PlayAgain}
          />
        ) : (
          <div className="">
            <div className="bg-white p-8 text-primaryBlue shadow-2xl rounded-xl">
              
              {/* Quetions section */}
              <div className="que-sec flex justify-between items-center font-bold">
                <div>Score: {score}</div>
                <div className="que-count">
                  <span>
                    Question {que + 1} of {QA.length}
                  </span>
                </div>
              </div>
              {/* Quetion */}
              <div className="quetion py-10 text-center text-3xl font-bold">
                {QA[que].question}
              </div>

              {/* Answer section */}
              <div className="ans-sec flex justify-center items-center space-x-4">
                {QA[que].answers.map((ans, i) => {
                  const optionClass =
                    ans === selectedOption
                      ? ans.isCorrect
                        ? "trueButton"
                        : "falseButton"
                      : "";
                  return (
                    <>
                      <button
                        className={`button ${optionClass}`}
                        // className="w-60 shadow-lg duration-150 hover:bg-doveOrange border border-darkblack hover:border-doveOrange hover:text-white h-14 rounded-xl text-xl font-bold"
                        onClick={() => handleOptions(ans.isCorrect, ans)}
                        key={i}
                      >
                        {ans.Option}
                      </button>
                    </>
                  );
                })}
              </div>
              <div className="space-x-4 flex justify-end">
                <button
                  className="w-24 shadow-lg duration-150 hover:bg-doveOrange border border-darkblack hover:border-doveOrange hover:text-white h-10 rounded-xl text-lg font-semibold"
                  onClick={PlayAgain}
                >
                  Quit
                </button>
                {/* <button
                  className="w-24 shadow-lg duration-150 hover:bg-doveOrange border border-darkblack hover:border-doveOrange hover:text-white h-10 rounded-xl text-lg font-semibold"
                  onClick={handleNextQA}
                >
                  Next
                </button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GKQuiz;
