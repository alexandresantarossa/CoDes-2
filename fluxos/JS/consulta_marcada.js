
document.addEventListener('DOMContentLoaded', function() {

    let medico = document.querySelector('.doutor')
    let hora = document.querySelector('.hora_consulta')

    medico.innerHTML = localStorage.getItem('nome_medico')
    hora.innerHTML = localStorage.getItem('hora_consulta')

})