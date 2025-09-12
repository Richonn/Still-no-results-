export type Question = {
  text: string;
  options: { text: string; correct: boolean }[];
};

export function parseQuiz(md: string): Question[] {
  const blocks = md.split("---");
  return blocks.map((block) => {
    const lines = block.trim().split("\n").filter(Boolean);
    const text = lines[0].replace(/^# /, "").trim();
    const options = lines.slice(1).map((line) => {
      const correct = line.includes("[x]");
      const optionText = line.replace(/- \[[x ]\] /, "").trim();
      return { text: optionText, correct };
    });
    return { text, options };
  });
}
