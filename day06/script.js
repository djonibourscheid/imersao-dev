const rafa = {
  nome: "rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

const paulo = {
  nome: "paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

const jogadores = [rafa, paulo];

function calcularPontos(jogador) {
  const pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibirJogadoresTela(jogadores) {
  const tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = "";

  jogadores.forEach(jogador => {
    let elemento = `
    <tr>
      <td>${jogador.nome}</td>
      <td>${jogador.vitorias}</td>
      <td>${jogador.empates}</td>
      <td>${jogador.derrotas}</td>
      <td>${jogador.pontos}</td>
      <td><button onClick="adicionarVitoria(${jogador.nome})">Vitória</button></td>
      <td><button onClick="adicionarEmpate(${jogador.nome})">Empate</button></td>
      <td><button onClick="adicionarDerrota(${jogador.nome})">Derrota</button></td>
    </tr>
    `

    tabelaJogadores.innerHTML += elemento;
  });
}

function adicionarVitoria(jogador) {
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresTela(jogadores);
}
function adicionarEmpate(jogador) {
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirJogadoresTela(jogadores);
}
function adicionarDerrota(jogador) {
  jogador.derrotas++;
  exibirJogadoresTela(jogadores);
}


exibirJogadoresTela(jogadores);