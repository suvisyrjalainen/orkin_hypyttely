var orkki;
var painovoima = 0.05;
var lautan_leveys = 50;

function preload() {
  taustakuva = loadImage('tower.png');
  orkkikuva = loadImage('orkki.png');
}


function setup() {
   createCanvas(windowWidth, windowWidth / 3 );
   orkki = new Orkki(0, windowWidth / 6);
}

function draw() {
  var korkeus = windowWidth / 3;
  leveys = windowWidth;
  image(taustakuva, 0, 0,  leveys, korkeus);
  orkki.liikuta(korkeus);
  square(mouseX, korkeus - 40 , lautan_leveys, 20, 15, 15, 0, 0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth / 3);
  image(taustakuva, 0, 0, windowWidth, windowWidth / 3);
}


class Orkki {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
    this.Y_nopeus = random(1,5);
    this.X_nopeus = random(1,3);
    this.korkeus = 50;
    this.leveys = 50;

  }
  liikuta(korkeus){
    this.X = this.X + this.X_nopeus;
    this.Y_nopeus = this.Y_nopeus - painovoima;

    if(this.X + this.leveys > mouseX && this.X < mouseX + lautan_leveys){
      if(this.Y + this.korkeus > korkeus - 40){
          this.Y_nopeus = 10;
          this.Y_nopeus = -abs(this.Y_nopeus);
      }
    }

    this.Y = this.Y - this.Y_nopeus;

    image(orkkikuva, this.X, this.Y, this.korkeus, this.leveys)
  }
}
