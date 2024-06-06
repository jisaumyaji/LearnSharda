// Define questions and answers
const questions = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: ["font-color", "text-color", "color", "background-color"]
    },
    {
        question: "What does CSS stand for?",
        answers: ["Colorful Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answers: ["<style>", "<script>", "<css>", "<link>"]
    },
    {
        question: "Which JavaScript function is used to write a message to the browser's console?",
        answers: ["console.log()", "console.write()", "console.output()", "console.print()"]
    }
];

let currentQuestion = 0;


// Function to display current question and answer options
function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerBtnsElement = document.getElementById("answer-btns");
    questionElement.textContent = currentQuestion+1 + ". " + questions[currentQuestion].question;

    // Clear previous answer buttons
    answerBtnsElement.innerHTML = "";

    // Create new answer buttons
    questions[currentQuestion].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = answer;
        button.setAttribute("onclick", `selectAnswer(${index})`);
        answerBtnsElement.appendChild(button);
    });
}

// Initialize userAnswers array with default values
let userAnswers = Array(questions.length).fill(-1);

// Function to handle user's answer selection
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    // Get all answer buttons
    const answerButtons = document.querySelectorAll(".btn");
    // Reset background color and text color of all buttons
    answerButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
    // Set background color of selected button to black
    answerButtons[answerIndex].style.backgroundColor = "black";
    answerButtons[answerIndex].style.color = "white";
}

// Function to display score and tips
function displayResult(totalScore, tips) {
    // Remove the survey section
    document.querySelector('.survey').remove();
    // Create elements to display results
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    const scoreElement = document.createElement("p");
    scoreElement.textContent = "Total Score: " + totalScore;
    const tipsElement = document.createElement("p");
    tipsElement.textContent = "Tips: " + tips;
    // Append elements to result container
    resultContainer.appendChild(scoreElement);
    resultContainer.appendChild(tipsElement);
    // Append result container to main section
    document.querySelector('.main').appendChild(resultContainer);
}

// Function to calculate the total score based on user's answers
function calculateScore(answers) {
    let score = 0;
    answers.forEach(answer => {
        if (answer !== -1) {
            switch (answer) {
                case 0:
                    score += 0;
                    break;
                case 1:
                    score += 1;
                    break;
                case 2:
                    score += 2;
                    break;
                case 3:
                    score += 3;
                    break;
                default:
                    console.log("Invalid answer choice.");
            }
        }
    });
    return score;
}


// Function to handle user's answer selection
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    // Get all answer buttons
    const answerButtons = document.querySelectorAll(".btn");
    // Reset background color and text color of all buttons
    answerButtons.forEach(button => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
    // Set background color of selected button to black
    answerButtons[answerIndex].style.backgroundColor = "black";
    answerButtons[answerIndex].style.color = "white";
}


// Function to display score and time upon completing the survey
// Function to move to the next question or display results
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // Survey completed, calculate score and display tips
        const totalScore = calculateScore(userAnswers);
        console.log("Total Score:", totalScore);
        // Display total score and tips on the page
        displayResult(totalScore, tips);
    }
}

// Function to display score and tips
function displayResult(totalScore, tips) {
    // Remove the survey section
    document.querySelector('.survey').remove();
    // Create elements to display results
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    const scoreElement = document.createElement("p");
    scoreElement.innerHTML = "<strong>Total Score: </strong>" + totalScore;

    const tipsElement = document.createElement("ul");
    tipsElement.innerHTML = "<strong>Tips:</strong>";
    tips.forEach(tip => {
        const tipItem = document.createElement("li");
        tipItem.textContent = tip.trim();
        tipsElement.appendChild(tipItem);
    });

    // Append elements to result container
    resultContainer.appendChild(scoreElement);
    resultContainer.appendChild(tipsElement);
    // Append result container to main section
    document.querySelector('.main').appendChild(resultContainer);
}


// Display the first question when the page loads
displayQuestion();
