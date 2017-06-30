var circs_up = [];
var circs_down = [];
var d = dist(circs_up.x, circs_up.y, circs_down.x, circs_down.y);


function setup() {
  createCanvas(800, 800);
  for ( var i = 0; i < 400; i++) {
    circs_up[i] = new CircleUp();
    circs_down[i] = new CircleDown();
  }
}

function draw() {
  background(51);
  for ( var i = 0; i < circs_up.length && circs_down.length; i++) {
    circs_up[i].move();
    circs_up[i].display();
    circs_down[i].move();
    circs_down[i].display();
  }
/*
  if (d < circs_up.r + circs_down.r) {

  }
*/

}
