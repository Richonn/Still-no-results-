import { useState } from "react";
import type { Question } from "../lib/parser";

type Props = { questions: Question[] };

export default function Quiz({ questions }: Props) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const handleAnswer = (qIndex: number, optIndex: number) => {
    if (finished) return;
    const newAnswers = [...answers];
    newAnswers[qIndex] = optIndex;
    setAnswers(newAnswers);
  };

  const score = answers.reduce((acc, ans, i) => {
    if (ans !== null && questions[i].options[ans].correct) acc++;
    return acc;
  }, 0);

  return (
    <div>
      {questions.map((q, qi) => (
        <div
          key={qi}
          style={{
            marginBottom: "20px",
            padding: "10px",
            border: "1px solid #ddd"
          }}
        >
          {/* Ici on affiche la question en texte, pas cliquable */}
          <h3 style={{ marginBottom: "10px" }}>{q.text}</h3>
  
          <ul style={{ listStyle: "none", padding: 0 }}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
  
              let border = "1px solid #ccc";
              if (finished) {
                if (opt.correct) border = "2px solid green";
                else if (selected && !opt.correct) border = "2px solid red";
              } else if (selected) {
                border = "2px solid blue";
              }
  
              return (
                <li key={oi} style={{ marginBottom: "5px" }}>
                  {/* Seule la réponse est cliquable */}
                  <button
                    onClick={() => handleAnswer(qi, oi)}
                    style={{
                      padding: "8px",
                      background: selected ? "#eee" : "#fff",
                      border,
                      cursor: finished ? "default" : "pointer",
                      textAlign: "left",
                      width: "100%",
                      color: "black"
                    }}
                  >
                    {opt.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
  
      {!finished ? (
        <button
          onClick={() => setFinished(true)}
          style={{ padding: "10px 20px", marginTop: "20px", fontSize: "16px" }}
        >
          Valider
        </button>
      ) : (
        <h2>
          Score : {score} / {questions.length}
        </h2>
      )}
    </div>
  );
}