function calcularNotas() {
    const valorInput = document.getElementById("valor").value;
    let valor = parseInt(valorInput);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
  
    if (isNaN(valor) || valor <= 0) {
      resultado.innerHTML = "Por favor, digite um valor válido maior que zero.";
      return;
    }
  
    const notas = [100, 50, 10, 1];
    const distribuicao = {};
  
    notas.forEach(nota => {
      distribuicao[nota] = Math.floor(valor / nota);
      valor %= nota;
    });
  
    for (const nota of notas) {
      if (distribuicao[nota] > 0) {
        resultado.innerHTML += `R$${nota},00: ${distribuicao[nota]} nota(s)<br>`;
      }
    }
  }
  