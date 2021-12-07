status ="";
objects = [];
function preload(){
    video = createVideo('video.mp4');
}

function setup(){
canvas = createCanvas(480,380);
canvas.center();
video.hide();
}

function start(){
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById('status').innerHTML="Status:Detecting objects";
}

function draw(){
image(video,0,0,480,380);
if(status !=""){
    objectDetector.detect(video,gotResult);
    for(i=0; i < objects.length; i++){
        document.getElementById("status").innerHTL = "Status:Object Detected";
        document.getElementById('number_of_objects').innerHTML = "Number of Objects detected are :" + object.length;

        fill("#851744");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + "" + percent + "%" + objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#851744");
        rect(objects[i].x,objects[i].x,objects[i].width,objects[i].height);
        }
    }
}
function gotResult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    objects=results;
}
}
function modelLoaded(){
    console.log('Model loaded!');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}