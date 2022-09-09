function addNewFilm() {
  // Pegando os valores
  const filmNameInput = document.getElementById("filmName");
  const filmName = filmNameInput.value.trim();
  const filmImgInput = document.getElementById("filmImg");
  const filmImg = filmImgInput.value.trim();


  // Criando o card
  const newCardEl = document.createElement("div");
  newCardEl.className = "card";

  const aEl = document.createElement("a");
  aEl.href = `https://www.google.com/search?q=${filmName}`;
  aEl.target = "_blank";

  const imgEl = document.createElement("img");
  imgEl.src = filmImg;
  imgEl.alt = `Capa do filme ${filmName}`;

  aEl.appendChild(imgEl);
  newCardEl.appendChild(aEl);

  const pEl = document.createElement("p");
  pEl.className = "filmName";
  pEl.innerText = filmName;

  newCardEl.appendChild(pEl);


  // Adicionando a imagem na tela
  const filmsListWrapperEl = document.getElementById("filmsList");

  filmsListWrapperEl.appendChild(newCardEl);


  // Limpar campo depois de tudo
  filmNameInput.value = "";
  filmImgInput.value = "";
}