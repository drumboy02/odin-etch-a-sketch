const gridSquareContainer = document.querySelector(".grid-square-div");

function createGrid(numberRows, numberColumns) {
    for (let i = 0; i < numberRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList = "grid-row";
        gridRow.id = `row-${i}`

        for (let j = 0; j < numberColumns; j++) {    
            const gridSquare = document.createElement("div");
            gridSquare.classList = "grid-square";
            gridSquare.id = `row-${i}-square-${j}`
            gridSquare.style.visibility = "hidden";
            gridRow.appendChild(gridSquare);
        }

        gridSquareContainer.appendChild(gridRow);
    }
}

function etch() {
    const squares = document.querySelectorAll(".grid-square");

    squares.forEach(square => square.style.visibility = "visible");
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.background = "black";
        });
    });
}

function sixteenBySixteen() {
    createGrid(16, 16);
    etch();
}

sixteenBySixteen();