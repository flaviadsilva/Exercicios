function contar() {
    const inicio = Number(document.getElementById("inicio").value);
    const fim = Number(document.getElementById("fim").value);
    const passo = Number(document.getElementById("passo").value);
    const resultado = document.getElementById("resultado");
  
    resultado.innerHTML = "";
  
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
      resultado.innerHTML = "Por favor, preencha todos os campos corretamente e use passo maior que 0.";
      resultado.style.color = "red";
      return;
    }
  
    resultado.style.color = "black";
    resultado.innerHTML = "Contando:<br>";
  
    if (inicio < fim) {
      // Contagem crescente
      for (let i = inicio; i <= fim; i += passo) {
        resultado.innerHTML += `${i} 👉 `;
      }
    } else {
      // Contagem decrescente
      for (let i = inicio; i >= fim; i -= passo) {
        resultado.innerHTML += `${i} 👉 `;
      }
    }
  
    resultado.innerHTML += "🏁";
  }
  