var orkki;

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
  orkki.liikuta();
  square(mouseX, korkeus - 50 , 50, 20, 15, 15, 0, 0);
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth / 3);
  image(taustakuva, 0, 0, windowWidth, windowWidth / 3);
}


class Orkki {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
  }
  liikuta(){
    this.X = this.X + 2;
    image(orkkikuva, this.X, this.Y, 50, 50)
  }
}
