const wordPlaceholder = document.querySelector("#word")


const words = [
    {
        word: "table",
    },
    {
        word: "lion",
    },
    {
        word: "apple",
    },
    {
        word: "ocean",
    },
    {
        word: "guitar",
    },
    {
        word: "mountain",
    },
    {
        word: "sunshine",
    },
    {
        word: "butterfly",
    },
    {
        word: "candle",
    },
    {
        word: "diamond",
    }
];

const shuffleWords = (word) => {
    // Convert the word into an array of characters
    const wordArray = word.split('');

    // console.log(word);

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; // Swap elements
    }

    // Join the shuffled array back into a string
    return wordArray.join('');
};

// Example usage:
const word = shuffleWords("table");
wordPlaceholder.textContent = word;