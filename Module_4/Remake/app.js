let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");

let currentPlayer = true; // true for X, false for O

let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function resetGame() {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
}

function checkWinner() {
    for (let pattern in winPatterns) {
        let [a, b, c] = winPatterns[pattern];
        if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            console.log("We have a winner:", boxes[a].innerText);
            alert("Player " + boxes[a].innerText + " wins!");
            resetGame();
            return;
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked:", box);
        if (currentPlayer === true) {
            box.innerText = "X";
            currentPlayer = false;
        } else {
            box.innerText = "O";
            currentPlayer = true;
        }
        box.disabled = true;
        checkWinner()
    })
})

resetBtn.addEventListener("click", resetGame);