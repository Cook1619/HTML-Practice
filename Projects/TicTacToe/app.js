let cells = document.querySelectorAll('.square');
let player1 = null;
let player2 =  null;

cellClicked = e => {
    console.log(e.target);
}

cells.forEach((cell) => {
    cell.addEventListener('click', cellClicked);
})

