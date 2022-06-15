

document.addEventListener('DOMContentLoaded', function() {

    let horai = document.querySelector('.horai')
    let horaf = document.querySelector('.horaf')
    let desc = document.querySelector('.desc')

    horai.innerHTML = localStorage.getItem('horai_NT')
    horaf.innerHTML = localStorage.getItem('horaf_NT')
    desc.innerHTML = localStorage.getItem('descricao_NT')



})