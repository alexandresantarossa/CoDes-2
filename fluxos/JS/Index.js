document.addEventListener('DOMContentLoaded', function() {

    let tecla = document.querySelector('.botao')
    let quadro = document.querySelector('escrita')

    function um(){
        
        a = document.createElement('p')
        a.innerHTML = 'O campo de texto está vazio'
        quadro.appendChild(a)
        a.style.color = 'red'
        a.style.marginLeft = '1.4rem'
        a.style.marginBottom = '1rem'
    }




    tecla.addEventListener('click', function(){

        if (input.value == 0){
            um()
        }
        else {
            
        }
    })

    localStorage.setItem('tsegunda', 0)
    localStorage.setItem('tterca', 0)
    localStorage.setItem('tquarta', 0)
    localStorage.setItem('tquinta', 0)
    localStorage.setItem('tsexta', 0)
    localStorage.setItem('tsabado', 0)
    localStorage.setItem('tdomingo', 0)
    localStorage.setItem('diaatual', 0)
    

})