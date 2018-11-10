let cells = document.querySelectorAll('.square');
let x = null;
let o = null;


cellClicked = e => {
    console.log(e.target);
}

cells.forEach((cell) => {
    cell.addEventListener('click', cellClicked);
})

