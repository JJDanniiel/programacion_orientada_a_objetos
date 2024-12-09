class Particula {
  //este método se ejecuta automáticamente
  //   constructor(_nombre) {
  //     this.nombre = _nombre;
  //   }
  constructor(_x, _y) {
    this.posX = _x;
    this.posY = _y;
    this.estaViva = true;
    //tVida es el tiempo que tiene de vida
    this.tVida = round(random(50, 200));
    this.tamano = 1;
    this.opacidad = 100;
  }

  update() {
    // this.tVida -= 1;
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }

    if (this.posY < this.tamano / 2) {
      this.estaViva = false;
      return;
    }

    this.opacidad -= 0.5;
    this.posY -= 2;
    this.posX += random(-10, 10);
    this.tamano += 0.5;
  }

  display() {
    fill(255, this.opacidad);
    noStroke();
    circle(this.posX, this.posY, this.tamano);
  }
}
