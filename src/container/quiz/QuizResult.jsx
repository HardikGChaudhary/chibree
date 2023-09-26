import React from "react";

const QuizResult = (props) => {
  return (
    <>
      <div className="bg-white p-8 text-primaryBlue shadow-2xl rounded-xl space-y-4 text-center text-xl font-semibold">
        <div>Completed!</div>
        <div>Total score {props.score}/4</div>
        <div>
          Your currect quetion {props.correctAns} out of {props.QA.length}
        </div>
        <button
          className="w-48 shadow-lg duration-150 hover:bg-doveOrange border border-darkblack hover:border-doveOrange hover:text-white h-10 rounded-xl text-lg font-semibold"
          onClick={props.PlayAgain}
        >
          Play Again
        </button>
      </div>
    </>
  );
};

export default QuizResult;
