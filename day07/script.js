const cards = [
  {
    name: "Filipe Deschamps",
    attributes: {
      attack: 8,
      defense: 6,
      magic: 6
    }
  },
  {
    name: "Lucas Montando",
    attributes: {
      attack: 7,
      defense: 6,
      magic: 8
    }
  },
  {
    name: "Djoni",
    attributes: {
      attack: 6,
      defense: 8,
      magic: 10
    }
  }
];

let playerCard, botCard;

function drawCard() {
  const numCardBot = parseInt(Math.random() * cards.length);
  let numCardPlayer;

  do {
    numCardPlayer = parseInt(Math.random() * cards.length);
  } while (numCardPlayer === numCardBot);

  botCard = cards[numCardBot];
  playerCard = cards[numCardPlayer];

  document.getElementById("btnDrawCard").disabled = true;
  document.getElementById("btnPlay").disabled = false;

  showOptions();
}

function showOptions() {
  const options = document.getElementById("options");
  let optionsText = `Sua carta é: ${playerCard.name}`;

  for (const attribute in playerCard.attributes) {
    optionsText += `\n <div><input type="radio" name="attribute" value="${attribute}">${attribute}</div>`;
  }

  options.innerHTML = optionsText;
}

function getSelectedAttribute() {
  const radioAttributes = document.getElementsByName("attribute");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked === true) {
      return radioAttributes[i].value;
    }

  }
}

function play() {
  const selectedAttribute = getSelectedAttribute();
  const playerCardValue = playerCard.attributes[selectedAttribute];
  const botCardValue = botCard.attributes[selectedAttribute];

  const resultEl = document.getElementById("result");

  if (playerCardValue > botCardValue) {
    resultEl.innerText = "Você venceu!";
  } else if (playerCardValue < botCardValue) {
    resultEl.innerText = "Você perdeu, a carta da máquina é maior.";
  } else {
    resultEl.innerText = "Empatou.";
  }

  resultEl.innerText += `\n Seu atributo: ${playerCardValue} \n Atributo da máquina: ${botCardValue} \n A carta da máquina era ${botCard.name}`;
}