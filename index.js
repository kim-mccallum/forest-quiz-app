//////////////// Global variables //////////////
let score = 0;
let questionNumber = 0;

//////////////// Functions //////////////

// question number and score - this remains throughout the quiz
function renderScoreTracker(){
    $('main').html(generateScoreTrackerHTML())
}
    
// Creates the HTML to display the score and question number
function generateScoreTrackerHTML() {
    return `<section class="score-tracker">
    <ul>
        <li class="increment">Question:
        <span class="question-number">${questionNumber+1}</span>/${STORE.length}</li>
        <li class="increment">Score:
        <span class="current-score">${score}</span>
        </li>
    </ul>
    </section>`
}

// render quiz container - this will change: starts with a question, then is swapped with feedback HTML, then is swapped again 
function renderQuizContainer(){
    $('main').append(generateQuizContainerHTML())
}

function generateQuizContainerHTML() {
    return `<section class='quiz-container'>
            </section>`
}

// Get a question from STORE and get attributes and create options text
function generateQuestionHTML() {
    let question = STORE[questionNumber].question;
    let options = STORE[questionNumber].options;

    let optionsText = ''
    for (i=0 ; i<options.length; i++){
        optionsText += `<div class="option"><input type="radio" name="option" value="${options[i]}">
        <label for="option">${options[i]}</label></div>`
    }

    // Return HTML with question and options
    return `<form class='quiz-form'><fieldset>
                <legend>${question}</legend>

                ${optionsText}

            </fieldset>
            <button type="submit" class="submit-button button">Submit</button>
            </form>` 
}

// Calls generateQuizContainerHTML to just renders the question
function renderCurrentQuestion() {
    $('.quiz-container').html(generateQuestionHTML()) // the stuff inside the form
}

function updateQuizInfo() {
    updateQuestionNumber();
    updateScoreInfo(); 
}

function updateQuestionNumber() {
    $('.question-number').text(questionNumber+1);    
}

function updateScoreInfo() {
    $('.current-score').text(score);
}

// Grades the answer and produces feedback - citation (source link) and additional text (display answer) are produced
function processFeedback(selectedOption){
    let dispAnswer = STORE[questionNumber].displayAnswer;
    let citation = STORE[questionNumber].source;

    if (selectedOption === undefined || selectedOption === null) {
        alert("Please select an answer. It's okay to guess!")
        return;  
    }
    // Create initial feedback message and icon
    let msg = "Sorry, that's incorrect";
    let icon = `<i class="fa fa-times"></i>`
    // Compare selected to actual answer, update score, message and icon
    if (selectedOption === STORE[questionNumber].answer){
        score = ++score ;
        msg = "That's correct!";
        icon = '<i class="fa fa-check"></i>'
    }
    
    // create the feedback HTML
    let feedbackHTML = `<form class='next-form'><fieldset>
                            <legend>${icon} ${msg}</legend>

                            <p>${dispAnswer}</p>
                            <a href="${citation}" target="_blank">Learn more</a>

                        </fieldset>
                            <button type="submit" class="next-button button">Next</button>
                        </form>` ;

    // Update the question number, score info and render the feedback
    ++questionNumber;
    updateScoreInfo();
    $('.quiz-container').html(feedbackHTML);
}

// Runs when you get to the end of the question list - Returns HTML with score
function generateSummary(){
    let finalScore = (score/STORE.length) * 100;
    return `<fieldset>
                <legend>Quiz summary:</legend>

                <h1 class="final-score">You have completed the quiz!</h1>
                <h1 class="final-score">Score: ${score} out of ${STORE.length} correct (${finalScore}%)</h1>
             
            </fieldset>
            <button type="submit" class="restart-button button">Restart Quiz</button>` ;
}

// render quiz summary info
function renderSummary(){
    $('.score-tracker').empty();
    $('.quiz-container').html(generateSummary());
}

// Handle the form submission and grading - capture selected option and pass it to process feedback
function handleAnswerSubmit() {
    $('.quiz-container').on('submit', '.quiz-form', function(e) {
        e.preventDefault();
        const selectedOption = $(e.currentTarget).find("input[name=option]:checked").val();
        processFeedback(selectedOption)
    });
}

// Handle next button logic
function handleNextQuestion() {
    $('.quiz-container').on('submit', '.next-form', function(e) {
        e.preventDefault();
        updateQuestionNumber()
        if (questionNumber<STORE.length){
            renderCurrentQuestion()  
        }
        else {
            renderSummary();
        }
    });
}

function restartQuiz() {
    // listen for click on restart button
    $('main').on('click', '.restart-button', function(e) {
        e.preventDefault();
        // Reset globals
        questionNumber = 0;
        score = 0;
        // Run all the functions again
        renderScoreTracker()
        renderQuizContainer()
        renderCurrentQuestion()
        handleAnswerSubmit();
        handleNextQuestion();
        restartQuiz(); 
    });
}
    
// Run almost everything
function handleStart() {
    $('.start-button').on('click', function(e) {
        e.preventDefault()
        
        renderScoreTracker()
        renderQuizContainer()
        renderCurrentQuestion()
        handleAnswerSubmit();
        handleNextQuestion();
        restartQuiz(); 
    })
}

$(handleStart())

