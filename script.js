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

            gridRow.appendChild(gridSquare);
        }

        gridSquareContainer.appendChild(gridRow);
    }
}

function etch(color="black") {
    // set grid squares to change color when mouse hovers
    const squares = document.querySelectorAll(".grid-square");

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.background = color;
        });
    });
}

function numberOfSquares() {
    let gridRows = document.querySelectorAll(".grid-row");
    let gridSquares = document.querySelectorAll(".grid-square");

    // prompt user for # of squares
    const number = Number(prompt("How many squares per side?"));
        
    if (number < 1 || number > 100 || !number || number === NaN) {
        alert("Choose a number between 1 and 100");
        return;
    }

    // get h/w of first grid square, calculate new h/w
    const sqWidth = gridSquares[0].clientWidth;
    const sqHeight = gridSquares[0].clientHeight;
    const newWidth = (sqWidth * 16) / number;
    const newHeight = (sqHeight * 16) / number;

    // clear the grid and create new grid with number of squares
    gridRows.forEach(row => gridSquareContainer.removeChild(row));
    createGrid(number, number);
    etch();

    // get new Nodelist and adjust square sizes
    gridSquares = document.querySelectorAll(".grid-square") 
    console.log(gridSquares);

    return;
}

function sixteenBySixteen() {
    // create grid with default values (16x16)   
    createGrid();
    etch();
}

sixteenBySixteen();