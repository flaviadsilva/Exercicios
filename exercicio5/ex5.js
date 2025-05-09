function verificarIdade() {
    const anoNascimento = parseInt(document.getElementById("ano").value);
    const resultado = document.getElementById("resultado");
    const anoAtual = new Date().getFullYear();
  
    if (isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento < 1900) {
      resultado.innerHTML = "Por favor, insira um ano válido.";
      resultado.style.color = "red";
      return;
    }
  
    const idade = anoAtual - anoNascimento;
    let classificacao = "";
  
    if (idade < 18) {
      classificacao = "menor de idade";
    } else if (idade < 60) {
      classificacao = "adulto(a)";
    } else {
      classificacao = "idoso(a)";
    }
  
    resultado.style.color = "#000";
    resultado.innerHTML = `Você tem <strong>${idade}</strong> anos e é <strong>${classificacao}</strong>.`;
  }
  