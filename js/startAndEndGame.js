//Mariam Elfeky

// Maryam set game music
$(window).ready(function() {
    $("#bgmusic").get(0).play();
    $('#bgmusic').prop('volume', 0.6);
    $(".imgContainer").on("click",function() {
        var audio = $('#gunsound')[0];
            audio.play();
            
         
      });
});

$(function () {
        //========welcome the player
    let score = $("#scoreNum").text;
    let playerName = localStorage.getItem("name");
    $("h2").text("Welcome " + playerName);
    //======================================= Style for welcome 

    $("h2:last").css("transform", "scale(1.3)");
    $(":button").css("transform", "scale(1.3)");
    //================================12-2 hide progress bar  and score at the beginning
    $("#progressBar").css("display", "none");
    $("#score").css("display", "none");
    //========================================#
}); //load

//Banan )get level from URl
var parameter = location.search.substring(1).split("?");
var temp = parameter[0].split("=");
let level = unescape(temp[1]);
//================================#
//Mariam Elfeky
function EndGameDialog() {
   
    $("#dialog-confirm").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        open: function(e) { 
            //============ set style for dialog 
            $(e.target).parent().css("background-color","rgb(79, 167, 88)");
        },
        close: function(){ //=========direct player to login page
            window.location.replace("./loginPage.html");
        },
        buttons: {
            "New Game": function () { //====== direct player to game page
                window.location.reload();
            },
            Cancel: function () { // ======= direct player to login page
                window.location.replace("./loginPage.html");

            }
        }
    }); // dialog
} //dialog function

// ======== timer of the game
//Mariam Elfeky
let flag = 0;
var Timer=500;
function startGame() {
    if (flag == 0) {
        flag = 1;
        let progressBarWidth = 1;

        movetime = setInterval(progress, Timer);
        function progress() {
            if (progressBarWidth >= 100) {
                clearInterval(movetime);
                clearInterval(blueCreation);
                clearInterval(redCreation);
                clearInterval(blackCreation);
                clearInterval(setBom);
                checkEndGame();
                EndGameDialog();
                flag = 0;

            }
            else {
                progressBarWidth++;
                if (progressBarWidth > 60 && progressBarWidth < 80 ) {
                    $("#timerBar").css("background-color", "yellow");
                }
                else if (progressBarWidth >= 80) {
                    $("#timerBar").css("background-color", "red");
                }
                $("#timerBar").css("width", progressBarWidth + "%");
            }
        }
    }
}
// check winner or loser function
//MariamElfeky
function checkEndGame() {
    score = parseInt($("#scoreNum").text());
    if (score >= 100) {

        $("p").text("Congratelation, You Won");
    }
    else {
        $("p").text("Game Over,New Game?");
    }
}

//Mariam Elfeky
//show progress bar  and score after click and start Game
$(":button[value=Start]").on("click", function () {
    $(this).css("display", "none");
    $("#welcomediv").css("display", "none");
    $("#progressBar").css("display", "");
    $("#score").css("display", "");
   
    
    // banan) show birds
    if (level == "lv2") {
        intervalTime -= 500;
        animateTime -= 5000;
        Timer=400;
       // boom creation 
      setBom = setInterval(createBomb, 11000);
    }
    blueCreation = setInterval(
        function () {

            creatBlueBird();

        }, intervalTime);
     blackCreation = setInterval(
        function () {

            creatBlackBird();

        }, intervalTime * 3);
    redCreation = setInterval(
        function () {

            creatRedBird();


        }, intervalTime * 7);

        startGame();

});


