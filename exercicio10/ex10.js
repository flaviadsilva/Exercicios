function converter() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const escala = document.querySelector('input[name="escala"]:checked');
    const resultado = document.getElementById("resultado");
  
    if (isNaN(celsius)) {
      resultado.innerText = "Por favor, insira uma temperatura válida!";
      resultado.style.color = "red";
      return;
    }
  
    if (!escala) {
      resultado.innerText = "Selecione uma escala para converter.";
      resultado.style.color = "red";
      return;
    }
  
    let valorConvertido = 0;
    let unidade = "";
  
    if (escala.value === "fahrenheit") {
      valorConvertido = (celsius * 9/5) + 32;
      unidade = "°F";
    } else if (escala.value === "kelvin") {
      valorConvertido = celsius + 273.15;
      unidade = "K";
    }
  
    resultado.style.color = "green";
    resultado.innerText = `Resultado: ${valorConvertido.toFixed(2)} ${unidade}`;
  }
  