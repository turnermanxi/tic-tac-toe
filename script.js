const displayController = (() => {
    const renderMsg = (message) => {
        document.querySelector("#endGameBox").innerHTML = message;
        
    }
    return {
        renderMsg,
    }
})();

const Gameboard = (function() {
    // Sets the grid layout for the gameboard with the space for each mark
    let gameboard = ["", "", "", "", "", "", "", "", ""] 
    

    const render = function(){
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;

         // Adding logic to every square to be clickable
         const squares = document.querySelectorAll(".square")
         squares.forEach((square) => {
             square.addEventListener("click", Game.handleClick);
         })


    }
    const update = (index, value) => {
        gameboard[index] = value;
        render();
    }

    const getGameBoard = () => gameboard;


    return {
        render,
        update,
        getGameBoard,
    }



}) ();

const createPlayer = (function(name, mark) {
    return {
        name,
        mark
    }
})

const Game = (function() {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        players = [
            createPlayer(document.querySelector("#player1").value, "X"),
            createPlayer(document.querySelector("#player2").value, "O"), 
        ]

        currentPlayerIndex = 0;
        gameOver = false;
        // When the game starts the gameboard will render the players name with their markings
        Gameboard.render();

        // Adding logic to every square to be clickable
        const squares = document.querySelectorAll(".square")
        squares.forEach((square) => {
            square.addEventListener("click", handleClick);
        })

    }

    const handleClick = (event) => {
        if (gameOver) {
            return;
        }


        // Save every time the user clicks a box and what box that they clicked
        let index = parseInt(event.target.id.split("-")[1]);
        // Prevents player from changing the previous mark
        if (Gameboard.getGameBoard()[index] != "")
            return
        
        Gameboard.update(index, players[currentPlayerIndex].mark);

        if(checkForWin(Gameboard.getGameBoard(), players[currentPlayerIndex].mark)){
            gameOver = true;
            dialogBox4.showModal();
            displayController.renderMsg(`${players[currentPlayerIndex].name} won!`);

        }   else if (checkForTie(Gameboard.getGameBoard())) {
            gameOver = true;
            dialogBox4.showModal();
            displayController.renderMsg(`OMG ITS A TIE!`);
        }
        

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        
        
    }

    // Function to make sure the games index restarts back to 0
    const restart = function() {
        for (let i=0; i<9; i++) {
            Gameboard.update(i, "");
        }
        Gameboard.render();
        gameOver = false;
    }

    // creating a function to record each game

    const recordGame = (index, value) => {
        game[index] = value;
        render();
        gameOver = true;
        }

    return {
        start,
        handleClick,
        restart,
        recordGame,
    }
})();

function checkForWin(board) {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i=0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (board [a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false
}

function checkForTie (board){
    return board.every(cell => cell !== "")

}

const dialogBox3 = document.querySelector("#dialogBox3")
const openDialog = document.querySelector("#openDialog")
const dialogBox4 = document.querySelector("#dialogBox4")
const dialogBox5 = document.querySelector("#dialogBox5")

const startBtn = document.querySelector("#submit1")
startBtn.addEventListener("click", () => {
    Game.start();
    dialogBox3.showModal();
    
})

const newGameBtn = document.querySelector("#newGameBtn")
newGameBtn.addEventListener("click", () => {
    Game.restart();
    dialogBox4.close();
})


const resetBtn = document.querySelector("#resetBoard")





