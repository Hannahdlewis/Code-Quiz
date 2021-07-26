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
}