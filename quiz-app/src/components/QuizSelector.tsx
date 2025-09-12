type Props = {
    quizzes: string[];
    onSelect: (quiz: string) => void;
  };

export default function QuizSelector({ quizzes, onSelect }: Props) {
    return (
        <div style={{ padding: "20px" }}>
        <h2>Choisis un quiz :</h2>
        {quizzes.map((quiz) => (
            <button
            key={quiz}
            onClick={() => onSelect(quiz)}
            style={{
                display: "block",
                margin: "10px 0",
                padding: "10px",
                fontSize: "16px",
            }}
            >
            {quiz.replace(".md", "")}
            </button>
        ))}
        </div>
    );
}
