
document.addEventListener('DOMContentLoaded', function() {

    let doutor = document.querySelector('.nomedoutor')
    let horai = document.querySelector('.horainicial')
    let horaf = document.querySelector('.horafinal')

    doutor.innerHTML = localStorage.getItem('nome_medico')
    horai.innerHTML  = localStorage.getItem('hora_consulta')
    horaf.innerHTML = localStorage.getItem('hora_final')

})