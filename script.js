const gridSquareContainer = document.querySelector(".grid-square-div");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList = "grid-row";
        gridRow.id = `row-${i}`

        for (let j = 0; j < 16; j++) {    
            const gridSquare = document.createElement("div");
            gridSquare.classList = "grid-square";
            gridSquare.id = `square-${j}`
            gridSquare.style.visibility = "hidden";
            gridRow.appendChild(gridSquare);
        }

        gridSquareContainer.appendChild(gridRow);
    }
}

createGrid()

const rows = document.querySelectorAll(".grid-row");
const squares = document.querySelectorAll(".grid-square");
