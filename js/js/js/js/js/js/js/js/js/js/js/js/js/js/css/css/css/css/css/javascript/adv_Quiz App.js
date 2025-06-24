


const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const questions = [
  { q: "Capital of France?", a: "paris" },
  { q: "5 + 3 = ?", a: "8" },
  { q: "JS stands for?", a: "javascript" },
];

let score = 0;
let index = 0;

function askQuestion() {
  if (index < questions.length) {
    rl.question(`${questions[index].q} `, (answer) => {
      if (answer.trim().toLowerCase() === questions[index].a) {
        console.log("✅ Correct!");
        score++;
      } else {
        console.log("❌ Wrong!");
      }
      index++;
      askQuestion();
    });
  } else {
    console.log(`Quiz Over. You scored ${score}/${questions.length}`);
    rl.close();
  }
}

askQuestion();
