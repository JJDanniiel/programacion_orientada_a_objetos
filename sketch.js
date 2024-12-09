let particulas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);
  let nuevaParticula = new Particula(mouseX, mouseY);
  particulas.push(nuevaParticula);

  for (let i = 0; i < particulas.length; i++) {
    particulas[i].update();
    particulas[i].display();
  }

  // for (let i = 0; i < particulas.length; i++) {
  //   if (particulas[i].estaViva) {
  //   } else {
  //     particulas.splice(i, 1);
  //   }
  // }
  particulas = particulas.filter((pelota) => pelota.estaViva);

  noFill();
  stroke(252, 99, 145);
  strokeWeight(1);

  for (let i = 0; i < particulas.length - 1; i++) {
    line(
      particulas[i].posX,
      particulas[i].posY,
      particulas[i + 1].posX,
      particulas[i + 1].posY
    );
  }

  console.log(particulas.length);
}
