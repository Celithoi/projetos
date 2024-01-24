import './assets/css/style.css';

const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    //console.log(min);

    if(hora < 10) hr ='0'+hora;
    if(min < 10) min ='0'+min;
    if(seg < 10) seg ='0'+seg;


    horas.textContent = hora;
    minutos.textContent = min;
    segundos.textContent = seg;
})