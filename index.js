//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//      FUNCTIONS
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Global variables to store the quiz score and question number information
let score = 0;
let questionNumber = 0;

//////////////// Functions //////////////

// render quiz info 
function renderScoreTracker(){
    // question number and score - this part never leaves 
    $('main').html(generateScoreTrackerHTML())
}
    
// Simply creates the HTML to display the score and question number
function generateScoreTrackerHTML() {
    return `<section class="score-tracker">
    <ul>
        <li class="increment">Question:
        <span class="question-number">${questionNumber}</span>/10</li>
        <li class="increment">Score:
        <span class="current-score">${score}</span>
        </li>
    </ul>
    </section>`
}

function updateQuizInfo(){
    // increment the question number
    questionNumber = questionNumber++;
    // increment th score
    // if the answer was correct, add 1, else do nothing
}

function generateQuizContainerHTML() {
    return `<section class='quiz-container'>
                <form class='quiz-form'>
                </form>
            </section>`
}

// render quiz container
// question form with question and answer options - this will change
// it will start with a question, then the HTML inside will be swapped with feedback HTML, that will be swapped again 
function renderQuizContainer(){
    // question number and score - this part never leaves  
    $('main').append(generateQuizContainerHTML())
}

// Get a question from STORE
function generateQuestionHTML() {
    // Get the question from STORE and get attributes
    let question = STORE[questionNumber].question;
    let options = STORE[questionNumber].options;

    let optionsText = ''
    for (i=0 ; i<options.length; i++){
        optionsText += `<input type="radio" name="option">
        <label for="option">${options[i]}</label><br/>`
    }

    // Return HTML with question and options
    return `<fieldset>
                <legend>${question}</legend>

                ${optionsText}

            </fieldset>
            <button type="submit" class="submit-button button">Submit</button>` 
}

// Calls generateQuizContainerHTML to just renders the question
function renderCurrentQuestion() {
    $('.quiz-form').html(generateQuestionHTML()) // the stuff inside the form
}

// Evaluate answers and provides feedback
function handleAnswerSubmit(){
    // $('.submit-button').on('submit', function(e) {
    //     event.preventDefault();
    // capture answer
        
        let selectedOption = $("input[name=option]:checked").val();
        if (!selectedOption) {
            alert("Please select an answer. It's okay to guess!")
        }
    // compare answer to correct answer 
        let questionObj = STORE[questionNumber]
    // create correct/incorrect variable
    // generate HTML with info: correct, detailed answer, source and next button
    // });
}

function handleNextClick() {
    
}
    
// cycle begins: render current question, get submit input (their answer), grade their answer, render feedback, update score and current question, next click renders next question
    
// handleStart
// render quiz info and quiz container
function handleStart() {
    $('.start-button').on('click', function(e) {
        e.preventDefault()
        
        renderScoreTracker()
        renderQuizContainer()
        renderCurrentQuestion()
    })
}

function handleQuiz() {
    // Add event delegation!
    $('.submit-button').on('submit', function(e) {
        e.preventDefault();

        debugger;
        handleAnswerSubmit();
        //evaluate answer
        // render feedback
        // update questions
        // render current feedback with 'next' button
    });
}
    
handleStart()
handleQuiz() 