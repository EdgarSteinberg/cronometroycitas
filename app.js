let botonElem = document.getElementById('boton-cambiar-cita')
let citaElem = document.getElementById('cita')
let autorElem = document.getElementById('autor')

function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length)
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`
    autorElem.innerText = citas[indiceAleatorio].autor
}

cambiarCita()

botonElem.addEventListener('click', cambiarCita)


//--------------Cronometro----------------

const botonInicioPausa = document.getElementById('boton-inicio-pausa')
const botonReiniciar = document.getElementById('boton-reiniciar')

let [horas, minutos, segundos] = [0, 0, 0,]

let intervaloDeTiempo;
let estadoCronometro = 'pausado'

function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0
        minutos++;

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }
    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`
}

function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo
}

botonInicioPausa.addEventListener('click', function () {
    if (estadoCronometro === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000)
        botonInicioPausa.innerHTML = `<i class="bi bi-pause-fill"></i>`
        botonInicioPausa.classList.remove('iniciar')
        botonInicioPausa.classList.add('pausar')
        estadoCronometro = 'andando'
    } else {
        window.clearInterval(intervaloDeTiempo)
        botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`
        botonInicioPausa.classList.remove('pausar')
        botonInicioPausa.classList.add('iniciar')
        estadoCronometro = 'pausado'
    }
})

botonReiniciar.addEventListener('click', function () {
    window.clearInterval(intervaloDeTiempo)

    horas = 0;
    minutos = 0;
    segundos = 0;

    // ReiniciAr
    cronometro.innerText = `00:00:00`;

    // Actualizar botones
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`
    botonInicioPausa.classList.remove('pausar')
    botonInicioPausa.classList.add('iniciar')


    // Estado
    estadoCronometro = 'pausado'
})