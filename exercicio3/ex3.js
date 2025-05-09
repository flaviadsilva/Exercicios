function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.innerHTML = "Por favor, preencha peso e altura corretamente.";
      resultado.style.color = "red";
      return;
    }
  
    const imc = peso / (altura * altura);
    let mensagem = "";
  
    if (imc < 18.5) {
      mensagem = "Abaixo do peso";
    } else if (imc < 24.9) {
      mensagem = "Peso normal";
    } else if (imc < 29.9) {
      mensagem = "Sobrepeso";
    } else if (imc < 34.9) {
      mensagem = "Obesidade grau 1";
    } else if (imc < 39.9) {
      mensagem = "Obesidade grau 2";
    } else {
      mensagem = "Obesidade grau 3";
    }
  
    resultado.style.color = "#000";
    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${mensagem})`;
  }
  