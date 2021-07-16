console.log("Your external JavaScript file is linked 🎉");

// Questions for quiz

var myQuestions = [
	{
		question: "What is a county in GA?",
		answers: {
			a: 'Austin',
			b: 'Fulton',
			c: 'Los Angeles'
		},
		correctAnswer: 'b'
	},
	{
		question: " Blue and yellow makes what color?",
		answers: {
			a: 'Pink',
			b: 'Orange',
			c: 'Green'
		},
		correctAnswer: 'c'
	},
    {
		question: " 6 x 3 =?",
		answers: {
			a: '18',
			b: '188',
			c: '1888'
		},
		correctAnswer: 'a'
	}

];

// container that populates in window

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}