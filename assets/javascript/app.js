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
    
