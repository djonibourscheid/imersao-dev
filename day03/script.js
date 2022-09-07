let chances = 3;
let acertou = false;
let numberSelected;

function randomNewNumber() {
  // Gera o número que o usuário deverá acertar
  numberSelected = Math.floor(Math.random() * (10 - 1 + 1) + 1);

  // Resetou o jogo, novas chances
  chances = 3;
}

function chutar() {
  if (chances === 3) {
    randomNewNumber();
  }

  const inputNumber = parseInt(document.getElementById("inputNumber").value);
  const resultEl = document.getElementById("result");

  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10) {
    return resultEl.innerText = "Número não válido!";
  }

  chances--

  if (inputNumber === numberSelected) {
    resultEl.innerText = `Você acertou! O número era ${numberSelected}`;
    randomNewNumber();
  } else {
    resultEl.innerText = `Você errou. Tentativas restantes: ${chances}`;

    if (chances === 0) {
      resultEl.innerText = `Você errou e acabou suas chances.\n O número era ${numberSelected}`;
      randomNewNumber();
    }
  }
}