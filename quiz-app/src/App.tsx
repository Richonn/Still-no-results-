import { useEffect, useState } from "react";
import Quiz from "./components/Quiz";
import QuizSelector from "./components/QuizSelector";
import { parseQuiz, type Question } from "./lib/parser";

const quizModules = import.meta.glob("/public/quizzes/*.md", { as: "raw" });

type QuizFile = { name: string; loader: () => Promise<string> };

const quizzes: QuizFile[] = Object.entries(quizModules).map(([path, loader]) => {
  const name = path.split("/").pop() || "inconnu.md";
  return { name, loader: loader as () => Promise<string> };
});

function App() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);

  const quizModules = import.meta.glob("/public/quizzes/*.md", { as: "raw" });
  const quizzes = Object.entries(quizModules).map(([path, loader]) => {
    const name = path.split("/").pop() || "quiz.md";
    return { name, loader: loader as () => Promise<string> };
  });

  useEffect(() => {
    if (selectedQuiz) {
      fetch(`/quizzes/${selectedQuiz}`)
        .then((res) => res.text())
        .then((md) => setQuestions(parseQuiz(md)))
        .catch((err) => console.error("Erreur de chargement quiz:", err));
    }
  }, [selectedQuiz]);

  const handleSelect = (quizName: string) => {
    const quiz = quizzes.find((q) => q.name === quizName);
    if (quiz) {
      quiz.loader().then((md) => setQuestions(parseQuiz(md)));
      setSelectedQuiz(quizName);
    }
  };

  if (!selectedQuiz) {
    return (
      <QuizSelector
        quizzes={quizzes.map((q) => q.name)}
        onSelect={handleSelect}
      />
    );
  }

  if (!questions) return <p>Chargement...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Quiz : {selectedQuiz.replace(".md", "")}</h1>
      <Quiz questions={questions} />
      <button onClick={() => { setSelectedQuiz(null); setQuestions(null); }}>
        Retour au menu
      </button>
    </div>
  );
}

export default App;
