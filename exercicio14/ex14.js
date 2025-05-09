function sortear() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(min) || isNaN(max)) {
      resultado.innerText = "Digite valores válidos.";
      return;
    }
  
    if (min > max) {
      resultado.innerText = "O valor mínimo deve ser menor que o máximo.";
      return;
    }
  
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    resultado.innerText = `Número sorteado: ${numeroSorteado}`;
  }
  