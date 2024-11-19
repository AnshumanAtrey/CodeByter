require("dotenv").config(); // Load environment variables from .env file

const apiKey = process.env.API_KEY; // Access the API key

const targetUrl = "https://letsupgrade.coderbyte.com/candidate-assessment";
const targetClass = "open_ended_ques";
const displayDuration = 60000;

async function fetchResponse(question) {
  const response = await fetch(apiKey, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question }),
  });
  return response.json();
}

async function checkUrlAndFetchQuestions() {
  if (window.location.href.includes(targetUrl)) {
    const questions = Array.from(
      document.querySelectorAll(`li.${targetClass} h3 + pre`)
    ).map((el) => el.innerText);

    await displayResponses(questions);
  }
}

async function displayResponses(questions) {
  for (const question of questions) {
    const answer = await fetchResponse(question);
    showAnswer(answer);
  }
}

function showAnswer(answer) {
  const answerBox = document.createElement("div");
  answerBox.style.position = "fixed";
  answerBox.style.bottom = "20px";
  answerBox.style.right = "20px";
  answerBox.style.backgroundColor = "white";
  answerBox.style.border = "1px solid black";
  answerBox.style.padding = "10px";
  answerBox.innerText = answer;
  document.body.appendChild(answerBox);

  setTimeout(() => {
    document.body.removeChild(answerBox);
  }, displayDuration);
}

// Set an interval to check the URL and fetch questions
setInterval(checkUrlAndFetchQuestions, 60000);
