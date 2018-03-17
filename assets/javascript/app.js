//Using few source code from the web site: https://www.sitepoint.com/simple-javascript-quiz/#demo
$(document).ready(function() {
    // global vars
    var question_count = 3;
    var intervalId;
    var question_number = 0;
    var count = 3;
    var timer_running = false;
    var optcount = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // var counter = setInterval(countdown, 1000); //1000 will  run it every 1 second

    //objects
    const myFirstQuestion = {
        question: "1. What is the Great Red Spot?",
        answers: {
            a: "A smudge on the Hubble telescope",
            b: "A storm on Saturn",
            c: "A storm on Jupiter"
        },
        correctAnswer: 'c'
    }

    const mySecondQuestion = {
        question: "2. How much would a 150-pound person weigh on Mars?",
        answers: {
            a: "174 pounds",
            b: "102 pounds",
            c: "57 pounds"
        },
        correctAnswer: 'c'
    }

    const myThirdQuestion = {
        question: "3. About how long is a day on Saturn?",
        answers: {
            a: "10 hours and 47 minutes",
            b: "11 hours and 47 minutes",
            c: "12 hours and 47 minutes"
        },
        correctAnswer: 'a'
    }

    const myFourQuestion = {
        question: "4. The temperature on this planet's surface is hot enough to melt lead. Which one is it?",
        answers: {
            a: "Venus",
            b: "Earth",
            c: "Mars"
        },
        correctAnswer: 'a'
    }

    const myFiveQuestion = {
        question: "5. Which planet has the highest mountain and deepest valley in the solar system?",
        answers: {
            a: "Venus",
            b: "Pluto",
            c: "Earth"
        },
        correctAnswer: 'b'
    }

    var questions = [myFirstQuestion, mySecondQuestion, myThirdQuestion, myFourQuestion, myFiveQuestion];

    // debugger
    // setQuiz();
    function countdown() {
        // debugger

        reloadNextQuestion(timer_running);

        var timer = setTimeout(countdown, 1000);
        
        if (count < 0) {
            // debugger

            // clearTimeout(timer);

            if (timer === 7) {
                count = 3
            }

            if (timer === 11) {
                count = 3
            }

            if (timer === 15) {
                count = 3
            }

            if (timer === 19) {
                count = 3
            }

            if (timer > 20) {
                count = 0;
                answeredQuestion();
                $('.question').text("");
                $('#prompt1').text("Quiz is Done!!!!") 
                $('#prompt2').text("Click on Check button to display your final result: ");
            }

            // countdown();
        }

        $('#timer').html('Time Remaining: ' + count + ' Seconds.');

        count--;

        //increse the array index to jump to the another question
        //remove the current question and answers and paste a new one   
    }

    function createRadioElement(elem, label,checked) {

        optcount = optcount + 1;

        var id = 'option' + optcount;

        var answer = 'answer' + optcount;

        $('.options').append($('<input />', {
            'class': id,
            'type': 'radio',
            'name': answer,
            'value': '1'
        }));

        $('.options').append('<label for="' + id + '">'
            + label + '</label><br />');
    }

    function reloadNextQuestion(load) {
        
        if (!load && question_number < questions.length) {
            $('.question').text(questions[question_number].question);
            // $('.option1').after(questions[question_number].answers.a);
            // $('.option2').after(questions[question_number].answers.b);
            // $('.option3').after(questions[question_number].answers.c);
            optcount = 0;

            createRadioElement($('.options'), questions[question_number].answers.a);

            createRadioElement($('.options'), questions[question_number].answers.b);

            createRadioElement($('.options'), questions[question_number].answers.c);
            
            timer_running = true;

            question_number++;
        }
        else if(count === 0){

            timer_running = false;

            $('.question').text("");

            $('.options').children().remove();
        }
        // countdown();
    }

    function redirect(number) {
        count = number;
        countdown();
    }

    redirect(3);

    function answeredQuestion(){

        var answer1 = ', ' + $('input[name="question1"]:checked').parent().text();
        var answer2 = ', ' + $('input[name="question2"]:checked').parent().text();
        var answer3 = ', ' + $('input[name="question3"]:checked').parent().text();
        var answer4 = ', ' + $('input[name="question4"]:checked').parent().text();
        var answer5 = ', ' + $('input[name="question5"]:checked').parent().text();

        // debugger
        if (answer1 === questions[0].correctAnswer) {
            correct++;
        }
        else if (answer2 === questions[1].correctAnswer) {
            correct++;
        }
        else if (answer3 === questions[2].correctAnswer) {
            correct++;
        }
        else if (answer4 === questions[3].correctAnswer) {
            correct++;
        }
        else if (answer5 === questions[4].correctAnswer) {
            correct++;
        }
        else {
            incorrect++;
        }

        $('.progress').text(+correct+"/5");
    }

    $('#check').on('click', function(event) {
        // debugger    
        event.preventDefault();
        answeredQuestion();
        
        $('#number_correct').text('Correct: '+correct);
        $('#number_incorrect').text('Incorrect: '+incorrect);
        $('#number_unanswered').text('Unanswered: '+unanswered);
        $('#after_submit').css({'visibility':'visible'});
        
    });

    $('#next').on('click', function(){
        alert("You want to move to the next page?");
        clearInterval(intervalId);
        reloadNextQuestion();
    })
});