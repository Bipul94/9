img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload(){
  world_start = loadSound("world_start.wav");
  ball_touch = loadSound("ball_touch_paddel.wav");
  ball_missed = loadSound("missed.wav");
}

function setup(){
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600, 300);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPses);
}

function modelLoaded(){
  console.log('Model Loaded!');
}