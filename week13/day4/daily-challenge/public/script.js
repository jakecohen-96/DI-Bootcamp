// Elements in the DOM
const emojiElement = document.getElementById("emoji");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const answerForm = document.getElementById("answerForm");

let currentEmoji = ""; // To keep track of the current emoji being guessed

// Function to fetch a new emoji question
async function getNewQuestion() {
    try {
        const response = await fetch("/api/question");
        const data = await response.json();

        // Update the DOM with the new emoji and options
        currentEmoji = data.emoji;
        emojiElement.textContent = currentEmoji;
        optionsContainer.innerHTML = "";

        data.options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => submitAnswer(option);
            optionsContainer.appendChild(button);
        });

        feedbackElement.textContent = "";
    } catch (error) {
        feedbackElement.textContent = "Error loading question.";
        console.error(error);
    }
}

// Function to submit the player's answer
async function submitAnswer(answer) {
    try {
        const response = await fetch("/api/answer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ emoji: currentEmoji, answer })
        });

        const result = await response.json();
        
        // Update feedback and score
        feedbackElement.textContent = result.message;
        scoreElement.textContent = result.score;

        // Load a new question
        setTimeout(getNewQuestion, 2000); // Wait for 2 seconds before loading a new question
    } catch (error) {
        feedbackElement.textContent = "Error submitting answer.";
        console.error(error);
    }
}

// Initialize the game by loading the first question
getNewQuestion();