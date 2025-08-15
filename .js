/*
In this lab, you'll build a quiz game using JavaScript arrays and objects.

You'll also practice using functions to randomly select a question and an answer from an array and compare them.
*/

let questions = [ // Array of question objects 
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["2", "3", "4"],
    answer: "4",
  },

   {
    category: "Math",
    question: "What is 1 + 2?",
    choices: ["1", "3", "4"],
    answer: "3",
  },
  
   {
    category: "Math",
    question: "What is 0 + 1?",
    choices: ["1", "2", "3"],
    answer: "1",
  },

   {
    category: "Math",
    question: "What is 0 + 2?",
    choices: ["2", "3", "4"],
    answer: "2",
  },

   {
    category: "Animals",
    question: "What is a dog?",
    choices: ["Canine", "Feline", "Bird"],
    answer: "Canine",
  }
]

function getRandomQuestion(questions) { // Randomly select a question
  return questions[Math.floor(Math.random() * questions.length)]; 
}

function getRandomComputerChoice(choices) { // Randomly select a choice from the question's choices
  return choices[Math.floor(Math.random() * choices.length)]; 
}

function getResults(question, compAnswer) { // Compare the computer's answer with the correct answer
  if (question.answer === compAnswer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
