

document.addEventListener('DOMContentLoaded', function() {

    let butt = document.querySelector('.botaosalvar')
    let txt = document.querySelector('textarea')

    var intermed = localStorage.getItem('diaatual')

    butt.addEventListener('click', function(){

        localStorage.setItem('novotreino', txt.value)
        ultimodia = localStorage.getItem('diaatual')
        localStorage.setItem('ultimodia', ultimodia)
        
        if (intermed=='\n                            Segunda\n                        '){
            localStorage.setItem('tsegunda', txt.value)
        }
        if (intermed=='\n                            Terça\n                        '){
            localStorage.setItem('tterca', txt.value)
        }
        if (intermed=='\n                            Quarta\n                        '){
            localStorage.setItem('tquarta', txt.value)
        }
        if (intermed=='\n                            Quinta\n                        '){
            localStorage.setItem('tquinta', txt.value)
        }
        if (intermed=='\n                            Sexta\n                        '){
            localStorage.setItem('tsexta', txt.value)
        }
        if (intermed=='\n                            Sábado\n                        '){
            localStorage.setItem('tsabado', txt.value)
        }
        if (intermed=='\n                            Domingo\n                        ') {
            localStorage.setItem('tdomingo', txt.value)
        }
    

    })






})