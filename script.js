const fecha = document.getElementById('fecha')
const frase = document.getElementById('frase')
const lista = document.getElementById('lista')
const botonEnter = document.getElementById('enter')
const input = document.getElementById('input')
const saludo = document.getElementById('saludo')
const backdrop = document.getElementById('background')
const eliminar = document.getElementById('eliminar')
const check = 'fa-square-check'
const uncheck = 'fa-square'
let lineThrough = 'complete'
let id = 0 
const list=[]


const fechaActual = new Date();
const día = fechaActual.getDate();
const mes = fechaActual.getMonth();
const año = fechaActual.getFullYear();
fecha.innerHTML = `${día}/${mes}/${año}`;



const hora = new Date().getHours();
const agregarFrase = (hora) => {
    const saludoMañana = '¡Good morning!';
    const fraseMañana = '¿Que tenemos para hoy?'
    const saludoTarde = '¡Good Afternoon!';
    const fraseTarde = 'No te rindas ahora'
    const saludoNoche = '¡Good night!'
    const fraseNoche = 'Excelente'
    

    if (hora >= 13 && hora <= 18) {
        saludo.innerHTML = saludoTarde
        frase.innerHTML = fraseTarde
    } else if (hora >= 18 && hora <= 23){
        saludo.innerHTML = saludoNoche
        frase.innerHTML = fraseNoche
    }
    else {
        saludo.innerHTML = saludoMañana;
        frase.innerHTML = fraseMañana
    }
};
agregarFrase(hora);

function agregarTarea(tarea, id, realizado, eliminado ) {

    if(eliminado){return}

    const REALIZADO = realizado ? check : uncheck
    const LINE = realizado ? lineThrough : ''
    const elemento = 
            `<li id="elemento">
            <i class="fa-regular ${REALIZADO}" data="realizado" id=${id}></i>
            <p class="text ${LINE}">${tarea}</p>
            <i id="eliminar" class="fa-regular fa-square-minus" data="eliminado" id=${id}></i></li>
            `
    lista.insertAdjacentHTML("beforeend", elemento);
}
//

function tareaRealizada(element){
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    list[element.id].realizado = list[element.id].realizado ? false : true
}


botonEnter.addEventListener('click', ()=>{
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea, id, false, false)
        list.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false,
        })
    }
    
    input.value = "";
    id++
})

document.addEventListener('keyup', function(event){
    if(event.key=='Enter'){
        const tarea = input.value
    if(tarea){
        agregarTarea(tarea, id, false, false)
        list.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false,
        })
    }
    input.value = "";
    id++
    }
}) 

lista.addEventListener('click', function(event){
    const element = event.target
    const elementData = element.attributes.data.value

    if(elementData==='realizado'){
        tareaRealizada(element)
        console.log(element)
    }else if (elementData==='eliminado'){
        tareaEliminada(element)
    }
})

function tareaEliminada (element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    list[element.id].eliminado = true 
}

let a = 2
let b = 3
console.log(a + b)