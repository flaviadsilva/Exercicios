function contar() {
    const texto = document.getElementById("texto").value.trim();
  
    // Contar palavras (ignora espaços em branco múltiplos)
    const palavras = texto === "" ? 0 : texto.split(/\s+/).length;
  
    // Contar letras (remove todos os espaços)
    const letras = texto.replace(/\s/g, "").length;
  
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      Palavras: ${palavras}<br>
      Letras (sem espaços): ${letras}
    `;
  }
  