const rows = document.querySelectorAll('.row');
let msg = document.getElementById('message');
let markers = ['X', 'O'];
let turn = 0;
let moveCount = 0;
let players = ['O', 'X']

msg.textContent = `${markers[turn]}'s turn`;
resetGame = () => {
    setTimeout(function(){
        window.location.reload(true);
    }, 2000);
}
rowClicked = (e) => {
    if (checkWin('X') || checkWin('O') == true) {
        msg.textContent = `Congratulations ${players[turn]}! You are the winner!`;
        resetGame();
    } else if (!(e.target.textContent == '')) {
        return msg.textContent = `${markers[turn]} that operation is not allowed`;
    } else e.target.textContent = markers[turn]; ++moveCount;
    msg.textContent = `${markers[turn]}'s turn`;
    if (turn == 0) {
        turn = 1;
    } else turn = 0;
    msg.textContent = `${markers[turn]}'s turn`;
    if (checkWin('X') || checkWin('O') == true) {
        msg.textContent = `Congratulations ${players[turn]}! You are the winner!`
        resetGame();
    } else if (moveCount == 9 && checkWin('X', 'O') == false) {
      msg.textContent = 'Draw!'
      resetGame();
    }
}

rows.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

checkWin = (move) => {
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

checkRow = (a, b, c, move) => {
    var result = false;
    if (getTile(a) == move && getTile(b) == move && getTile(c) == move) {
        result = true
    } return result
}

getTile = number => {
    return document.getElementById('t' + number).textContent
}