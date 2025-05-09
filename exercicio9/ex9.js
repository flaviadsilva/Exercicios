const vermelho = document.getElementById('vermelho');
const amarelo = document.getElementById('amarelo');
const verde = document.getElementById('verde');

function mudarCor() {
    vermelho.style.backgroundColor = 'red';
    amarelo.style.backgroundColor = 'yellow';
    verde.style.backgroundColor = 'green';

}

function vermelhoLigado() {
    vermelho.style.backgroundColor = 'red';
    amarelo.style.backgroundColor = '#000000e7';
    verde.style.backgroundColor = '#000000e7';
}

function amareloLigado() {
    vermelho.style.backgroundColor = '#000000e7';
    amarelo.style.backgroundColor = 'yellow';
    verde.style.backgroundColor = '#000000e7';
}

function verdeLigado() {
    vermelho.style.backgroundColor = '#000000e7';
    amarelo.style.backgroundColor = '#000000e7';
    verde.style.backgroundColor = 'green';
}