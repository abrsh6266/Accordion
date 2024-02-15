import { SingleQuestion } from "./SingleQuestion";
import { useState } from "react";
import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <article className="container">
        <h1>Questions</h1>
        {questions.map((question) => {
          return <SingleQuestion question={question} key={question.id}/>;
        })}
      </article>
    </main>
  );
};
export default App;
