///////////////////////////////////////VARIABLES////////////////////////////////////
var mainNum;
var playerNum;
var pic1;
var pic2;
var pic3;
var pic4;
var wins=0;
var loss=0;
///////////////////////////////////////ARRAYS///////////////////////////////////////


///////////////////////////////////////FUNCTIONS////////////////////////////////////
//---------------------------------------------------------  creates a random number to get to  ##2
function getMainNum (){
    console.log("YOU ARE IN GET MAIN NUM");
    mainNum=parseInt(Math.random()*100);
    //console.log("in getMainNum", mainNum);
    if(mainNum>120){
        getMainNum();
    }
    if(mainNum<19){
        getMainNum();
    }
    //console.log("after the checks in getMainNum", mainNum);
    return mainNum;
    // console.log("mainNum", mainNum);
    // console.log("playerNum", playerNum);
}
//---------------------------------------------------------  gives buttons thier values   ##3
function assignNumToPic (pic, mainNum){
    console.log("YOU ARE ASSIGN NUM TO PIC");
    var i=0;
    i=parseInt(1+mainNum*Math.random()*.80);
        //console.log("assignNumToPic i before =", i);
    if (i>12){
        i= assignNumToPic(i,mainNum);
        //console.log("in the if loop", i);
    };
    pic=i;
    return pic;
}
//---------------------------------------------------------  takes the click and adds it to playernum  ##4
function addNum(){
    console.log("YOU ARE IN ADD NUM");
    //console.log("Yup! You did it babe!");
    //console.log($(this).attr("id"));
    switch ($(this).attr("id")){
        case 'img1':
            // console.log("You clicked image 1 babe!");
            playerNum= playerNum+pic1;
            // console.log("playerNum in switch", playerNum)
            break;
        case 'img2':
            // console.log("You did ittttttt pic2!");
            playerNum= playerNum+pic2;
            // console.log("playerNum in switch", playerNum)
            break;
        case 'img3':
            // console.log("guessed what you diddddd pic3");
            playerNum= playerNum+pic3;
            // console.log("playerNum in switch", playerNum)
            break;
        case 'img4':
            // console.log("yup yup yup img 44444");
            playerNum= playerNum+pic4;
            // console.log("playerNum in switch", playerNum)
            break;
    }
    $("#playerNum").empty();
    $("#playerNum").append(playerNum);
    checkValue(playerNum);
    
}
//---------------------------------------------------------  checks the playerNum against mainNum ##5
function checkValue(playerNum){
    console.log("YOU GOT INTO CHECK VALUE)");
    if (playerNum==mainNum){
        alert("You won muthafucker!!!");
        wins++;
        console.log("YOU WON LOOP");
        reset();
    }
    else if (playerNum>mainNum){
        alert("You lost muthafucker :(  ");
        loss++;
        console.log("YOU LOST LOOP");
        reset();
    }
    console.log("done with checkValue");
}
//---------------------------------------------------------  resets the game for another round ## 6
function reset(){
    console.log("YOU GOT INTO RESET");
    $("#mainNum").empty();
    $("#playerNum").empty();
    $("#wins").empty();
    $("#loss").empty();

    playerNum=0; 
    mainNum= getMainNum();
    pic1=assignNumToPic(pic1, mainNum);
    pic2=assignNumToPic(pic2, mainNum);
    pic3=assignNumToPic(pic3, mainNum);
    pic4=assignNumToPic(pic4, mainNum);
        

    $("#mainNum").append(mainNum);
    $("#playerNum").append(playerNum);
    $("#wins").append(wins);
    $("#loss").append(loss);

    $("img").off("click");
    $("img").click(addNum);
    

    console.log("playerNum in reset", playerNum);

    console.log("wins=", wins, "loss", loss);
    console.log("mainNum = ", mainNum);
    console.log("pic1=", pic1);
    console.log("pic2=", pic2);
    console.log("pic3=", pic3);
    console.log("pic4=", pic4);
}
//---------------------------------------------------------  main order of events, starting point  ##1
function startUp(){
    console.log("YOU ARE IN STARTUP");
    playerNum=0;
    mainNum= getMainNum();
    pic1=assignNumToPic(pic1, mainNum);
    pic2=assignNumToPic(pic2, mainNum);
    pic3=assignNumToPic(pic3, mainNum);
    pic4=assignNumToPic(pic4, mainNum);
        
    $("#mainNum").append(mainNum);
    $("#playerNum").append(playerNum);
    $("#wins").append(wins);
    $("#loss").append(loss);
    $("img").click(addNum);
    //$("img").off("click");

    console.log("wins=", wins, "loss", loss);
    console.log("mainNum = ", mainNum);
    console.log("playerNum in startUp", playerNum);
    console.log("pic1=", pic1);
    console.log("pic2=", pic2);
    console.log("pic3=", pic3);
    console.log("pic4=", pic4);
}

