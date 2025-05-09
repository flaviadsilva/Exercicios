function verificarParOuImpar() {
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");
  
    if (numero === "") {
      resultado.textContent = "Por favor, digite um número.";
      resultado.style.color = "red";
      return;
    }
  
    if (numero % 2 === 0) {
      resultado.textContent = `${numero} é PAR.`;
      resultado.style.color = "purple";
    } else {
      resultado.textContent = `${numero} é ÍMPAR.`;
      resultado.style.color = "blue";
    }
  }
  