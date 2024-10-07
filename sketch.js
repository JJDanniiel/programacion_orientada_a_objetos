let posX, posY;
let velX, velY;
let diametro;
let rad;
let fondo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fondo = random(255), random(255), random(255);
  rad = ceil(random(10, 50));
  diam = rad * 2;

  posX = random(rad, width - rad);
  posY = random(rad, height - rad);

  //velX = random(-10, 10);
  //velY = random(-10, 10);
  velX = 5;
  velY = 5;
}

function draw() {
  background(fondo);
  fill(255);
  noStroke();

  posX += velX;
  posY += velY;

  if (posX > width - rad || posX < rad) {
    velX *= -1;
    fondo = color(random(255), random(255), random(255));
  }

  if (posY > height - rad || posY < rad) {
    velY *= -1;
    fondo = color(random(255), random(255), random(255));
  }

  circle(posX, posY, diam);
}
