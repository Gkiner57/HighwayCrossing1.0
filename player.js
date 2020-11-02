let playerX = 100;
let playerY = 366;
let collision = false;

function playerDraw() {
    Image(player1Image,playerX,playerY,30,30);
}

function playerMovement() {
    if(keyIsDown(UP_ARROW)) {
        playerY -= 3;
    }
    if(keyIsDown(DOWN_ARROW)) {
        if(movable()) {
            playerY += 3;
        }
    }
}

function movable() {
    return playerY < 370;
}

function verifyCollision() {
    for(let i=0; i < carImages.length; i++) {
        collision = collideRectCircle(xCars[i],yCars[i],carWidth,carHeight,playerX,playerY,15);
        if(collision) {
            collisionReturn();
            loseScore();
            collisionSound.play();
        }
    }
}

function collisionReturn() {
    playerY = 366;
}