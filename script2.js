const playerScores = [];
let cardContainer;

function displayPlayers() {
    for (const [index, player] of Game.entries()) {
        console.log(player.score);


        cardContainer = document.querySelector(".container1");

        const player1Card = document.createElement("div");
        player1Card.classList.add("player1-card");


        const player1Name = document.createElement("div");
        player1Name.textContent = document.querySelector("#player1").value;
        // Make a selector for css
        playerName.classList.add("playerName");
        playerCard.appendChild(playerName);

        const playerScore = document.createElement("div");
        player1Score.textContent = createPlayer(document.querySelector("#player1").value);
        player1Score.classList.add("player1-score");
        playerCard.appendChild(player1Score);

        const player2Card = document.createElement("div");
        player2Card.classList.add("player1-card");


        const player2Name = document.createElement("div");
        player2Name.textContent = document.querySelector("#player1").value;
        // Make a selector for css
        player2Name.classList.add("playerName");
        player2Card.appendChild(playerName);

        const player2Score = document.createElement("div");
        player2Score.textContent = createPlayer(document.querySelector("#player1").value);
        player2Score.classList.add("player1-score");
        player2Card.appendChild(player1Score);


        function rbCardsContainer() {
            cardsContainer.textContent = "";
            displayPlayers();
        }
    }
}
displayPlayers();




    
export default class script2 {
    constructor(root, playerOneName, playerTwoName, ) {
        this.root = root;
        this.root.innerHTML = 
    }
}

const playerOneScore = 0
const playerTwoScore = 0

const root = document.querySelector("#container")
    