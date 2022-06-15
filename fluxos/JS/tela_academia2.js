


document.addEventListener('DOMContentLoaded', function() {

    let treino = document.querySelector('.treino')
    let title = document.querySelector('h2')
    let botao0 = document.querySelector('.botaoeditar')
    let botao1 = botao0.querySelector('p')

    title.innerHTML = localStorage.getItem('diaatual')

    if ((localStorage.getItem('novotreino') != '') && (localStorage.getItem('ultimodia') == localStorage.getItem('diaatual'))){

        treino.innerHTML = localStorage.getItem('novotreino')
    }
    else{

        treino.innerHTML = localStorage.getItem('treino')

    }

})