//Set starting grid size and color
let gridSize = 10;
let bgColor = "#0000FF";

//Update color output
let bgColorInput = document.querySelector("#bgColor");
bgColorInput.addEventListener("input", (e) => {
    bgColor = bgColorInput.value;
});

//Select the container and its elements
let gridContainer = document.querySelector("#gridContainer");
let gridSquare = document.querySelectorAll(".gridSquare");

//Draw 10x10 grid
function drawGrid() {
    for (let i = 1; i <= (gridSize**2); i++) {
        gridContainer.appendChild(
            Object.assign(document.createElement("div"), {
                className: "gridSquare",
            }),
        )  
    }
}
drawGrid()

//Update grid size
document.querySelector("#gridSize").addEventListener("input", (e) => {
    setTimeout(() => {
        gridSquare = document.querySelectorAll(".gridSquare");
        gridSquare.forEach(square => square.remove());
        gridSize = e.target.valueAsNumber;
        drawGrid()
        gridSquare = document.querySelectorAll(".gridSquare");
        gridSquare.forEach(square => {
            square.style.width = 600/gridSize + "px";
            square.style.height = 600/gridSize + "px";
        });
    }, 300)
})

//Add drawing funcionality
let isMouseDown = false;

gridContainer.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    if (e.target != gridContainer && e.target.classList.contains('gridSquare')) {
        if (e.buttons == 1) { // Left click for drawing
            e.target.style.backgroundColor = bgColor;
            e.target.classList.add("drawn");
        } else if (e.buttons == 2) { // Right click for erasing
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.classList.remove("drawn");
        }
    }
});

gridContainer.addEventListener("mouseup", () => {
    isMouseDown = false;
});

gridContainer.addEventListener("mouseover", (e) => {

    if (!isMouseDown) return;

    if (e.target != gridContainer && e.target.classList.contains('gridSquare')) {
        if (e.buttons == 1) { // Left click for drawing
            e.target.style.backgroundColor = bgColor;
            e.target.classList.add("drawn");
        } else if (e.buttons == 2) { // Right click for erasing
            e.target.style.backgroundColor = "#FFFFFF";
            e.target.classList.remove("drawn");
        }
    }
});

gridContainer.addEventListener("mouseleave", () => {
    isMouseDown = false;
});

document.body.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do clique direito
});

// Add a clear button
const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    gridSquare = document.querySelectorAll(".gridSquare");
    gridSquare.forEach(square => {
            square.style.backgroundColor = "#FFFFFF";
            square.classList.remove("drawn");
        });
})
