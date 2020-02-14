
let num = 0;
let animateTime = 12000;
let intervalTime = 2000;




let responsiveHieght = window.innerHeight - 150;
//remove birds when clicked

let direction;
let position;

//generate random position and direction
function setPosition() {
    position = Math.floor(Math.random() * (responsiveHieght - 150));
    //know which section of the page the postion in to send it as page rang
    return position;
}

//creat 2 new bird with position from difrrent direction
var creatBlueBird = () => {

    let topObject = setPosition();
    //creat img amnd set values and make them move from left
    birdobjectleft = $(`<img class="blue bird" style="position: absolute;" src="images/blueleft.gif"/> `);
    birdobjectleft.css({ "top": topObject + "px", "left": "-130px" });
    $(".imgContainer").append(birdobjectleft);

    //creat birds and make them move from right
    topObject = setPosition();
    birdobjectRight = $(`<img class="blue bird" style="position: absolute;" src="images/blueright.gif"/> `);
    birdobjectRight.css({ "top": topObject + "px", "left": window.innerWidth + 130 });
    $(".imgContainer").append(birdobjectRight);


    //add events
    $(birdobjectleft).one("click", function () {

        birdDie(this);
    });
    $(birdobjectRight).one("click", function () {

        birdDie(this);
    });
    // move
    moveBirdRight(birdobjectRight);
    moveBirdLeft(birdobjectleft);

}

//create black bird 
var creatBlackBird = () => {

    let topObject = setPosition();
    //creat img amnd set values and make them move from left
    birdobjectleft = $(`<img class="black bird" style="position: absolute;" src="images/black.gif"/> `);
    birdobjectleft.css({ "top": topObject + "px", "left": "-130px" });
    $(".imgContainer").append(birdobjectleft);

    //add events
    $(birdobjectleft).one("click", function () {

        birdDie(this);
    });

    moveBirdLeft(birdobjectleft);

}

//create red bird 
var creatRedBird = () => {

    let topObject = setPosition();

    //creat img amnd set values and make them move from left
    birdobjectleft = $(`<img class="red bird" style="position: absolute;" src="images/red.gif"/> `);
    birdobjectleft.css({ "top": topObject + "px", "left": "-130px" });
    $(".imgContainer").append(birdobjectleft);

    //add events
    $(birdobjectleft).one("click", function () {


        birdDie(this);
    });

    moveBirdLeft(birdobjectleft);

}
//move birds
function moveBirdLeft(imgObj) {



    if (parseInt($(imgObj).css("top")) <= (responsiveHieght * .4) && parseInt($(imgObj).css("top")) > 0) {
        $(imgObj).animate({
            top: "+=400", left: window.innerWidth + 150
        }, animateTime, function () {

            $(imgObj).fadeToggle(500);

        });

    }
    else if (parseInt($(imgObj).css("top")) >= (responsiveHieght * .2) && parseInt($(imgObj).css("top")) < (responsiveHieght * .4)) {

        $(imgObj).animate({
            left: window.innerWidth + 150
        }, animateTime, function () {


            $(imgObj).fadeToggle(500);


        });

    }
    else if (parseInt($(imgObj).css("top")) >= (responsiveHieght * .4) && parseInt($(imgObj).css("top")) < responsiveHieght) {
        $(imgObj).animate({
            top: "-=400", left: window.innerWidth + 150
        }, animateTime, function () {
            $(imgObj).fadeToggle(500);
        });
    }
}

function moveBirdRight(imgObj) {

    $(imgObj).animate({
        left: "-150"
    }, animateTime, function () {
        $(imgObj).fadeToggle(500);
    });


}
//arrow function doesnt work  with this ?????????????


function redClicked() {

    num += 10;
    $("#scoreNum").text(num);
}


function blueClicked() {
    num += 5;
    $("#scoreNum").text(num);
}

function blackClicked() {
    num -= 10;
    $("#scoreNum").text(num);
}

function checkScore()
{
    if(num>=100)
    {
        
        clearInterval(movetime);
        clearInterval(movetime);
        clearInterval(blueCreation);
        clearInterval(redCreation);
        clearInterval(blackCreation);
        $("p").text("Congratelation, You Won");
        EndGameDialog();
    }
}

var birdDie = (imgopject) => {
    console.log(imgopject)
    if ($(imgopject).hasClass("blue")) {
        $(imgopject).attr("src", "images/bluedie.png");
        blueClicked();
        checkScore();
    }

    else if ($(imgopject).hasClass("red")) {
        var audio = $('#redaudio')[0];
        audio.play(); 
        $(imgopject).attr("src", "images/reddie.png");
       
        redClicked();
        checkScore();
    }

    else if ($(imgopject).hasClass("black")) {
        var audio = $('#blackaudio')[0];
        audio.play();
        $(imgopject).attr("src", "images/blackdie.png");
       
        blackClicked();
        checkScore();
    }

    $(imgopject).stop();
    $(imgopject).animate({
        top: "+=700"
    }, 4000, function () {
        $(imgopject).fadeToggle(500);
    });

}



