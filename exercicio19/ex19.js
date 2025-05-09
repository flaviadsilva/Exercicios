const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificarPalpite() {
  const palpite = parseInt(document.getElementById("palpite").value);
  const mensagem = document.getElementById("mensagem");

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.innerText = "Digite um número entre 1 e 100.";
    return;
  }

  tentativas++;

  if (palpite === numeroSecreto) {
    mensagem.innerText = `Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
  } else if (palpite < numeroSecreto) {
    mensagem.innerText = "Tente um número maior.";
  } else {
    mensagem.innerText = "Tente um número menor.";
  }
}
