let xCars = [600,600,600,-100,-100,-100];
let yCars = [40,96,150,206,265,320];
let velocityCars = [2,3,1.8,3.5,1.5,2.5];
let carWidth = 50;
let carHeight = 40;

function carDraw() {
    for(let i = 0; i < carImages.length; i++) {
        Image(carImages[i],xCars[i],yCars[i],carWidth,carHeight);
    }
}

function carMovement() {
    for(let i = 0; i < xCars.length || i < velocityCars.length; i++) {
        xCars[i] -= velocityCars[i];
    }
}

function carLoop() {
    for(let i = 0; i < xCars.length; i++) {
        if(xCars[i] < -50) {
            xCars[i] = 600;
        }
    }
}
