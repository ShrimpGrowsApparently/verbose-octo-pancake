noseX = 0;
noseY = 0;

function setup() {
    canvas = createCanvas(500,400); 
    canvas.center();
    camera=createCapture(VIDEO);
    camera.size(500,400);
    camera.hide();
    poseVar = ml5.poseNet(camera , modelLoaded);
    poseVar.on('pose' , gotPoses);
}
function preload() {
    img = loadImage('https://i.postimg.cc/6p5nmkCm/filterlip-removebg-preview.png');
}

function modelLoaded() {
    console.log("Model is initialised.");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

    }
}

function draw() {
    image(camera , 0 , 0 , 500 , 400);
    image(img , noseX -50 , noseY + 20 , 100 ,50);
}