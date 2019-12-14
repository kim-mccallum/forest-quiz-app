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
        <span class="question-number">${questionNumber+1}</span>/${STORE.length}</li>
        <li class="increment">Score:
        <span class="current-score">${score}</span>
        </li>
    </ul>
    </section>`
}

function generateQuizContainerHTML() {
    return `<section class='quiz-container'>
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


function processFeedback(selectedOption){
    // grade the answer
    // pull the answer to display as feedback
    let dispAnswer = STORE[questionNumber].displayAnswer;
    let citation = STORE[questionNumber].source;

    if (selectedOption === undefined || selectedOption === null) {
        alert("Please select an answer. It's okay to guess!")
        return;  
    }
    // compare answer to correct answer 
    let msg = "Sorry, that's incorrect";
    //set this to negative
    let icon = `<i class="fa fa-times"></i>`
    
    if (selectedOption === STORE[questionNumber].answer){
         // Add a point to score
        score = ++score ;
        msg = "That's correct!";
        // update icon to positive
        icon = '<i class="fa fa-check"></i>'
    }
    
    // render the feedback
    let feedbackHTML = `<form class='next-form'><fieldset>
                            <legend>${icon} ${msg}</legend>

                            <p>${dispAnswer}</p>
                            <a href="${citation}" target="_blank">Learn more</a>

                        </fieldset>
                            <button type="submit" class="next-button button">Next</button>
                        </form>` ;

    // update the question number only after next is clicked - this is moved to after they click next, not after they submit answer
    ++questionNumber;
    updateScoreInfo();
    $('.quiz-container').html(feedbackHTML);
}

// Runs when you get to the end of the list
function generateSummary(){
    // Calculate final score
    let finalScore = (score/STORE.length) * 100;
    // return HTML with a 'Congrats message' and 'Restart' button
    return `<fieldset>
                <legend>Quiz summary:</legend>

                <h1>Congratulations, you have completed the quiz!</h1>
                <h1 class="final-score">You scored: ${finalScore}%</h1>
             
            </fieldset>
            <button type="submit" class="restart-button button">Restart Quiz</button>` ;
}
    
function renderSummary(){
    // Remove the score tracker
    $('.score-tracker').empty();
    // Display the results
    $('.quiz-container').html(generateSummary());
}

// Handle the form submission and grading
function handleAnswerSubmit() {
    // Listen for click on submit with event delegation!
    $('.quiz-container').on('submit', '.quiz-form', function(e) {
        e.preventDefault();
        // capture the input answer
        const selectedOption = $(e.currentTarget).find("input[name=option]:checked").val();
        // send that answer to the grading function or next etc.
        processFeedback(selectedOption)
    });
}

function handleNextQuestion() {
    // Listen for click on submit with event delegation!
    $('.quiz-container').on('submit', '.next-form', function(e) {
        e.preventDefault();
        updateQuestionNumber()
        // Check question number if not done the continue
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
        //Start in the quiz
        handleStart();
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

