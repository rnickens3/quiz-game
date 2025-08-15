# JavaScript Quiz Game

A **JavaScript quiz game** that selects a random question from a set, randomly picks an answer for the computer, and checks if the answer is correct.  
This project demonstrates:
- Arrays and objects
- Random selection with `Math.random()`
- Function creation and reuse
- Conditional logic with `if` statements

---

## How It Works
1. A random question is selected from the `questions` array.
2. The computer randomly chooses one of the possible answers.
3. The program checks if the computer’s choice matches the correct answer.
4. The result is displayed in a readable message.

---

## Example Code
```javascript
function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResults(question, compAnswer) {
  if (question.answer === compAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
