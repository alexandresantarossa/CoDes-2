

document.addEventListener('DOMContentLoaded', function() {

    let caixa = document.querySelectorAll('.tabela')



    cx0 = caixa[0]
    cx1 = caixa[1]
    cx2 = caixa[2]
    cx3 = caixa[3]
    cx4 = caixa[4]
    cx5 = caixa[5]
    cx6 = caixa[6]

    verdes = document.querySelectorAll('.comborda')

    console.log(localStorage.getItem('tquarta'))

    if (localStorage.getItem('tsegunda')!=0){
        verdes[0].innerHTML = localStorage.getItem('tsegunda')
    }
    if (localStorage.getItem('tterca')!=0){
        verdes[1].innerHTML = localStorage.getItem('tterca')
    }
    if (localStorage.getItem('tquarta')!=0){
        verdes[2].innerHTML = localStorage.getItem('tquarta')
    }
    if (localStorage.getItem('tquinta')!=0){
        verdes[3].innerHTML = localStorage.getItem('tquinta')
    }
    if (localStorage.getItem('tsexta')!=0){
        verdes[4].innerHTML = localStorage.getItem('tsexta')
    }
    if (localStorage.getItem('tsabado')!=0){
        verdes[5].innerHTML = localStorage.getItem('tsabado')
    }
    if (localStorage.getItem('tdomingo')!=0) {
        verdes[6].innerHTML = localStorage.getItem('tdomingo')
    }


    cx0.addEventListener('click', function(){

        dia = cx0.querySelector('p')
        treino = cx0.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx1.addEventListener('click', function(){

        dia = cx1.querySelector('p')
        treino = cx1.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx2.addEventListener('click', function(){

        dia = cx2.querySelector('p')
        treino = cx2.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx3.addEventListener('click', function(){

        dia = cx3.querySelector('p')
        treino = cx3.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx4.addEventListener('click', function(){

        dia = cx4.querySelector('p')
        treino = cx4.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx5.addEventListener('click', function(){

        dia = cx5.querySelector('p')
        treino = cx5.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })
    cx6.addEventListener('click', function(){

        dia = cx6.querySelector('p')
        treino = cx6.querySelector('.comborda')
        localStorage.setItem('diaatual', dia.innerHTML)
        localStorage.setItem('treino', treino.innerHTML)
    })



})