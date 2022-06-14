
document.addEventListener('DOMContentLoaded', function() {

    let horarios = document.querySelectorAll('.hora')

    h0 = horarios[0]
    h01 = horarios[1]
    h02= horarios[2]
    h03 = horarios[3]
    h04 = horarios[4]
    h05 = horarios[5]
    h06 = horarios[6]
    h07 = horarios[7]
    h08 = horarios[8]
    h09 = horarios[9]
    h10 = horarios[10]
    h11 = horarios[11]
    h12 = horarios[12]
    h13 = horarios[13]
    h14 = horarios[14]
    h15 = horarios[15]

    h0.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h0.innerHTML)
    })
    h01.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h01.innerHTML)
    })
    h02.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h02.innerHTML)
    })
    h03.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h03.innerHTML)
    })
    h04.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h04.innerHTML)
    })
    h05.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h05.innerHTML)
    })
    h06.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h06.innerHTML)
    })
    h07.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h07.innerHTML)
    })
    h08.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h08.innerHTML)
    })
    h09.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h09.innerHTML)
    })
    h10.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h10.innerHTML)
    })
    h11.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h11.innerHTML)
    })
    h12.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h12.innerHTML)
    })
    h13.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h13.innerHTML)
    })
    h14.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h14.innerHTML)
    })
    h15.addEventListener('click', function(){
        localStorage.setItem('hora_consulta', h15.innerHTML)
    })


})