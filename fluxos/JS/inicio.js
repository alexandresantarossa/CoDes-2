
document.addEventListener('DOMContentLoaded', function() {

    let butt = document.querySelectorAll('.case')

    butt0 = butt[0]
    butt1 = butt[1]
    butt2 = butt[2]
    butt3 = butt[3]


    butt0.addEventListener('click', function(){

        horai = butt0.querySelector('.horai')
        horaf = butt0.querySelector('.horaf')
        desc = butt0.querySelector('.desc')

        localStorage.setItem('horai_NT', horai.innerHTML)
        localStorage.setItem('horaf_NT', horaf.innerHTML)
        localStorage.setItem('descricao_NT', desc.innerHTML)
    })
    butt1.addEventListener('click', function(){

        horai = butt1.querySelector('.horai')
        horaf = butt1.querySelector('.horaf')
        desc = butt1.querySelector('.desc')

        localStorage.setItem('horai_NT', horai.innerHTML)
        localStorage.setItem('horaf_NT', horaf.innerHTML)
        localStorage.setItem('descricao_NT', desc.innerHTML)
    })

    butt2.addEventListener('click', function(){

        horai = butt2.querySelector('.horai')
        horaf = butt2.querySelector('.horaf')
        desc = butt2.querySelector('.desc')

        localStorage.setItem('horai_NT', horai.innerHTML)
        localStorage.setItem('horaf_NT', horaf.innerHTML)
        localStorage.setItem('descricao_NT', desc.innerHTML)
    })

    butt0.addEventListener('click', function(){

        horai = butt3.querySelector('.horai')
        horaf = butt3.querySelector('.horaf')
        desc = butt3.querySelector('.desc')

        localStorage.setItem('horai_NT', horai.innerHTML)
        localStorage.setItem('horaf_NT', horaf.innerHTML)
        localStorage.setItem('descricao_NT', desc.innerHTML)
    })





})