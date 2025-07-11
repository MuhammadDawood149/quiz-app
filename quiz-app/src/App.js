import { useState } from "react";
import data from "./data.js";
export default function App() {
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState(null);
  const [score, setScore] = useState(0);
  const qData = data[index];
  const [isSubmited, setIsSubmited] = useState(false);
  function submited() {
    if (select === null) return;
    else if (isSubmited) return;
    setIsSubmited(true);
    if (qData.options[select] === qData.answer) {
      setScore((s) => s + 1);
    }
  }
  function next() {
    if (!isSubmited) return;
    setIndex((i) => i + 1);
    setSelect(null);
    setIsSubmited(false);
  }
  function handleReset() {
    setIndex(0);
    setSelect(null);
    setScore(0);
    setIsSubmited(false);
  }
  return (
    <div>
      {!(index > 9) ? (
        <div className="container">
          <h1>Quiz</h1>
          <div className="question">
            <p>Q. {qData.question}</p>

            {qData.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => !isSubmited && setSelect(i)}
                className={
                  isSubmited
                    ? qData.options[i] === qData.answer
                      ? "green"
                      : select === i
                      ? "red"
                      : ""
                    : select === i
                    ? "select"
                    : ""
                }
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="btns">
            <button onClick={submited}>Submit</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      ) : (
        <div className="end">
          <p>Your total score is {score}</p>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
        </div>
      )}
    </div>
  );
}
