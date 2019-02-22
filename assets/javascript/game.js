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
    if(mainNum>120){
        getMainNum();
    }
    if(mainNum<19){
        getMainNum();
    }
    return mainNum;

    //CHECKING IF STUFF WORKS
        //console.log("in getMainNum", mainNum);
        //console.log("after the checks in getMainNum", mainNum)
        // console.log("mainNum", mainNum);
        // console.log("playerNum", playerNum);
}
//---------------------------------------------------------  gives buttons thier values   ##3
function assignNumToPic (pic, mainNum){
    console.log("YOU ARE ASSIGN NUM TO PIC");
    var i=0;
    i=parseInt(1+mainNum*Math.random()*.80);
    if (i>12){
        i= assignNumToPic(i,mainNum);
    };
    pic=i;
    return pic;
}
    //CHECKING IF STUFF WORKS
        //console.log("assignNumToPic i before =", i);
        //console.log("in the if loop", i);
//---------------------------------------------------------  takes the click and adds it to playernum  ##4
function addNum(){
    switch ($(this).attr("id")){
        case 'img1':
            playerNum= playerNum+pic1;
            break;
        case 'img2':
            playerNum= playerNum+pic2;
            break;
        case 'img3':
            playerNum= playerNum+pic3;
            break;
        case 'img4':
            playerNum= playerNum+pic4;
            break;
    }
    $("#playerNum").empty();
    $("#playerNum").append(playerNum);
    checkValue(playerNum);
    
    //CHECKING IF STUFF WORKS
        // console.log("YOU ARE IN ADD NUM");
        // console.log("You clicked image 1 babe!");
        // console.log("You did ittttttt pic2!");
        // console.log("playerNum in switch", playerNum)
        //console.log("Yup! You did it babe!");
        // console.log("playerNum in switch", playerNum)
        //console.log($(this).attr("id"));
        // console.log("guessed what you diddddd pic3");
        // console.log("playerNum in switch", playerNum);
        // console.log("yup yup yup img 44444");
        // console.log("playerNum in switch", playerNum)
}
//---------------------------------------------------------  checks the playerNum against mainNum ##5
function checkValue(playerNum){
    if (playerNum==mainNum){
        alert("You did it!! I am so proud of you.");
        wins++;
        reset();
    }
    else if (playerNum>mainNum){
        alert("Ummmm I don't know how to tell this to you, but you lost.");
        loss++;
        reset();
    }
    // CHECKING IF STUFF WORKS
        // console.log("YOU GOT INTO CHECK VALUE)");
        // console.log("YOU WON LOOP");
        // console.log("YOU LOST LOOP");
        // console.log("done with checkValue");
}
//---------------------------------------------------------  resets the game for another round ## 6
function reset(){
    
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
    
    // CHECKING IF STUFF WORKS
        // console.log("YOU GOT INTO RESET");
        // console.log("playerNum in reset", playerNum);
        // console.log("wins=", wins, "loss", loss);
        // console.log("mainNum = ", mainNum);
        // console.log("pic1=", pic1);
        // console.log("pic2=", pic2);
        // console.log("pic3=", pic3);
        // console.log("pic4=", pic4);
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
    
    // CHECKING IF STUFF WORKS
        // console.log("wins=", wins, "loss", loss);
        // console.log("mainNum = ", mainNum);
        // console.log("playerNum in startUp", playerNum);
        // console.log("pic1=", pic1);
        // console.log("pic2=", pic2);
        // console.log("pic3=", pic3);
        // console.log("pic4=", pic4);
}

