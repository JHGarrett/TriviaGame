//  variable to store the questions and answer objects
$(".submitTheButton").hide();
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
    quest: "What year did the US enter WW2?",
    ans: ["1944", "1942", "1974", "1943"],
    name: "wwii",
    correct: "1944",
    divClass: ".wwii"
},
{
    quest: "How fast could a T-Rex run?",
    ans: ["13mph", "45mph", "63mph", "7mph"],
    name: "trex",
    correct: "45mph",
    divClass: ".trex"
},
{
    quest: "In the book Moby Dick what was the captains name? ",
    ans: ["Ahab", "Jonathan", "Ishmael", "George"],
    name: "ahab",
    correct: "Ahab",
    divClass: ".ahab"
},
{
    quest: "Who wrote the book Gulliver's Travel?",
    ans: ["Jonathan Swift", "Jules Vern", "James Avery", "Tom Clancey"],
    name: "jSwift",
    correct: "Jonathan Swift",
    divClass: ".jSwift"
},
{
    quest: "What movie won the Oscar for best picture in 2008?",
    ans: ["The Bourne Ultimatum", "No Country for Old Men", "The Golden Compass", "Jarassic Park"],
    name: "oscar",
    correct: "No Country for Old Men",
    divClass: ".oscar"
},
{
    quest: "In what year was Nintendo founded?",
    ans: ["1889", "1963", "1942", "1981"],
    name: "nintendo",
    correct: "1889",
    divClass: ".nintendo"
},
{
    quest: "What is the capital of Uzbekistan?",
    ans: ["Moscow", "Uzbek", "Mosul", "Tashkent"],
    name: "tashkent",
    correct: "Tashkent",
    divClass: ".tashkent"
},
{
    quest: "What is the worlds fastest flying Bird?",
    ans: ["Peregrine Falcon", "Golden Eagle", "Common Swift", "Albatross"],
    name: "pFalcon",
    correct: "Peregrine Falcon",
    divClass: ".pFalcon"
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
    $(".submitTheButton").show();
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
            $(".questions").hide();
            $(".submitTheButton").hide();

            var correctAnswers = 0;
            var incorrectAnswers = 0;
            for (var i = 0; i < 10; i++){
                if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct){
                    correctAnswers++;
                }
                // end of if statement
                else {
                    incorrectAnswers++;
                };
                // end of else statement
            }
            // end of for loop

            // will open a new div letting user know that there is no more time and display # of correct and incorrect
            $("#timeUpCorrect").append(correctAnswers);
            $("#timeUpIncorrect").append(incorrectAnswers);
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
    $(".questions").hide();
    $(".submitTheButton").hide();

    })
};

// shows the user the result if they click the submit button
var gradeQuiz = $("#submitQuiz").on("click", function() {
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    for (var i = 0; i < 10; i++) {
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } //end if
        else {
            incorrectAnswers++;
        };  //end else
    };  //end for

    countdown();
    $(".container").fadeOut(1000);
    $("#answerScreen").show();
    $("#correctScreen").append(correctAnswers);
    $("#incorrectScreen").append(incorrectAnswers);

}); // end gradeQuiz
