

document.addEventListener('DOMContentLoaded', function() {

    let horai = document.querySelector('.horai')
    let horaf = document.querySelector('.horaf')
    let desc = document.querySelector('.desc')
    let voltar = document.querySelector('.aesquerda')

    horai.innerHTML = localStorage.getItem('horai_NT')
    horaf.innerHTML = localStorage.getItem('horaf_NT')
    desc.innerHTML = localStorage.getItem('descricao_NT')

    verifica = localStorage.getItem('checa')

    if (verifica=='inicio'){
        voltar.setAttribute('href', '../HTML/inicio.html')
    }
    if (verifica=='agenda2'){
        voltar.setAttribute('href', '../HTML/tela_agenda2.html')
    }



})