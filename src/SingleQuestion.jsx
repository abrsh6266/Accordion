import { useState } from "react";
export function SingleQuestion({ title,info }) {
  const [isClicked, setClick] = useState(false);
  return (
    <div className="question">
      <header>
        <p>{title}</p>
        <button className="btn question-btn" onClick={setClick[true]}>
          {isClicked ? "-" : "+"}
        </button>
        {isClicked && <p>{info}</p>}
      </header>
    </div>
  );
}
