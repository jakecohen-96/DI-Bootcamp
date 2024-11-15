const express = require('express');
const router = express.Router();

// Hard-coded questions and answers
const triviaQuestions = [
   { question: "What is the capital of France?", answer: "Paris" },
   { question: "Which planet is known as the Red Planet?", answer: "Mars" },
   { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// tracking current question and score
let currentQuestionIndex = 0;
let score = 0;

// GET - start the quiz and display the first question
router.get('/quiz/start', (req, res) => {
   currentQuestionIndex = 0;
   score = 0;
   res.json({ question: triviaQuestions[currentQuestionIndex].question });
});

// POST - submit an answer and receive feedback, then move to the next question
router.post('/quiz/answer', (req, res) => {
   const { answer } = req.body;
   if (answer === triviaQuestions[currentQuestionIndex].answer) {
       score++;
       res.json({ message: "Correct!" });
   } else {
       res.json({ message: `Incorrect! The correct answer was ${triviaQuestions[currentQuestionIndex].answer}.` });
   }

   currentQuestionIndex++;

   // Check if there are more questions
   if (currentQuestionIndex < triviaQuestions.length) {
       res.json({ nextQuestion: triviaQuestions[currentQuestionIndex].question });
   } else {
       res.json({ message: `Quiz complete! Your final score is ${score}/${triviaQuestions.length}.` });
   }
});

// GET - Display the user's final score at the end of the quiz
router.get('/quiz/score', (req, res) => {
   res.json({ finalScore: score });
});

module.exports = router;