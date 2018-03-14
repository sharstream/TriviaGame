//Using few source code from the web site: https://www.sitepoint.com/simple-javascript-quiz/#demo
$(document).ready(function() {
    // global vars
    var question_count = 3;
    var intervalId;
    var question_number = 0;
    var count = 5;
    var timer_running = false;

    var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

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
        setTimeout(countdown, 1000);
        $('#timer').html('Time Remaining: ' + count + ' Seconds.');
        count--;
        var hide = reloadNextQuestion(true);
        if (count < 0) {
            
            count = 0;
            question_number++;
            if (question_number === 1 && hide) {
                $('.question2').show();
                $('.question1').hide();
                $('.question3').hide();
                $('.question4').hide();
                $('.question5').hide();
            }
            if (question_number === 2 && hide) {
                $('.question3').show();
                $('.question1').hide();
                $('.question2').hide();
                $('.question4').hide();
                $('.question5').hide();
            }
            if (question_number === 3 && hide) {
                $('.question4').show();
                $('.question1').hide();
                $('.question2').hide();
                $('.question3').hide();
                $('.question5').hide();
            }
            if (question_number === 4 && hide) {
                $('.question5').show();
                $('.question1').hide();
                $('.question2').hide();
                $('.question3').hide();
                $('.question4').hide();
            }
        }
    }

    function reloadNextQuestion(reload) {
        // count = number
        $('.question2').hide();
        $('.question3').hide();
        $('.question4').hide();
        $('.question5').hide();
        return reload;
        // $('.question').html("<p>" + questions[0].question + "</p>");
        // var answer1 = $('.answers').html("<input type = 'radio' id = 'ans' name = 'answer1' value = " + questions[0].answers.a + " >");
        // var answer2 = $('.answers').html("<input type = 'radio' id = 'ans' name = 'answer1' value = " + questions[0].answers.b + " >");
        // var answer3 =  $('.answers').html("<input type = 'radio' id = 'ans' name = 'answer1' value = " + questions[0].answers.c + " >");
        // var answer4 =  $('.answers').html("<input type = 'radio' id = 'ans' name = 'answer1' value = " + questions[0].answers.d + " >");

        // countdown();
    }

    function redirect(number) {
        count = number;
        countdown();
    }

    redirect(3);

    $('#check').on('click', function() {
        // debugger    
        var clicked = $(this); 
        // setResult();
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        var question1 = $('#answer1').val();
        var question2 = $('#answer2').val();
        var question3 = $('#answer3').val();
        var question4 = $('#answer4').val();
        // debugger
        if (question1 === 'Ω(n)' && $('#answer1').is(':checked')) {
            correct++;
        }
        else if (question2 === 'Θ(n log(n))' && $('#answer2').is(':checked')) {
            correct++;
        }
        else if (question3 === 'Θ(n+k)' && $('#answer3').is(':checked')) {
            correct++;
        }
        else if (question4 === 'O(n)' && $('#answer4').is(':checked')) {
            correct++;
        }
        else {
            incorrect++;
        }
        
        $('#number_correct').text('Correct: '+correct);
        $('#number_incorrect').text('Incorrect: '+incorrect);
        $('#number_unanswered').text('Unanswered: '+unanswered);
        $('#after_submit').css({'visibility':'visible'});

        clicked.addClass('.sms').html('<p>' + ' You got correct: ' + correct +'</p><br><p>'+
            ' You got incorrect: ' + incorrect +'</p><br><p>'+
            ' You got unanswered: '+unanswered+'</p><br>').css({ 'font-size': '20px', 'color': 'red' });

        console.log('correct: '+correct);
        console.log('incorrect: ' + incorrect);
        console.log('unanswered: ' + unanswered);
    });

    $('#next').on('click', function(){
        alert("You want to move to the next page?");
        clearInterval(intervalId);
        reloadNextQuestion();
    })
});