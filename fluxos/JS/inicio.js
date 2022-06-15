
document.addEventListener('DOMContentLoaded', function() {

    let butt = document.querySelector('.case')


    butt.addEventListener('click', function(){

        horai = butt.querySelector('.horai')
        horaf = butt.querySelector('.horaf')
        desc = butt.querySelector('.desc')

        localStorage.setItem('horai_NT', horai.innerHTML)
        localStorage.setItem('horaf_NT', horaf.innerHTML)
        localStorage.setItem('descricao_NT', desc.innerHTML)


    })




})