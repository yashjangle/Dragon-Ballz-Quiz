const readlineSync = require("readline-sync");
const chalk = require("chalk");
let score = 0;
const nameInput = readlineSync.question("Please tell us your name?\n")
console.log(chalk.bold.bgRedBright.underline.black(`Welcome ${nameInput} to ARE YOU A Dragon Ballz Fan?\n`))
console.log(`Rules & Instructions: 
 1) ${nameInput}, there are 10 questions.
 2) You will get 2 points on the right answer.
 3) You will lose 1 point on the wrong answer\n`);

console.log(chalk.underline.cyanBright(`lets start, ${nameInput}!\n`))

const quesAns = [{
  question: `When was Goku born?
  a: A.D.737
  b: A.D.756
  c: A.D.731
  d: A.D.1956\n`,
  answer: `a`
}, {
  question: `Who is the 7th god of destruction?
  a: Broly
  b: Beerus
  c: Whis
  d: Krillin\n`,
  answer: `b`
}, {
  question: `What is Frieza's new form?
  a: Silver
  b: Golden
  c: Bronze
  d: Copper\n`,
  answer: `b`
}, {
  question: `Who is the new villain for the Future Trunks arc?
  a: Black
  b: Majin Buu
  c: Frieza
  d: Beerus\n`,
  answer: `a`
}, {
  question: `Who was Goku fighting When he first turned super saiyan?
  a: Nappa
  b: Cell
  c: Vegeta
  d: Frieza\n`,
  answer: `d`
}, {
  question: `How many dragonballs are there?
  a: eight
  b: six
  c: nine
  d: seven\n`,
  answer: `d`
}, {
  question: `What is Goku's most powerful form?
  a: super saiyan god
  b: Super saiyan three
  c: super saiyan four
  d: super saiyan two\n`,
  answer: `a`
}, {
  question: `Who is the strongest?
  a: Frieza
  b: Cell 
  c: Raditz
  d: Garlic Jr\n`,
  answer: `b`
}, {
  question: `Who is Pan?
  a: Trunk's daughter
  b: Goku's daughter
  c: Gohan's daughter
  d: Goten's daughter\n`,
  answer: `c`
}, {
  question: `What is Raditz's relation to Goku?
  a: younger brother
  b: older brother
  c: cousin
  d: father\n`,
  answer: `b`
}]

function play(question, answer) {
  const quizInput = readlineSync.question(question).toLowerCase();

  const quizAns = answer;

  if (quizInput === quizAns) {
    console.log(`You entered ${quizInput}`)
    console.log(chalk.bold.greenBright(`Right Answer!`))
    score = score + 2;
  }
  else {
    console.log(`You entered ${quizInput}`)
    console.log(chalk.bold.red(`Wrong Answer!`))
    console.log(`The correct answer is ${quizAns}`)
    score = score - 1;
  }
  if (score < 0) {
    score = 0
  }
  console.log(chalk.underline.bold.blueBright(`Score: ${score}\n`))
}

for (let i = 0; i < quesAns.length; i++) {
  play(quesAns[i].question, quesAns[i].answer);
}

console.log(`\n`)

console.log(chalk.bold.yellowBright(`Congratulations! Your total score is ${score}.`))
const remark = score === 20 ? `Remark: You are a perfect Dragon Ballz Fan!😲` : score < 20 && score > 10 ? `Remark: You do know quite a good deal about Dragon Ballz!🤠` : `Remark: You don't know much about Dragon Ballz.🙁`;
console.log(chalk.bold.yellowBright.underline(remark));