import React from 'react'

const QuizResult = (props) => {
  return (
    <>
      <div>
        <div>Completed!</div>
        <div>Total score {props.score}/10</div>
        <div>Your currect quetion  {props.correctAns} out of {props.QA.length}</div>
        <button>Play Again</button>
      </div>
    </>
  )
}

export default QuizResult
