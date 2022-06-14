
document.addEventListener('DOMContentLoaded', function() {

    let cases = document.querySelectorAll('.case')

    case0 = cases[0]
    case1 = cases[1]
    case2 = cases[2]
    case3 = cases[3]

    case0.addEventListener('click', function(){
        dia = case0.querySelector('.dia')
        dia_valor = dia.innerHTML
        localStorage.setItem('dia_NT', dia_valor)
        horai = case0.querySelector('.horai')
        horai_valor = horai.innerHTML
        localStorage.setItem('horai_NT', horai_valor)
        horaf = case0.querySelector('.horaf')
        horaf_valor = horaf.innerHTML
        localStorage.setItem('horaf_NT', horaf_valor)
        texto = case0.querySelector('.texto')
        texto_valor = texto.innerHTML
        localStorage.setItem('descricao_NT', texto_valor)
    })
    case1.addEventListener('click', function(){
        dia = case1.querySelector('.dia')
        dia_valor = dia.innerHTML
        localStorage.setItem('dia_NT', dia_valor)
        horai = case1.querySelector('.horai')
        horai_valor = horai.innerHTML
        localStorage.setItem('horai_NT', horai_valor)
        horaf = case1.querySelector('.horaf')
        horaf_valor = horaf.innerHTML
        localStorage.setItem('horaf_NT', horaf_valor)
        texto = case1.querySelector('.texto')
        texto_valor = texto.innerHTML
        localStorage.setItem('descricao_NT', texto_valor)
    })
    case2.addEventListener('click', function(){
        dia = case2.querySelector('.dia')
        dia_valor = dia.innerHTML
        localStorage.setItem('dia_NT', dia_valor)
        horai = case2.querySelector('.horai')
        horai_valor = horai.innerHTML
        localStorage.setItem('horai_NT', horai_valor)
        horaf = case2.querySelector('.horaf')
        horaf_valor = horaf.innerHTML
        localStorage.setItem('horaf_NT', horaf_valor)
        texto = case2.querySelector('.texto')
        texto_valor = texto.innerHTML
        localStorage.setItem('descricao_NT', texto_valor)
    })
    case3.addEventListener('click', function(){
        dia = case3.querySelector('.dia')
        dia_valor = dia.innerHTML
        localStorage.setItem('dia_NT', dia_valor)
        horai = case3.querySelector('.horai')
        horai_valor = horai.innerHTML
        localStorage.setItem('horai_NT', horai_valor)
        horaf = case3.querySelector('.horaf')
        horaf_valor = horaf.innerHTML
        localStorage.setItem('horaf_NT', horaf_valor)
        texto = case3.querySelector('.texto')
        texto_valor = texto.innerHTML
        localStorage.setItem('descricao_NT', texto_valor)
    })


})