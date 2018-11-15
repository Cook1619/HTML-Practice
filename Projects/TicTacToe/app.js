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
//Setting an X or an O per player
const player1 = {
    symbol: "X"
}
const player2 = {
    symbol: "O"
}
//Creaating a variable I can flip back and forth to keep track of whos turn it is
let isPlayer1Turn = true;

cellClicked = e => {
    //targets the cell clicked and pending on truthy or falsey it will create an x or o
    e.target.innerHTML = isPlayer1Turn ? player1.symbol : player2.symbol;
    console.log(player1.symbol);
    //checks if game ended
    if(checkGameEnded()){
        //checks if there is a winner
        let winner = checkWinner();
        if (winner){
            //alert the winner 
            // Create an h5 element stating who the winner is
            const h5 = document.createElement('h5');
            const h3Text = document.createTextNode(`The winner is ${winner}`);
            let h1 = document.querySelector('h1');
            h5.appendChild(h3Text);
            h1.appendChild(h5);
            setTimeout(function(){
                window.location.reload(true);
            }, 2000);
        }
        else if(!winner){
            const h5 = document.createElement('h5');
            const h3Text = document.createTextNode(`DRAW!!!`);
            let h1 = document.querySelector('h1');
            h5.appendChild(h3Text);
            h1.appendChild(h5);
            setTimeout(function(){
                window.location.reload(true);
            }, 2000);
        }
    }
    //flips player turn 
    isPlayer1Turn = !isPlayer1Turn;
}
//checks if all the cells are filled with a character

checkGameEnded = () => {
    let winner = checkWinner()
    if(winner){
        return true;
    }
    //loops through all the cells checking if there empty
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

