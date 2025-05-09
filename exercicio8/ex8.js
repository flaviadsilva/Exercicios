function verificar() {
    const textoOriginal = document.getElementById("texto").value;
    const resultado = document.getElementById("resultado");
  
    if (textoOriginal.trim() === "") {
      resultado.innerHTML = "Digite uma palavra ou frase.";
      resultado.style.color = "red";
      return;
    }
  
    const textoFormatado = textoOriginal
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, ""); // Remove espaços e pontuação
  
    const invertido = textoFormatado.split("").reverse().join("");
  
    if (textoFormatado === invertido) {
      resultado.innerHTML = `"${textoOriginal}" é um palíndromo!`;
      resultado.style.color = "green";
    } else {
      resultado.innerHTML = `"${textoOriginal}" não é um palíndromo.`;
      resultado.style.color = "red";
    }
  }
  