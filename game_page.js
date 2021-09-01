player1 = localStorage.getItem("p1name");
player2 = localStorage.getItem("p2name");
player1_score = 0;
player2_score = 0;
document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;
document.getElementById("player1_name").innerHTML = player1 + " :";
document.getElementById("player2_name").innerHTML = player2 + " :";
document.getElementById("question").innerHTML = "question turn-" + player1;
document.getElementById("answer").innerHTML = "answer turn-" + player2;
function send() {
    var a = document.getElementById("word").value;
    word = a.toLowerCase();
    a = word.charAt(1);
    console.log(a);
    var letterinmiddle = Math.floor(word.length / 2);
    var b = word.charAt(letterinmiddle);
    var letteratlast = word.length - 1;
    var c = word.charAt(letteratlast);
    var firstreplace = word.replace(a, "_");
    var secondreplace = firstreplace.replace(b, "_");
    var thirdreplace = secondreplace.replace(c, "_");
    console.log(thirdreplace);
    var questionword = "<h4 id='questionword'>" + thirdreplace + "</h4>";
    var textbox = "<br><input type='text' class='form-control' id='answerword'>";
    var button = "<br><button class='btn btn-info' onclick='check()'> check() </button>";
    var row = questionword + textbox + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "Player1";
answer_turn = "Player2";

function check() {
    answer = document.getElementById("answerword").value;
    var finalanswer = answer.toLowerCase();
    if (finalanswer == word) {
        if (answer_turn = "Player1") {
            player1_score = player1_score + 1;
            document.getElementById("p1score").innerHTML = player1_score;
        }
        else {
            player2_score++;
            document.getElementById("p2score").innerHTML = player2_score;
        }
    
    }
    if (question_turn=="Player2")
{
    question_turn="Player1";
    answer_turn="Player2";
    document.getElementById("question").innerHTML ="question turn:"+player1;
    document.getElementById("answer").innerHTML ="answer turn:"+player2;
}
else {
    question_turn="Player2";
    answer_turn="Player1";
    document.getElementById("question").innerHTML = "question turn:"+player2;
    document.getElementById("answer").innerHTML = "answer turn:"+player1;

}
document.getElementById("output").innerHTML = "";
}
