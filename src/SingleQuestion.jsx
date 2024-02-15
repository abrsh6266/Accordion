import { useState } from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
export function SingleQuestion({ title,info }) {
  const [isClicked, setClick] = useState(false);
  return (
    <div className="question">
      <article>
        <h5>{title}</h5>
        <button className="btn question-btn" onClick={setClick[true]}>
          {isClicked ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {isClicked && <p>{info}</p>}
      </article>
    </div>
  );
}
