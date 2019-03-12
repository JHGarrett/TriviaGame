//  variable to store the questions and answer objects

var question = [{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
},
{
    quest: "",
    ans: [""],
    name: "",
    correct: "",
    divClass: "."
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
    
var questionDisplay = function(){
    $(".questions :not('#submitQuiz')").empty();
    // $(".questions").empty();
    for (var i = 0; i < 10; i ++){
        $(".questions").append("<div class='" + questions[i].name + "'></div");
        $(questions[i].divClass).append('<div class ="ques-title">' + question[i].ques + '</div>');
        for (var j = 0; j <= 3; j++){
            $(questions[i].divClass).append('<input type="radio" name+"' + questions[i].name + '" value+"' + questions[i].ans[j] + '"/><label for="' + labels[j] + '">' + questions[i].ans[j] + '</label>');
        } 
        // end for statement
        $(".questions")/append("<hr />");  
    }
}
// end function question display


