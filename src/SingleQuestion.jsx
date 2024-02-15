import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export function SingleQuestion({ id,title, info, activeId, toggleQuestion }) {
  const [isClicked, setClick] = useState(false);
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={()=>toggleQuestion(id)}>
          {activeId === id? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {activeId === id && <p>{info}</p>}
    </article>
  );
}
