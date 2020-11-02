//execute-section
function setup() {
    createCanvas(500,400);
}

function draw() {
    background(roadImage);
    playerDraw();
    playerMovement();
    carDraw();
    carMovement();
    carLoop();
    verifyCollision();
    addScore();
}