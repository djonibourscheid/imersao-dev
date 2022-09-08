let filmsList = [
  {
    name: "Oi, Alberto",
    link: "https://www.google.com/search?q=Oi,%20Alberto",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA0Ikt7V-2SMPPdDgW_deHgGQzm-pRHVigGlsASeoExi8hFn7D"
  },
  {
    name: "Red: Crescer é uma Fera",
    link: "https://www.google.com/search?q=Red:%20Crescer%20é%20uma%20Fera",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbqzvtXhUMyq7rXyr95zkPGnhCIXBK0BIuhHGtmaHzSsbft0mm"
  }
]

filmsList.push(
  {
    name: "Soul",
    link: "https://www.google.com/search?q=Soul",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRmL0LHrUY5XZWfDmHV6-WbTQH6J2FMlZ_JqK7E8oPXcqYgVEE-"
  },
  {
    name: "Vingadores: Ultimato",
    link: "https://www.google.com/search?q=Vingadores:%20Ultimato",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwtU95JygcmCq4e3XPpL9W0ATjGFoQCQm16dbpIp7BM36B7lH"
  },
  {
    name: "Homem-Aranha: Sem Volta para Casa",
    link: "https://www.google.com/search?q=Homem-Aranha:%20Sem%20Volta%20para%20Casa",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMXAY7NfXP9KD4E6lHN2z9CZPMIngD39PxurSQXNfG6edN563s"
  }
)

const containerEl = document.querySelector(".container");
const cardEl = document.querySelector(".card");

filmsList.forEach(film => {
  const card = cardEl.cloneNode(true);

  const aEl = card.querySelector("a");
  aEl.setAttribute("href", `${film.link}`);

  const imgEl = card.querySelector("img");
  imgEl.setAttribute("src", `${film.img}`)

  const pEl = card.querySelector("p");
  pEl.innerText = `${film.name}`;

  containerEl.appendChild(card);
});

