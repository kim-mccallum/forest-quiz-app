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

// Maybe not necessary
function updateQuizInfo(){
    // increment the question number
    // questionNumber = questionNumber++;
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
        optionsText += `<input type="radio" name="option" value="${options[i]}">
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
function generateFeedback(){
        // capture answer
        let selectedOption = $("input[name=option]:checked").val();
        // pull the answer to display as feedback
        let dispAnswer = STORE[questionNumber].displayAnswer;

        if (!selectedOption) {
            alert("Please select an answer. It's okay to guess!")
        }
        // compare answer to correct answer 
         if (selectedOption === STORE[questionNumber].answer){
            console.log("correct!");
            // Add a point to score
            score = ++score ;
            return `<fieldset>
                        <legend><i class="fa fa-check"></i><span>Correct!</span></legend>

                        <p>${dispAnswer}</p>

                    </fieldset>
                         <button type="submit" class="next-button button">Next</button>` ;
        }
        else {
            return `<fieldset>
                        <legend><i class="fa fa-times"></i><span>Sorry, that's incorrect.</span></legend>

                        <p>${dispAnswer}</p>

                    </fieldset>
                         <button type="submit" class="next-button button">Next</button>` ;
        }
        
}

function renderFeedback(){
    // generate HTML with info: correct, detailed answer, source and next button
    $('.quiz-form').html(generateFeedback());
    // Increment question
    ++questionNumber;
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

function handleQuizFeedback() {
    // Listen for click on submit with event delegation!
    $('main').on('click', '.submit-button', function(e) {
        e.preventDefault();

        renderFeedback()
    });
}

function handleNextQuestion() {
    // Listen for click on submit with event delegation!
    $('main').on('click', '.next-button', function(e) {
        e.preventDefault();
        // Remove feedback HTML
        // renderScoreTracker()
        // Check question number if not done the continue
        // renderQuizContainer()
        // renderCurrentQuestion()        
    // })
}

function handleSummary() {

        // Remove feedback HTML
        // renderScoreTracker()
        // renderQuizContainer()
        // renderCurrentQuestion()        
    // });
}

function restartQuiz() {
    // listen for click on restart button
        //Can I just refresh the page?
}
    
handleStart()
handleQuizFeedback() 
handleNextQuestion()
