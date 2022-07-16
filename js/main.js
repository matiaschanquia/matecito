
var inactivo

const botones = document.querySelectorAll(".boton-leer")
const parrafos = document.querySelectorAll(".lineas-fuera")

var contador = 0;
botones.forEach((boton, index) => {
    boton.addEventListener("click", function() {
        cambiarLeer(index)
    })
})

function cambiarLeer(index) {
    if (contador !== 0)
    {
        botones[inactivo].classList.remove("display-none")
        parrafos[inactivo].classList.add("lineas-fuera")
    }
    botones[index].classList.add("display-none")
    parrafos[index].classList.remove("lineas-fuera")
    inactivo = index
    contador += 1
}