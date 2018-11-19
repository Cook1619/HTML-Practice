const rows = document.querySelectorAll('.row');
let msg = document.getElementById('message');
let markers = ['X', 'O'];
let turn = 0;
let moveCount = 0;
let players = ['O', 'X']

//Initial message saying whos turn it is
msg.textContent = `${markers[turn]}'s turn`;
//Reset game functions reloads the page after a game is complete
resetGame = () => {
    setTimeout(function () {
        window.location.reload(true);
    }, 2000);
}
//Checks if there is a winner right away and displays an appropriate message, will reset game as soon as its a winner or draw
rowClicked = (e) => {
        //checks in the tile as already been clicked, if it has display appropriate message
     if (!(e.target.textContent == '')) {
        return msg.textContent = `${markers[turn]} that operation is not allowed`;
    } else e.target.textContent = markers[turn];
    ++moveCount;
    msg.textContent = `${markers[turn]}'s turn`;
    if (turn == 0) {
        turn = 1;
    } else turn = 0;
    msg.textContent = `${markers[turn]}'s turn`;
    if (checkWin('X') || checkWin('O')) {
        msg.textContent = `Congratulations ${players[turn]}! You are the winner!`
        resetGame();
    } else if (moveCount == 9 && checkWin('X', 'O') == false) {
        msg.textContent = 'Draw!'
        resetGame();
    }
}
//Has all tiles selected and listens for a click event
rows.forEach( row => {
    row.addEventListener('click', rowClicked);
});
//tells checkrow what row cobinations should return true
checkWin = move => {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    } return result;
}
//uses gettTile to see the tiles as a row
checkRow = (a, b, c, move) => {
    var result = false;
    if (getTile(a) == move && getTile(b) == move && getTile(c) == move) {
        result = true
    } return result
}
//Grabs element by the id and checks what text is in the div
getTile = number => {
    return document.getElementById('t' + number).textContent
}