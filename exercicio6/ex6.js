function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
  
    resultado.innerHTML = ""; // Limpa antes de gerar nova tabuada
  
    if (isNaN(numero)) {
      resultado.innerHTML = "<li>Digite um número válido.</li>";
      return;
    }
  
    for (let i = 1; i <= 10; i++) {
      const item = document.createElement("li");
      item.textContent = `${numero} × ${i} = ${numero * i}`;
      resultado.appendChild(item);
    }
  }
  