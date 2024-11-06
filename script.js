const acronymQuiz = [
	{
		question: "¿Cuál es el equipo que más ligas tiene?",
		options: [
			"Atlético de Madrid",
			"Real Madrid",
			"FC Barcelona"
		],
		answer: "Real Madrid"
	},
	{
		question: "¿A qué equipo de 1ª división lo han eliminado de Copa del Rey equipos de 2ª y hasta de 3ª (que mira que hay que ser malo)?",
		options: [
			"Athletic Bilbao", 
			"Girona", 
			"Real Madrid"
		],
		answer: "Real Madrid"
	},
	{
		question: "¿Cuantas veces puede llorar/protestar/insultar al árbitro sin que lo expulsen?",
		options: [
			"Las que quiera",
			"2",
			"Ninguna"
		],
		answer: "Las que quiera"
	},
	{
		question: "Actualmente, ¿quién es el máximo goleador de la liga?",
		options: [
			"Mbappe", 
			"Lewandowski", 
			"Griezmann"
		],
		answer: "Lewandowski"
	},
	{
		question: "¿Por cuántos goles le bailó el barsa al madrid en el bernabéu?",
		options: [
			"1",
			"2",
			"4"
		],
		answer: "4"
	}
	// Add more Questions here
];

//Setup Variables
let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = [];

//Display Question
function displayQuestion() {
	const currentQuestion = acronymQuiz[currentQuestionIndex];
	const questionContainer = document.getElementById("question");
	while (questionContainer.firstChild) {
		questionContainer.removeChild(questionContainer.firstChild);
	}
	
	// Add Question
	document.getElementById("currentQuest").textContent = ` – Question:` + (currentQuestionIndex + 1) + `/` + acronymQuiz.length;
	const newHeading = document.createElement("h2");
	newHeading.id = "heading";
	const container = document.getElementById("question");
	container.appendChild(newHeading);
	document.getElementById("heading").textContent = currentQuestion.question;

	// Add Options
	currentQuestion.options.forEach((option) => {
		const button = document.createElement("button");
		button.textContent = option;
		button.onclick = () => checkAnswer(option);
		questionContainer.appendChild(button);
	});
}

//Check Answer
function checkAnswer(selectedAnswer) {
	const currentQuestion = acronymQuiz[currentQuestionIndex];
	currentQuestion.userAnswer = selectedAnswer;

	if (selectedAnswer === currentQuestion.answer) {
		correctAnswers++;
	} else {
		incorrectAnswers.push({
			question: currentQuestion.question,
			correctAnswer: currentQuestion.answer
		});
	}

	// Add next Question or show result
	currentQuestionIndex++;
	if (currentQuestionIndex < acronymQuiz.length) {
		displayQuestion();
	} else {
		// Show result
		document.getElementById("currentQuest").textContent = "";
		let output = "";
		if (correctAnswers < acronymQuiz.length) {
			output += `<h2>You got ${correctAnswers} out of ` +	acronymQuiz.length + ` correct. </h2><p><strong>Incorrect answers:</strong></p>`;

			incorrectAnswers.forEach((answer) => {
				output += `<p>${answer.question}<br> Correct answers: <strong> ${answer.correctAnswer}</strong></p>`;
			});
			output += `<p class="message">ntp,<a onclick="resetQuiz()">intentalo tra vez si quieres!</a></p>`;
		} else {
			output += `<h2>Perfesto!<br>😉👌</h2>`;
		}
		document.getElementById("question").innerHTML = output;
	}
}

function resetQuiz() {
	currentQuestionIndex = 0;
	correctAnswers = 0;
	incorrectAnswers = [];
	shuffleArray(acronymQuiz);
	displayQuestion();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]]   
 = [array[j], array[i]];
  }
}

displayQuestion();