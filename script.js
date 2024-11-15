const gridSquareContainer = document.querySelector(".grid-square-div");
const btnSquares = document.querySelector(".btn-squares");

btnSquares.addEventListener("click", () => numberOfSquares());

function createGrid(numberRows=16, numberColumns=16) {
    // create grid of squares with (nRows, nColumns)

    for (let i = 0; i < numberRows; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList = "grid-row";
        gridRow.id = `row-${i}`;

        for (let j = 0; j < numberColumns; j++) {    
            const gridSquare = document.createElement("div");
            gridSquare.classList = "grid-square";
            gridSquare.id = `row-${i}-square-${j}`;
            gridSquare.style.visibility = "hidden";
            gridRow.appendChild(gridSquare);
        }

        gridSquareContainer.appendChild(gridRow);
    }
}

function etch(color="black") {
    // set grid squares to change color when mouse hovers

    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(square => square.style.visibility = "visible");

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.background = color;
        });
    });
}

function numberOfSquares() {
    // prompt user for # of squares
    const number = Number(prompt("How many squares per side?"));

    if (number < 1 || number > 100 || !number || number === NaN) {
        alert("Choose a number between 1 and 100");
        return;
    }

    // get current height/width of each grid square
    const gridRows = document.querySelectorAll(".grid-row");
    const gridSquares = document.querySelectorAll(".grid-square");

    gridSquares.forEach(square => {
        const sWidth = square.clientWidth;
        const sHeight = square.clientHeight;

        console.log("square width16: " + (sWidth * 16) / number);
        console.log("square height16: " + (sHeight * 16) / number);
        // clear the grid and call createGrid with new square sizes

    });
    
    return;
}

function sixteenBySixteen() {
    // create grid with default values (16x16)   
    createGrid();
    etch();
}

sixteenBySixteen();