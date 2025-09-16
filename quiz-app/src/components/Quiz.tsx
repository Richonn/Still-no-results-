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

  const isAnswerCorrect = (qIndex: number): boolean => {
    const answer = answers[qIndex];
    return answer !== null && questions[qIndex].options[answer].correct;
  };

  return (
    <div>
      {questions.map((q, qi) => (
        <div
          key={qi}
          style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px"
          }}
        >
          {/* Question title - not clickable */}
          <h3 style={{ 
            marginBottom: "15px",
            color: finished ? (isAnswerCorrect(qi) ? "#4CAF50" : "#f44336") : "#ffffffff",
            fontSize: "18px"
          }}>
            Question {qi + 1}: {q.text}
          </h3>
  
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
  
              let backgroundColor = "#fff";
              let border = "1px solid #ccc";
              let color = "#333";
              
              if (finished) {
                if (opt.correct) {
                  backgroundColor = "#e8f5e8";
                  border = "2px solid #4CAF50";
                  color = "#2E7D32";
                } else if (selected && !opt.correct) {
                  backgroundColor = "#ffebee";
                  border = "2px solid #f44336";
                  color = "#c62828";
                }
              } else if (selected) {
                backgroundColor = "#e3f2fd";
                border = "2px solid #2196F3";
                color = "#1976D2";
              }
  
              return (
                <li key={oi} style={{ marginBottom: "8px" }}>
                  <button
                    onClick={() => handleAnswer(qi, oi)}
                    disabled={finished}
                    style={{
                      padding: "12px 16px",
                      backgroundColor,
                      border,
                      borderRadius: "6px",
                      cursor: finished ? "default" : "pointer",
                      textAlign: "left",
                      width: "100%",
                      color,
                      fontSize: "15px",
                      transition: "all 0.2s ease",
                      opacity: finished && !opt.correct && !selected ? 0.6 : 1
                    }}
                  >
                    {opt.text}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Show explanation for incorrect answers after validation */}
          {finished && !isAnswerCorrect(qi) && q.explanation && (
            <div style={{
              marginTop: "15px",
              padding: "12px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "6px",
              borderLeft: "4px solid #f39c12"
            }}>
              <strong style={{ color: "#856404" }}>Explication :</strong>
              <p style={{ margin: "8px 0 0 0", color: "#856404", fontSize: "14px" }}>
                {q.explanation}
              </p>
            </div>
          )}
        </div>
      ))}
  
      {!finished ? (
        <button
          onClick={() => setFinished(true)}
          disabled={answers.some(answer => answer === null)}
          style={{ 
            padding: "12px 24px", 
            marginTop: "20px", 
            fontSize: "16px",
            backgroundColor: answers.some(answer => answer === null) ? "#ccc" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: answers.some(answer => answer === null) ? "not-allowed" : "pointer"
          }}
        >
          Valider le quiz
        </button>
      ) : (
        <div style={{ 
          marginTop: "20px", 
          padding: "20px", 
          backgroundColor: "#f8f9fa", 
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <h2 style={{ 
            color: score === questions.length ? "#4CAF50" : score >= questions.length / 2 ? "#FF9800" : "#f44336",
            marginBottom: "10px"
          }}>
            Score : {score} / {questions.length}
          </h2>
          <p style={{ color: "#666", margin: 0 }}>
            {score === questions.length 
              ? "Parfait ! 🎉" 
              : score >= questions.length / 2 
              ? "Bien joué ! 👍" 
              : "Continue tes efforts ! 💪"}
          </p>
        </div>
      )}
    </div>
  );
}