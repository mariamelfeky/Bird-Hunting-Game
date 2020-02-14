//Mariam Elfeky

// get random bomb imgage left position

function randomPosition() {
    let position = Math.floor(Math.random() * (window.innerWidth-60));
    return position;
}// random Left

function animateBom() {
        $(".bombStyle").animate({
            top: window.innerHeight+50,
        }, 10000,function(){
            $(".bombStyle").remove()})
} // bomb animate
// creation of bomb 
function createBomb() {
    this.bomb = $("<img />");
    $(this.bomb).attr("src", "images/bomb.png");
    $(this.bomb).addClass("bombStyle");
    let leftPosition = randomPosition();
    $(this.bomb).css("left", leftPosition);
    $(this.bomb).one( 'click',function(e){
            bomClicked(e,$(this)[0]);});
    $(".imgContainer").append(this.bomb);
   animateBom();


} // bomb creation


//Maryam Gowifel 
// handel bom click
function bomClicked(e,bomObject){
    $(bomObject).before("<div id='bombRange'></div>");
    bombpositionLeft=$(bomObject).offset().left;
    bombpositionTop=$(bomObject).offset().top;
    $("#bombRange").offset({top:bombpositionTop-40,left:bombpositionLeft-40});
  

    //to detect  the zone out of range
upperZone=$("#bombRange").offset().top;
lowerZone=($("#bombRange").offset().top+ $("#bombRange").outerHeight());
leftZone=$("#bombRange").offset().left;
rightZone=($("#bombRange").offset().left + $("#bombRange").outerWidth());

birds=$('[class*="bird"]');
inTheRange=false;
for(i=0;i<birds.length;i++){

    birdPositionLeft=birds[i].offsetLeft;
    birdPositionTop=birds[i].offsetTop;
if(birdPositionLeft+birds[i].offsetWidth>leftZone&&birdPositionLeft<rightZone&&birdPositionTop+birds[i].offsetHeight>upperZone&&birdPositionTop<lowerZone){
       inTheRange=true; 
       birdDie(birds[i]);
   }}
//==================================================
$(bomObject).stop();
$(bomObject).fadeOut(600);
$('#bombRange').fadeToggle(600);

}  









