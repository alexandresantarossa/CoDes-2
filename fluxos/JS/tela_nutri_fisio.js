
document.addEventListener('DOMContentLoaded', function() {

    // Variaveis
    let botao = document.querySelector('.botao')
    let cases = document.querySelectorAll('.case')



    // Fazendo busca
    function remove(){

        cases = document.querySelectorAll('.case')
        for (var i=0; i<cases.length; i++){
            cases[i].classList.remove('hidden')
        }

    }
    
    botao.addEventListener('click', function(event){
        event.preventDefault()
        remove()
    })

    // Extraindo dados da consulta selecionada
    let case0 = cases[0]
    let case1 = cases[1]
    let case2 = cases[2]
    let case3 = cases[3]

    case0.addEventListener('click', function(){
        txt = case0.querySelector('.texto')
        valor = txt.innerHTML
        localStorage.setItem('descricao', valor)
        img = case0.querySelector('img')
        foto = img.getAttribute('src')
        localStorage.setItem('foto', foto)
        cx_nome = case0.querySelector('.nomes')
        nome = cx_nome.innerHTML
        localStorage.setItem('nome_medico', nome)

    })

    case1.addEventListener('click', function(){
        txt = case1.querySelector('.texto')
        valor = txt.innerHTML
        localStorage.setItem('descricao', valor)
        img = case1.querySelector('img')
        foto = img.getAttribute('src')
        localStorage.setItem('foto', foto)
        cx_nome = case1.querySelector('.nomes')
        nome = cx_nome.innerHTML
        localStorage.setItem('nome_medico', nome)

    })

    case2.addEventListener('click', function(){
        txt = case2.querySelector('.texto')
        valor = txt.innerHTML
        localStorage.setItem('descricao', valor)
        img = case2.querySelector('img')
        foto = img.getAttribute('src')
        localStorage.setItem('foto', foto)
        cx_nome = case2.querySelector('.nomes')
        nome = cx_nome.innerHTML
        localStorage.setItem('nome_medico', nome)

    })

    case3.addEventListener('click', function(){
        txt = case3.querySelector('.texto')
        valor = txt.innerHTML
        localStorage.setItem('descricao', valor)
        img = case3.querySelector('img')
        foto = img.getAttribute('src')
        localStorage.setItem('foto', foto)
        cx_nome = case3.querySelector('.nomes')
        nome = cx_nome.innerHTML
        localStorage.setItem('nome_medico', nome)

    })

})

