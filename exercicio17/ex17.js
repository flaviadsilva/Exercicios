function verificarPrimo() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(numero) || numero < 1) {
      resultado.innerText = "Digite um número inteiro positivo.";
      return;
    }
  
    if (numero === 1) {
      resultado.innerText = "1 não é primo.";
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        resultado.innerText = `${numero} não é primo.`;
        return;
      }
    }
  
    resultado.innerText = `${numero} é primo!`;
  }
  