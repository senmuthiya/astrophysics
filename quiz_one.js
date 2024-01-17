var quizBank = [
    {
        question: "1. Mercury does not have any moons or rings.",
        answers: {
            a: ' Yes ', 
            b: ' No '
            
        },
        correctAnswer: 'a'
    },

    {
        question: "2. Uranus makes one trip around the Sun every 100 Earth years.",
        answers: {
            a: ' Yes ',
            b: ' No'
        },
        correctAnswer: 'b'
    },

    {
        question: "3. The Sun is composed of hydrogen (70%) and Helium (28%).",
        answers: {
            a: ' Yes ',
            b: ' No '
        },
        correctAnswer: 'a'
    },

    {
        question: "4. One day on Venus is longer than one year.",
        answers: {
            a: ' Yes ',
            b: ' No '
         
        },
        correctAnswer: 'a'
    },

    {
        question: "5. Jupiter has 67 Moons",
        answers: {
            a: ' Yes ',
            b: ' No '
            
        },
        correctAnswer: 'a'
    },

    {
        question: "6. Mars is a terrestrial planet with a thin atmosphere composed primarily of oxygen.",
        answers: {
            a: ' Yes ',
            b: ' No ',
           
        },
        correctAnswer: 'b'
    },

    {
        question: "7. Neptune is the Coldest Planet in the Solar System.",
        answers: {
            a: ' Yes ',
            b: ' No ',
           
        },
        correctAnswer: 'a'
    },

    {
        question: "8. Saturn is the least dense planet in the Solar System.",
        answers: {
            a: ' Yes ',
            b: ' No ',
         
        },
        correctAnswer: 'a'
    },

    {
        question: "9. The Earth is the densest planet in the Solar System.",
        answers: {
            a: ' Yes ',
            b: ' No ',
          
        },
        correctAnswer: 'a'
    }



];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(quizBank, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                  '<label>'
                        + '&nbsp; <input id="userChecked" type="radio" name="question'+i+'" value="'+letter+'">'
                      
                        // + letter + ': '
                        + questions[i].answers[letter]
                   
                    + '</label>'
                    // '<label>'
                    //     + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    //     + letter + ': '
                    //     + questions[i].answers[letter]
                    // + '</label>'
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


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                
                answerContainers[i].style.color = 'lightgreen';
              
        
                

            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total

        // resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

        alert( 'Quiz Score: ' + numCorrect + ' out of ' + questions.length)
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}