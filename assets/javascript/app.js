window.onload = function () {

    $('#check').on('click', function() {
        // debugger    
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
        clearInterval(intervalId);
        startquestion();
    })
};

var question_count = 0;
var intervalId;
var questions = ['What is the time complexity for bubble sort JS algorithm?',
                'What is the time complexity for insertion JS algorithm?',
                'What is the time complexity for quick sort JS algorithm?'];

console.log(questions[0]);
console.log(questions[1]);
console.log(questions[2]);



function displayquestion() {
    $('#question').html('<p>' + questions[0] + '</p>' +
        '<input type = "radio" id = "ans" name = "answer1" value = "Ω(n)" > Ω(n)<br>' +
        '<input type="radio" id="ans" name="answer1" value="Θ(n log(n))"> Θ(n log(n))<br>' +
        '<input type="radio" id="ans" name="answer1" value="Θ(n+k)"> Θ(n+k)<br>' +
        '<input type="radio" id="ans" name="answer1" value="O(n)"> O(n)<br>');
}

function nextquestion() {
    count++;

    $('#question').html('<p>' + questions[question_count]+'</p>'+
        '<input type = "radio" id = "answer' + question_count +
        ' value = "Ω(n)">Ω(n)<br><input type="radio" id="answer' + question_count +
        ' value="Θ(n log(n))">Θ(n log(n))<br><input type="radio" id="answer' + question_count +
        ' value=Θ(n+k)">Θ(n+k)<br><input type="radio" id="answer' + question_count +
        ' value="O(n)">O(n)<br>');

    $('#after_submit').css({'visibility':'hidden'});

    setTimeout(startquestion, 1000*60);

    if (count === questions.length) {

        count = 0;
    }
}

function startquestion() {
    question = setInterval(nextquestion, 60000);
}

var count = 60;

var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }

    document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
}
