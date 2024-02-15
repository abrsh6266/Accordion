import React from "react";
import { SingleQuestion } from "./SingleQuestion";
export function Questions({ questions }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return <SingleQuestion {...question} key={question.id} />;
      })}
    </section>
  );
}
