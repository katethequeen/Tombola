//Creazione dei box per i numeri (da 1 a 90)

const container = document.querySelector(".container");
const btn = document.querySelector("button");

//Create a table

function getTable() {
  const table = document.createElement("table");

  let number = 1;
  let tdList = []; //Array dei numeri nelle colonne della tabella
  let selectedNumb = []; //Array dei numeri gia usciti dall'estrazione

  for (let i = 1; i <= 9; i++) {
    let tr = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
      let tdNumber = document.createElement("td");
      tdNumber.innerText = number;
      number++;

      tr.appendChild(tdNumber);
      tdList.push(tdNumber);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);

  /*-- Create BTN --*/
  btn.onclick = () => {
    let randomNmb;
    do {
      randomNmb = Math.floor(Math.random() * 91);
    } while (selectedNumb.includes(randomNmb));

    selectedNumb.push(randomNmb);
    if (selectedNumb.length === 90) {
      let h4El = document.createElement("h4");
      h4El.style.textAlign = "center";
      h4El.innerText = "You have Completed Tombola!";

      container.appendChild(h4El);

      h4El.style.position = "absolute";
      h4El.style.top = "50%";
      h4El.style.left = "50%";
      h4El.style.transform = "translate(-50%, -50%)";
      h4El.style.background = "red";
      h4El.style.fontSize = "100px";
      h4El.style.padding = "20px";
      h4El.style.zIndex = "999";
      h4El.style.boxShadow = "0 8px 20px 1px black";
    }

    const selectNmb = tdList[randomNmb];
    selectNmb.style.backgroundColor = "#c4020d";
    selectNmb.style.color = "#f5d0a1";
  };
}

getTable();

/*const button = document.querySelector("button"
function createTable() {

  button.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 90) + 1;
    const numberBoxClass = document.querySelectorAll(".number-box");
    const numberBoxh3 = document.querySelectorAll(".number-box h3");

    const selectNum = numberBoxh3[randomNumber - 1];
    numberBoxClass.style.backgroundColor = "green";
  });
}
createTable();
*/
// Creazione bottone estrazione
