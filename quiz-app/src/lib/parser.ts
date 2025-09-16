export type Question = {
  text: string;
  options: { text: string; correct: boolean }[];
  explanation?: string;
};

export function parseQuiz(md: string): Question[] {
  // Split the content to separate questions from explanations
  const sections = md.split(/^# Explanations$/m);
  const questionsSection = sections[0];
  const explanationsSection = sections[1] || '';

  // Parse questions
  const questionBlocks = questionsSection.split("---").filter(block => block.trim());
  const questions: Question[] = questionBlocks.map((block) => {
    const lines = block.trim().split("\n").filter(Boolean);
    const text = lines[0].replace(/^# /, "").trim();
    const options = lines.slice(1).map((line) => {
      const correct = line.includes("[x]");
      const optionText = line.replace(/- \[[x ]\] /, "").trim();
      return { text: optionText, correct };
    });
    return { text, options };
  });

  // Parse explanations if they exist
  if (explanationsSection.trim()) {
    const explanationBlocks = explanationsSection.trim().split(/^# Question \d+$/m).filter(block => block.trim());
    const explanationTitles = explanationsSection.match(/^# Question \d+$/gm) || [];

    explanationTitles.forEach((title, index) => {
      const questionNumber = parseInt(title.match(/\d+/)?.[0] || '0') - 1;
      if (questionNumber >= 0 && questionNumber < questions.length && explanationBlocks[index]) {
        questions[questionNumber].explanation = explanationBlocks[index].trim();
      }
    });
  }

  return questions;
}