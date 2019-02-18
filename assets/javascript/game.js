///////////////////////////////////////VARIABLES////////////////////////////////////
var mainNum;
var playerNum;
var pic1;
var pic2;
var pic3;
var pic4;


///////////////////////////////////////ARRAYS///////////////////////////////////////


///////////////////////////////////////FUNCTIONS////////////////////////////////////
//---------------------------------------------------------  creates a random number to get to
function getMainNum (){
    mainNum=parseInt(Math.random()*100);
    return mainNum;
    // console.log("mainNum", mainNum);
    // console.log("playerNum", playerNum);
//---------------------------------------------------------  gives buttons thier values 
}
function assignNumToPic (pic, mainNum){
    pic= parseInt(mainNum*Math.random()*.80);
    console.log("pic", pic, "mainNum", mainNum);
    return pic;
}
function addNum(){
//---------------------------------------------------------  main order of events, starting point
}
function startUp(){
    playerNum=0;
    mainNum= getMainNum();
        console.log("mainNum = ", mainNum);
    pic1=assignNumToPic(pic1, mainNum);
        console.log("pic1=", pic1);
    pic2=assignNumToPic(pic2, mainNum);
        console.log("pic2=", pic2);
    pic3=assignNumToPic(pic3, mainNum);
        console.log("pic3=", pic3);
    pic4=assignNumToPic(pic4, mainNum);
        console.log("pic2=", pic4);
    $("#mainNum").append(mainNum);
    $("#playerNum").append(playerNum);
    
}

