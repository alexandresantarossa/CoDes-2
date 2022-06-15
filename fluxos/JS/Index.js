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





    tecla.addEventListener('click', function(){

        if (input.value == 0){
            um()
        }
        else {
            
        }
    })

})