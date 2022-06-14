
document.addEventListener('DOMContentLoaded', function() {

    let descricao = localStorage.getItem('descricao')
    let caixa_descricao = document.querySelector('.descricao')
    let foto = document.querySelector('.imgperfil')
    let nome_medico = document.querySelector('h2')

    caixa_descricao.innerHTML = descricao
    nomefoto = localStorage.getItem('foto')
    foto.setAttribute('src', nomefoto)
    nome = localStorage.getItem('nome_medico')
    nome_medico.innerHTML = nome


    



})