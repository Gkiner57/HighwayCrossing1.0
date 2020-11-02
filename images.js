let roadImage;
let player1Image;
let car1Image;
let car2Image;
let car3Image;
let car4Image;
let car5Image;
let carImage;
let collisionSound;
let scoreSound;

function preload() {
    roadImage = loadImage('images/estrada.png');
    player1Image = loadImage('images/ator-1.png');
    car1Image = loadImage('images/carro-1.png');
    car2Image = loadImage('images/carro-2.png');
    car3Image = loadImage('images/carro-3.png');
    car4Image = loadImage('images/carro-1.png');
    car5Image = loadImage('images/carro-2.png');
    car6Image = loadImage('images/carro-3.png');
    collisionSound = loadSound('sounds/colidiu.mp3');
    scoreSound = loadSound('sounds/pontos.wav');

    carImages = [car1Image,car2Image,car3Image,car4Image,car5Image,car6Image];
}