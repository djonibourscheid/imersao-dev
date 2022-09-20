const cards = [
  {
    name: "Filipe Deschamps",
    image: "https://popnow.com.br/wp-content/uploads/2022/07/IMG_3171-scaled.jpg",
    attributes: {
      attack: 8,
      defense: 6,
      magic: 6
    }
  },
  {
    name: "Lucas Montando",
    image: "https://miro.medium.com/max/2400/2*UbTtj9_xxzLJXTIuDh-qww.png",
    attributes: {
      attack: 7,
      defense: 6,
      magic: 8
    }
  },
  {
    name: "Michel Teló",
    image: "https://images2.imgbox.com/0e/b9/kjVCMaIm_o.jpg",
    attributes: {
      attack: 6,
      defense: 8,
      magic: 5
    }
  }
];

let playerCard, botCard;

function setup() {
  const numCardBot = parseInt(Math.random() * cards.length);
  let numCardPlayer;

  do {
    numCardPlayer = parseInt(Math.random() * cards.length);
  } while (numCardPlayer === numCardBot);

  botCard = cards[numCardBot];
  playerCard = cards[numCardPlayer];

  document.getElementById("btnDrawCard").disabled = true;
  document.getElementById("btnPlay").disabled = false;

  document.getElementById("result").innerText = "";

  showPlayerCard();
  clearBotCardView()
}

function showPlayerCard() {
  const playerCardEl = document.getElementById('playerCard');
  playerCardEl.style.backgroundImage = `url(${playerCard.image})`;

  // Para conseguir arrumar a imagem no responsivo
  playerCardEl.classList.remove("lucas");

  // Melhorar o display da imagem, já que os tamanhos das imagens são diferentes
  if (playerCard.name === "Lucas Montando") {
    playerCardEl.classList.add("lucas");
  }

  // Construção da carta
  const frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  const name = `<p class="subtitle-card"> ${playerCard.name} </p>`;

  const optionsHTML = '<div class="status-card">';

  let optionsText = "";
  for (const attribute in playerCard.attributes) {
    optionsText += `<div><input type="radio" name="attribute" value="${attribute}">${attribute} ${playerCard.attributes[attribute]}</div> \n`;
  }

  playerCardEl.innerHTML = frame + name + optionsHTML + optionsText + "</div>";
}

function showBotCard() {
  const botCardEl = document.getElementById('botCard');
  botCardEl.style.backgroundImage = `url(${botCard.image})`;

  // Para conseguir arrumar a imagem no responsivo
  botCardEl.classList.remove("lucas");

  // Melhorar o display da imagem, já que os tamanhos das imagens são diferentes
  if (botCard.name === "Lucas Montando") {
    botCardEl.classList.add("lucas");
  }

  // Construção da carta
  const frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  const name = `<p class="subtitle-card"> ${botCard.name} </p>`;

  const optionsHTML = '<div class="status-card">';

  let optionsText = "";
  for (const attribute in botCard.attributes) {
    optionsText += `<div>${attribute} ${botCard.attributes[attribute]}</div> \n`;
  }

  botCardEl.innerHTML = frame + name + optionsHTML + optionsText + "</div>";
}

function clearBotCardView() {
  const botCardEl = document.getElementById('botCard');

  const frame = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style="width: inherit; height: inherit; position: absolute;">';

  botCardEl.innerHTML = frame;
  botCardEl.style.background = "";
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
    resultEl.innerHTML = "<p class='final-result winner'>Você venceu!</p>";
  } else if (playerCardValue < botCardValue) {
    resultEl.innerHTML = "<p class='final-result looser'>Você perdeu.</p>";
  } else {
    resultEl.innerHTML = "<p class='final-result'>Empatou.</p>";
  }

  showBotCard();

  document.getElementById("btnDrawCard").disabled = false;
  document.getElementById("btnPlay").disabled = true;
}