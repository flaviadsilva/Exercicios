function validarFormulario(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagem");
  
    if (!nome || !email || !senha) {
      mensagem.style.color = "red";
      mensagem.innerText = "Por favor, preencha todos os campos.";
      return;
    }
  
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    if (!emailValido) {
      mensagem.style.color = "red";
      mensagem.innerText = "E-mail inválido.";
      return;
    }
  
    mensagem.style.color = "green";
    mensagem.innerText = "Cadastro realizado com sucesso!";
  }
  