
difference=0;
rightWristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,490);
    canvas.position(560,150);


    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function draw(){
    document.getElementById("text_side").innerHTML=difference+"px"
    background('F90093');
    fill('#F90093');
    text('Medhansh', 50, 350);
    textSize(difference);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX=" + leftWristX+"rightWristX"+rightWristX+"difference="+difference);
    }

}