//  variable to store the questions and answer objects

var questions = [{
    quest: "What programming language is names after a TV show?",
    ans: ["Ruby", "Python", "Java", "Fortran"],
    name: "python",
    correct: "Python",
    divClass: ".python"
},
{
    quest: "Who is the origninal host of The Price is Right?",
    ans: ["Bob Hope", "Pat Sejack", "Alex Trebek", "Bob Barker"],
    name: "bBarker",
    correct: "Bob Barker",
    divClass: ".bBarker"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester3",
    correct: "Tester",
    divClass: ".Tester8"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester4",
    correct: "Tester",
    divClass: ".Tester7"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester5",
    correct: "Tester",
    divClass: ".Tester6"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester6",
    correct: "Tester",
    divClass: ".Tester5"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester7",
    correct: "Tester",
    divClass: ".Tester4"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester8",
    correct: "Tester",
    divClass: ".Tester3"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester9",
    correct: "Tester",
    divClass: ".Tester2"
},
{
    quest: "test",
    ans: ["test", "Tester"],
    name: "tester0",
    correct: "Tester",
    divClass: ".Tester1"
}
] 
// end of questions

var labels = ["one", "two", "three", "four"];

// funtion start game. 
var startGame = $("#startBtn").on("click", function(){
    $(this).parent().hide();
    $(".container").show();
    countdown(60);
    questionDisplay();
});
// end of start game function
    
var questionDisplay = function() { 
    $(".questions :not('#submitQuiz')").empty();
    // $(".questions").empty();
    for (var i = 0; i < 10; i ++){
        $(".questions").append("<div class='" + questions[i].name + "'></div");
        $(questions[i].divClass).append('<div class ="ques-title">' + questions[i].quest + '</div>');        
        for (var j = 0; j <= 3; j++){
            $(questions[i].divClass).append('<input type="radio" name="' + questions[i].name + '" value="' + questions[i].ans[j] + '"/><label for="' + labels[j] + '">' + questions[i].ans[j] + '</label>');
        } 
        // end for statement
        $(".questions").append("<hr />");  
    }
}
// end function question display

// function for the countdown timer
var countdown = function(seconds) {
    var timer = setInterval(function() {
        seconds = seconds - 1;
        $("#timeLeft").html(seconds);
        // ends the timer
        // displays a timeout box if the time = 0
        if (seconds <= 0){
            $(".container").fadeOut(500);
            var correctAnswers = 0;
            var incorretAnswers = 0;
            for (var i = 0; i < 10; i++){
                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct){
                    correctAnswers++;
                }
                // end of if statement
                else {
                    incorretAnswers++;
                };
                // end of else statement
            }
            // end of for loop

            // will open a new div letting user know that there is no more time and display # of correct and incorrect
            $("#timeUpCorrect").append(correctAnswers);
            $("#timeUpIncorrect").append(incorretAnswers);
            $("#noMoreTime").fadeIn(1000).show();
            // end of the time div

            // clears the timer out
            clearInterval(timer);
            return;

        }
    }, 1000);
    //ends the timer function

    // clear timer on submit click
    $("#submitQuiz").on("click", function() {
    clearInterval(timer);
    })
};

// shows the user the result if they click the submit button
var gradeQuiz = $("#submitQuiz").on("click", function() {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    for (var i = 0; i < 10; i++) {
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } //end if
        else {
            wrongAnswers++;
        };  //end else
    };  //end for

    countdown();
    $(".container").fadeOut(500);
    $("#answerScreen").show();
    $("#correctScreen").append(correctAnswers);
    $("#incorrectScreen").append(incorretAnswers);

}); // end gradeQuiz
