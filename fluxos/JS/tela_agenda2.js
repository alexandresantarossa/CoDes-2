
document.addEventListener('DOMContentLoaded', function() {

    let dia = document.querySelector('h2')
    let horai = document.querySelector('.horai')
    let horaf = document.querySelector('.horaf')
    let desc = document.querySelector('.desc')

    dia.innerHTML = localStorage.getItem('dia_NT')
    horai.innerHTML = localStorage.getItem('horai_NT')
    horaf.innerHTML = localStorage.getItem('horaf_NT')
    desc.innerHTML = localStorage.getItem('descricao_NT')



})