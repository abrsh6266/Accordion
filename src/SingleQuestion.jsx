import { useState } from "react";
export function SingleQuestion({question}) {
  const [isClicked,setClick] = useState(false)
  return <div className="question">
              <header>
                <p>{question.title}</p>
                <button className='btn question-btn' onClick={setClick[true]}>{isClicked?'-':'+'}</button>
                {isClicked && <p>{question.info}</p>}
              </header>
            </div>;
}
  