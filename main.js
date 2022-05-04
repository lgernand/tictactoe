const squares = document.querySelectorAll(".square");
let player = "O";
let img = "";
let gameBoardArray = ["i", "i", "i", "i", "i", "i", "i", "i", "i"];

// this is the main game loop
squares.forEach(square => {
    square.addEventListener('click', function() {
        img = this; 
        if (validateTurn() === true) {
            turn();
            if (isWinningMove() === true) {
                document.getElementById('turnKeeper').innerHTML = "Game Over <br>" + player + " wins!";
                document.getElementById('game-over').style.zIndex = "2";
            } else {
            switchPlayer();
            }
        }
    });
});

// function changes the image of a given square and inserts the players move into the game array
function turn() {
    
    // strange bug occurs when using this.id
    let squareNumber = Number(img.id);

    if (player === "X") {
        document.getElementById("turnKeeper").innerHTML = "It is O's turn"; 
        img.src = "pictures/x-square.png";
        img.classList.add("x");
        gameBoardArray.splice((squareNumber - 1), 1, "x");
    } else if (player === "O"){
        document.getElementById("turnKeeper").innerHTML = "It is X's turn"; 
        img.src = "pictures/o-square.png";
        img.classList.add("o");
        gameBoardArray.splice((squareNumber - 1), 1, "o");
    }    
};

// move validation
function validateTurn() {

    if (img.src !== "file:///Users/landongernand/Desktop/webdev/tictactoe/pictures/square.png") {
        alert("Square is already in use");
    } else {
        return true;
    }

}

// win detection
function isWinningMove() {

    //Detect a horizontal victory
    if(gameBoardArray[0] !== "i") {
        if(gameBoardArray[0] === gameBoardArray[1] && gameBoardArray[1] === gameBoardArray[2]) {
            return true;
        }
    } 

    if(gameBoardArray[3] !== "i") {
        if(gameBoardArray[3] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[5]) {
            return true;
        }
    }
    if(gameBoardArray[6] !== "i") {
        if(gameBoardArray[6] === gameBoardArray[7] && gameBoardArray[7] === gameBoardArray[8]) {
            return true;
        }
    }

    //Detect a vertical victory
    if(gameBoardArray[0] !== "i") {
        if(gameBoardArray[0] === gameBoardArray[3] && gameBoardArray[3] === gameBoardArray[6]) {
            return true;
        }
    } 

    if(gameBoardArray[1] !== "i") {
        if(gameBoardArray[1] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[7]) {
            return true;
        }
    }
    if(gameBoardArray[2] !== "i") {
        if(gameBoardArray[2] === gameBoardArray[5] && gameBoardArray[5] === gameBoardArray[8]) {
            return true;
        }
    }

    //Detect diagonal victory
     if(gameBoardArray[0] !== "i") {
        if(gameBoardArray[0] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[8]) {
            return true;
        }
    } 

    if(gameBoardArray[2] !== "i") {
        if(gameBoardArray[2] === gameBoardArray[4] && gameBoardArray[4] === gameBoardArray[6]) {
            return true;
        }
    }
    
    
    return false
};

// changes active player after every turn
function switchPlayer() {
    if (player === "X") {
        player = "O";
    } else if (player === "O"){
        player = "X";
    }
}
