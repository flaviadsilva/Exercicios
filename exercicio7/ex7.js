function adicionarItem() {
    const input = document.getElementById("item");
    const lista = document.getElementById("lista");
    const valor = input.value.trim();
  
    if (valor === "") {
      alert("Digite um item válido!");
      return;
    }
  
    const li = document.createElement("li");
    li.innerHTML = `${valor} <button onclick="removerItem(this)">Remover</button>`;
    lista.appendChild(li);
  
    input.value = "";
    input.focus();
  }
  
  function removerItem(botao) {
    const li = botao.parentElement;
    li.remove();
  }
  