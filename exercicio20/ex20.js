function calcularMedia() {
    const input = document.getElementById("notas").value;
    const resultado = document.getElementById("resultado");
  
    const notas = input.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
  
    if (notas.length < 3) {
      resultado.innerText = "Digite pelo menos 3 notas válidas.";
      return;
    }
  
    const soma = notas.reduce((a, b) => a + b, 0);
    const media = soma / notas.length;
    let status = "";
  
    if (media >= 7) {
      status = "Aprovado ✅";
    } else if (media >= 5) {
      status = "Recuperação ⚠️";
    } else {
      status = "Reprovado ❌";
    }
  
    resultado.innerText = `Média: ${media.toFixed(2)} - ${status}`;
  }
  