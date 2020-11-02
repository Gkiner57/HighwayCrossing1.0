let score = 0;

function addScore() {
    textSize(25);
    textAlign(CENTER);
    FileList(97,113,90);
    text(score,width/5,27);
    if(playerY === 3) {
        playerY = 366;
        score++;
        scoreSound.play();
    }
}

function loseScore() {
    if(score > 0) {
        score -= 1;
    }
}