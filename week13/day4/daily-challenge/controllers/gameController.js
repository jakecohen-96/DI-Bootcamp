// Sample emoji data
const emojis = [
    { emoji: "😀", name: "Smile" },
    { emoji: "🐶", name: "Dog" },
    { emoji: "🍎", name: "Apple" },
    { emoji: "🚗", name: "Car" },
    { emoji: "🌟", name: "Star" }
];

// score definded starts at 0
let score = 0;

//  function to get a random emoji and correct choice
exports.getEmojiQuestion = (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const options = [correctEmoji.name];
    while (options.length < 4) {
        const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // shuffle options
    options.sort(() => Math.random() - 0.5);

    res.json({ emoji: correctEmoji.emoji, options });
};

// check answer
exports.checkAnswer = (req, res) => {
    const { emoji, answer } = req.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);

    if (correctEmoji && correctEmoji.name === answer) {
        score++;
        res.json({ correct: true, score, message: "Correct!" });
    } else {
        res.json({ correct: false, score, message: `Incorrect! The correct answer was ${correctEmoji.name}.` });
    }
};

// get current score
exports.getScore = (req, res) => {
    res.json({ score });
};