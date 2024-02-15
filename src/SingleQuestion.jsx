import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export function SingleQuestion({ title, info }) {
  const [isClicked, setClick] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={()=>setClick(!isClicked)}>
          {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isClicked && <p>{info}</p>}
    </article>
  );
}
