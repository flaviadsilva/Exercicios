const votos = [0, 0, 0]; // JavaScript, Python, Java

function votar(indice) {
  votos[indice]++;
  mostrarResultados();
}

function mostrarResultados() {
  const total = votos.reduce((a, b) => a + b, 0);
  const linguagens = ["JavaScript", "Python", "Java"];
  let resultadoHTML = `<p>Total de votos: ${total}</p>`;

  votos.forEach((qtd, i) => {
    const porcentagem = total > 0 ? ((qtd / total) * 100).toFixed(1) : 0;
    resultadoHTML += `<p>${linguagens[i]}: ${qtd} voto(s) - ${porcentagem}%</p>`;
  });

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
