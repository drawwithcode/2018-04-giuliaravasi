function preload(){
  // put preload code here
}

var balls = [];
var myBall = [];
var secondBall = [];
var thirdBall = [];
var fourthBall = [];
var v = 0;
var infoText = 'Try to black out all the balls by clicking on them!';
var infoText2 = 'But be careful, the balls are 28 and you only have 28 clicks. Take your time!'
var counter = 28;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);

  var ballNumber = 7;
  for(var i = 0; i < ballNumber; i++) {
    var myBall = new Ball(random(0, width), random(0, height), 35);
    //to add a variable to the list(in this case balls is the list)

    myBall.speed = random(1, 4);
    myBall.color = color(random(255), random(255), random(255));
    balls.push(myBall);

    var secondBall = new Ball(random(0, width), random(0, height), 45);
    secondBall.speed = random(1, 4);
    secondBall.color = color(random(255), random(255), random(255));
    balls.push(secondBall);

    var thirdBall = new Ball(random(0, width), random(0, height), 60);
    thirdBall.speed = random(1, 4);
    thirdBall.color = color(random(255), random(255), random(255));
    balls.push(thirdBall);

    var fourthBall = new Ball(random(0, width), random(0, height), 80);
    fourthBall.speed = random(1, 4);
    fourthBall.color = color(random(255), random(255), random(255));
    balls.push(fourthBall);
  }

  // push();
  // noStroke();
  // fill(180);
  // rect(0, height - 100, width, 100);
  // pop();
}

function mousePressed() {
  for(var i = 0; i < balls.length; i++) {
    balls[i].clicked();

  } counter = counter - 1;
}

// function Count() {
//   clicks = clicks - 1;
//   fill(0);
//   textSize(23);
//   text(clicks, 20, 20);
// }

function draw() {
  background(255);
  for(var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
  push();
  fill(0);
  stroke(3);
  textSize(14);
  textAlign(CENTER);
  text(infoText, windowWidth/2, windowHeight - 100);
  pop();

  push();
  fill(0);
  stroke(3);
  textSize(14);
  textAlign(CENTER);
  text(infoText2, windowWidth/2, windowHeight - 75);
  pop();

  pop();
  fill('black');
  textSize(27);
  textAlign(CENTER);
  text(counter, windowWidth/2, windowHeight - 30);
  push();
}

//my object
function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.radius = _diameter/2;
  this.color = 'blue';
  this.speed = 2;

  var yDir = 1;
  var xDir = 1;

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);

    if(v == 28 || counter == 0){
      push();
      fill('#D8BFD8');
      rect(0, 0, windowWidth, windowHeight);

      //LEFT
      noStroke();
      fill('#E0B22C');
      arc(width/2 - 80, height/2 - 60, 50, 70, 30, 210, PIE);
      //head
      noStroke();
      fill('#E0B22C');
      arc(width/2, height/2 - 100, 100, 100, 90, 270, PIE);
      //leg
      stroke('#CC6C31');
      strokeWeight(4);
      line(width/2 - 20, height/2 + 80, width/2 - 20, height/2 + 100);
      //foot
      noStroke();
      fill('#CC6C31');
      triangle(width/2 - 20, height/2 + 100, width/2 - 35, height/2 + 110, width/2 - 5, height/2 + 110);
      //body
      noStroke();
      fill('#E0B22C');
      arc(width/2, height/2, 170, 170, 90, 270, PIE);
      //tummy
      noStroke();
      fill('#EDBC2F');
      arc(width/2, height/2, 110, 110, 90, 270, PIE);
      //eye
      noStroke();
      fill('black');
      ellipse(width/2 - 20, height/2 - 115, 15);
      //light
      noStroke();
      fill('white');
      ellipse(width/2 - 23, height/2 - 118, 5);
      //beak
      noStroke();
      fill('#CC6C31');
      triangle(width/2, height/2 - 100, width/2, height/2 - 80, width/2 - 15, height/2 - 90);

      //RIGHT
      noStroke();
      fill('#ffc73d');
      arc(width/2 + 80, height/2 - 60, 50, 70, 340, 150, PIE);
      //head
      noStroke();
      fill('#ffc73d');
      arc(width/2, height/2 - 100, 100, 100, 270, 90, PIE);
      //leg
      stroke('#CC6C31');
      strokeWeight(4);
      line(width/2 + 20, height/2 + 80, width/2 + 20, height/2 + 100);
      //foot
      noStroke();
      fill('#CC6C31');
      triangle(width/2 + 20, height/2 + 100, width/2 + 35, height/2 + 110, width/2 + 5, height/2 + 110);
      //body
      noStroke();
      fill('#ffc73d');
      arc(width/2, height/2, 170, 170, 270, 90, PIE);
      //tummy
      noStroke();
      fill('#fed164');
      arc(width/2, height/2, 110, 110, 270, 90, PIE);
      //eye
      noStroke();
      fill('black');
      ellipse(width/2 + 20, height/2 - 115, 15);
      //light
      noStroke();
      fill('white');
      ellipse(width/2 + 17, height/2 - 118, 5);
      //beak
      noStroke();
      fill('#F07F39');
      triangle(width/2, height/2 - 100, width/2, height/2 - 80, width/2 + 15, height/2 - 90);

      //EGG
      stroke('black');
      fill('black');
      arc(width/2 + 150, height/2 + 50, 200, 200, 0, 180, PIE);
      stroke('black');
      fill('black');
      triangle(width/2 + 50, height/2 + 50, width/2 + 50, height/2 + 25, width/2 + 75, height/2 + 50);
      stroke('black');
      fill('black');
      triangle(width/2 + 75, height/2 + 50, width/2 + 100, height/2 + 25, width/2 + 125, height/2 + 50);
      stroke('black');
      fill('black');
      triangle(width/2 + 125, height/2 + 50, width/2 + 150, height/2 + 25, width/2 + 175, height/2 + 50);
      stroke('black');
      fill('black');
      triangle(width/2 + 175, height/2 + 50, width/2 + 200, height/2 + 25, width/2 + 225, height/2 + 50);
      stroke('black');
      fill('black');
      triangle(width/2 + 225, height/2 + 50, width/2 + 250, height/2 + 25, width/2 + 250, height/2 + 50);

      //PIECES OF EGG
      noStroke();
      fill('black');
      triangle(width/2 - 125, height/2 + 90, width/2 - 85, height/2 + 80, width/2 - 100, height/2 + 110);
      noStroke();
      fill('black');
      triangle(width/2 - 100, height/2 + 70, width/2 - 140, height/2 + 65, width/2 - 115, height/2 + 60);
      noStroke();
      fill('black');
      triangle(width/2 - 180, height/2 + 30, width/2 - 195, height/2 + 10, width/2 - 170, height/2);
      noStroke();
      fill('black');
      triangle(width/2 - 190, height/2 + 60, width/2 - 200, height/2 + 40, width/2 - 210, height/2 + 40);
      pop();

      push();
      fill(0);
      textSize(19);
      textAlign(CENTER);
      text('If you were able to win, congratulations!', width/2, height/2 + 250);
      pop();

      push();
      fill(0);
      textSize(19);
      textAlign(CENTER);
      text("If not, nice try, here's a cute reward anyways!", width/2, height/2 + 280);
      pop();

      push();
      infoText.splice();
      pop();
    }
  }


  this.clicked = function() {
    var d = dist(mouseX, mouseY, this.x, this.y);
    if(d < this.radius) {
      this.color = color(0);
        v = v + 1;
        ;
    }
  }

  this.move = function() {
    this.x += this.speed * xDir;
    this.y += this.speed * yDir;

    if(this.y > height || this.y < 0) {
      yDir = yDir * -1;
    }
    if(this.x > width || this.x < 0) {
      xDir = xDir * -1;
    }
  }
}
