const cells = document.querySelectorAll('.square');

const winningCombos = {
    w1:[1,2,3],
    w2:[4,5,6],
    w3:[7,8,9],
    w4:[1,5,9],
    w5:[1,4,7],
    w6:[2,5,8],
    w7:[3,6,9],
    w8:[3,5,7]
}
cellClicked = e => {
    console.log(e.target);
}

cells.forEach((cell) => {
    cell.addEventListener('click', cellClicked);
})

