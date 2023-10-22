let img;
let x=90;
function setup() {
  createCanvas(600, 600,WEBGL);
  img = loadImage('garden1.png');




}
function draw(){
  background(235,211,215);
  noStroke();
  texture(img);
  //sphere(100,24,24);
  push();
  rotateZ(x);
  box(100);
  pop();
  push();
  translate(-100,-100);
  rotateX(x);
  box(100);
  pop();
  push();
  translate(100,100);
  rotateY(x)
  box(100);
  pop();
  x=x+0.01;
//image(img,0,0);

}
