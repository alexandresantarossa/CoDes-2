
document.addEventListener('DOMContentLoaded', function() {

    let medico = document.querySelector('.doutor')
    let hora = document.querySelector('.hora_consulta')

    medico.innerHTML = localStorage.getItem('nome_medico')
    hora.innerHTML = localStorage.getItem('hora_consulta')
    fatiando = localStorage.getItem('hora_consulta')
    hora_final = fatiando[0] + fatiando[1] + fatiando[2] + '30'
    localStorage.setItem('hora_final', hora_final)
})
