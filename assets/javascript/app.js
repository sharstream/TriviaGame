window.onload = function () {

    $("#reset").click(stopwatch.reset);
    $("#start").click(stopwatch.start);

    $('#check').on('click', function() {
        debugger
        clearInterval(question);
        startquestion();
        
        var clicked = $(this); 

        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        var question1 = $('#answer1').val();
        var question2 = $('#answer2').val();
        var question3 = $('#answer3').val();
        var question4 = $('#answer4').val();

        if (question1 === 'Ω(n)') {
            correct++;
        }
        else if (question2 === 'Ω(n)') {
            correct++;
        }
        else if (question3 === 'Ω(n)') {
            correct++;
        }
        else if (question4 === 'O(n log(n))') {
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
    })
};

var questions = ['What is the time complexity for bubble sort JS algorithm?',
                'What is the time complexity for insertion JS algorithm?',
                'What is the time complexity for quick sort JS algorithm?'];
var question;

console.log(questions[0]);
console.log(questions[1]);
console.log(questions[2]);

var count = 0;

function displayquestion() {
    $('#question').html('<p>' + questions[0] + '</p>' +
        '<input type = "radio" id = "ans" name = "answer1" value = "heart" > Ω(n)<br>' +
        '<input type="radio" id="ans" name="answer1" value="hart"> Θ(n log(n))<br>' +
        '<input type="radio" id="ans" name="answer1" value="wash"> Θ(n+k)<br>' +
        '<input type="radio" id="ans" name="answer1" value="north"> O(n)<br>');
}

function nextquestion() {
    count++;

    $('#question').html('<p>'+questions[count]+'</p>'+
        '<input type = "radio" id = "ans" name = "answer' + count +
        ' value = "heart" > Ω(n)<br><input type="radio" id="ans" name="answer' + count +
        ' value="hart"> Θ(n log(n))<br><input type="radio" id="ans" name="answer' + count +
        ' value="wash"> Θ(n+k)<br><input type="radio" id="ans" name="answer' + count +
        ' value="north"> O(n)<br>');

    setTimeout(displayquestion, 1000*60);

    if (count === questions.length) {

        count = 0;
    }
}

function startquestion() {
    question = setInterval(nextquestion, 1000 * 60);
}

var intervalId;
var clockRunning = false;
var stopwatch = {

    time: 0,
    lap: 1,

    reset: function () {

        stopwatch.time = 0;
        stopwatch.lap = 1;

        $('#display').text("00:00");

        $('#laps').text("00:00");
    },

    start: function () {

        clearInterval(intervalId);
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }

    },

    count: function () {

        stopwatch.time++;
        var currentTime = stopwatch.timeConverter(stopwatch.time);
        $('#display').text(currentTime);
    },

    timeConverter: function (t) {
        
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};
