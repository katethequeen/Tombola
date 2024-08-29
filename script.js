//Creazione dei box per i numeri (da 1 a 76)

const container = document.querySelector(".container");

const button = document.querySelector("button");

function createTable() {
  for (let i = 1; i <= 76; i++) {
    const numberBox = document.createElement("div");
    numberBox.className = "number-box";
    container.appendChild(numberBox);
    const number = document.createElement("h3");
    number.innerText = i;
    numberBox.appendChild(number);

    button.addEventListener("click", function () {
      const randomNumber = Math.floor(Math.random() * 76) + 1;
      if (randomNumber === numberBox) {
        console.log("ci seiiii");
      } else {
        console.log("ma che stai dicendo?");
      }
    });
  }
}
createTable();

// Creazione bottone estrazione
