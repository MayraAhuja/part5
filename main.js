com="";
qom="";
lwy=0;
rwy=0;
lwx=0;
rwx=0;
lws=0;
songStatus="";

function preload() {
    com= loadSound("Bruno Mars - Count on Me(Lyrics).mp3");
     qom= loadSound("Sarah Jeffery - Queen of Mean (From _Descendants 3_).mp3");

}
 

function setup() {
    canvas= createCanvas(600,400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    model= ml5.poseNet(webcam,ml);
    model.on("pose", gotPoses);


}

function ml() {
    console.log("ml"); 
}


function gotPoses(resultsarray) {
    if (resultsarray.length>0) {
        console.log(resultsarray);
        lwy=resultsarray[0].pose.leftWrist.y;
        lwx=resultsarray[0].pose.leftWrist.x;
        lws=resultsarray[0].pose.keypoints[9].score;
    }
}

function draw() {
    image(webcam,0,0,600,400);
    songStatus=com.isPlaying();

    if (lws>0.2) {
        stroke("purple");
        fill("yellow");
        circle(lwx, lwy, 30);
        qom.stop();

        if (songStatus=="false") {
            com.play();
            document.getElementById("song_name").innerHTML="Count on Me is playing right now";
        }
    }
}




