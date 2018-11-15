//Selects all the squares in the form of an array to interate through
const cells = document.querySelectorAll('.square');

//Winning combinations that end the game
const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3, 5, 7]
]

//Run this code when a cell is clicked
const player1 = {
    symbol: "X"
}
const player2 = {
    symbol: "O"
}
let isPlayer1Turn = true;

cellClicked = e => {
    e.target.innerHTML = isPlayer1Turn ? player1.symbol : player2.symbol;
    if(checkGameEnded()){
        let winner = checkWinner();
        if (winner){
            alert(`The winner is ${winner}`);
        }
    }
    isPlayer1Turn = !isPlayer1Turn;
}
checkGameEnded = () => {
    let winner = checkWinner()
    if(winner){
        return true;
    }
    for (let element of cells) {
        if (element.innerHTML === "") {
            return false;
        }
    }
    return true;
}

checkWinner = () => {
    for (let combo of winningCombos) {
        let playerSymbol = document.getElementById(combo[0]).innerHTML;
        let foundWinner = true;
        for (let id of combo) {
            let symbol = document.getElementById(id).innerHTML;
            if (playerSymbol !== symbol) {
                foundWinner = false;
            }
        }
        if (foundWinner) {
            return playerSymbol;
        }
    }
}
//Event listener, listening for clicks
cells.forEach((cell) => {
    cell.addEventListener('click', cellClicked);
})

//Know whos turn it is

//Keep track if there is a winner

//Reset game if winner or draw
