///////////////////////////////////////VARIABLES////////////////////////////////////
var mainNum;
var playerNum;
var pic1;
var pic2;
var pic3;
var pic4;


///////////////////////////////////////ARRAYS///////////////////////////////////////


///////////////////////////////////////FUNCTIONS////////////////////////////////////
//---------------------------------------------------------  creates a random number to get to  ##2
function getMainNum (){
    mainNum=parseInt(Math.random()*100);
    return mainNum;
    // console.log("mainNum", mainNum);
    // console.log("playerNum", playerNum);
}
//---------------------------------------------------------  gives buttons thier values   ##3
function assignNumToPic (pic, mainNum){
    pic= parseInt(mainNum*Math.random()*.80);
    console.log("pic", pic, "mainNum", mainNum);
    return pic;
}
//---------------------------------------------------------  takes the click and adds it to playernum  ##4
function addNum(){
    console.log("Yup! You did it babe!");
    console.log($(this).attr("id"));
    switch ($(this).attr("id")){
        case 'img1':
            console.log("You clicked image 1 babe!");
            playerNum= playerNum+pic1;
            console.log("playerNum in switch", playerNum)
            break;
        case 'img2':
            console.log("You did ittttttt pic2!");
            playerNum= playerNum+pic2;
            console.log("playerNum in switch", playerNum)
            break;
        case 'img3':
            console.log("guessed what you diddddd pic3");
            playerNum= playerNum+pic3;
            console.log("playerNum in switch", playerNum)
            break;
        case 'img4':
            console.log("yup yup yup img 44444");
            playerNum= playerNum+pic4;
            console.log("playerNum in switch", playerNum)
            break;
    }
    $("#playerNum").empty();
    $("#playerNum").append(playerNum);
    checkValue(playerNum);
}
//---------------------------------------------------------  checks the playerNum against mainNum ##5
function checkValue(){
    console.log("got into checkValue()")
}
//---------------------------------------------------------  main order of events, starting point  ## 1
function startUp(){
    playerNum=0;
    mainNum= getMainNum();
        //console.log("mainNum = ", mainNum);
    pic1=assignNumToPic(pic1, mainNum);
        //console.log("pic1=", pic1);
    pic2=assignNumToPic(pic2, mainNum);
        //console.log("pic2=", pic2);
    pic3=assignNumToPic(pic3, mainNum);
        //console.log("pic3=", pic3);
    pic4=assignNumToPic(pic4, mainNum);
        //console.log("pic2=", pic4);
    $("#mainNum").append(mainNum);
    $("#playerNum").append(playerNum);
    $("img").click(addNum);
    console.log("playerNum in startUp", playerNum);
    
}

