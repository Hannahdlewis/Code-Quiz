var startButton = document.getElementById('start-btn')
var scoreButton = document.getElementById('high-scores')
var questionBoxE1 = document.getElementById('question-box')
var questionE1 = document.getElementById('question')
var answerBtnE1 = document.getElementById('answer-choice')
var timerDisplay = document.getElementById('time-left')

var isWin = false;
var timer;
var timerCount;
var availQuestions = [];
var currentQuestionIndex = 0;

var initials;
var highScore;

function startGame() {
	isWin = false
	startButton.classList.add('hide')
	availQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionBoxE1.classList.remove('hide')
	setNextQuestion()
	timerCount = 30;
	startTimer()	
}

function setNextQuestion() {
	resetContainer()
	showQuestion(availQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionE1.innerText = question.question.question.answers.forEach(answer => {
		var button = document.createElement('button')button.innerText = answer.textbutton.classList.add('btn')
	if (answer.correct) {
		button.dataset.correct = answer.correct
	}
	button.addEventListener('click', selectAnswer)
	answerBtnE1.appendChild(button)
	})
}

function resetContainer() {
	while (answerBtnE1.firstChild) {
		
	}
}