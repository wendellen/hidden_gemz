let butterfly;
let rhinestones = [];
let poem = ["flowers", "that", "fade", "into", "bloom"];
let rhinestones_displayed = 0;

function preload() {
  bg = loadImage('assets/checkerboard-perspective.jpg');
  rhinestone0 = loadImage('assets/rhinestone0.png');
  rhinestone1 = loadImage('assets/rhinestone1.png');
  rhinestone2 = loadImage('assets/rhinestone2.png');
  rhinestone3 = loadImage('assets/rhinestone3.png');
  rhinestone4 = loadImage('assets/rhinestone4.png');

}

class rhinestoneBloom {
  constructor(x, y, image, word) {
    this.x = x
    this.y = y
    this.image = image
    this.word = word
    this.angle = 0
  }

  bloom() {
    alert("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ refresh to restart rhinestone!")
  }
}

function setup() {

  preload()
  let images = [rhinestone0, rhinestone1, rhinestone2, rhinestone3, rhinestone4];

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  butterfly = createImg('assets/butterfly.gif');
  mouseX = -1000
  mouseY = -1000

  num_rhinestones = images.length
  for (var i=0; i<num_rhinestones; i++) {
    var r = new rhinestoneBloom(random(windowWidth-400), random(windowHeight-400), images[i], poem[i]);
  rhinestones.push(r)

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  background(bg);

  butterfly.position(mouseX-270, mouseY-270);

  image(rhinestones[0].image, rhinestones[0].x, rhinestones[0].y);

}

function mouseClicked() {
  if ((mouseX >= rhinestones[rhinestones_displayed].x) && (mouseX <= rhinestones[rhinestones_displayed].x + 900) && (mouseY >= rhinestones[rhinestones_displayed].y) && (mouseY <= rhinestones[rhinestones_displayed].y + 900)) {
    rhinestones[rhinestones_displayed].bloom();

  }
}
