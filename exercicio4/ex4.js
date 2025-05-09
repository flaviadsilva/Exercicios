function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    const resultado = document.getElementById("resultado");
  
    if (isNaN(num1) || isNaN(num2)) {
      resultado.innerHTML = "Preencha corretamente os dois números.";
      resultado.style.color = "red";
      return;
    }
  
    let calculo;
    switch (operacao) {
      case "+":
        calculo = num1 + num2;
        break;
      case "-":
        calculo = num1 - num2;
        break;
      case "*":
        calculo = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          resultado.innerHTML = "Não é possível dividir por zero.";
          resultado.style.color = "red";
          return;
        }
        calculo = num1 / num2;
        break;
    }
  
    resultado.style.color = "#000";
    resultado.innerHTML = `Resultado: <strong>${calculo}</strong>`;
  }
  