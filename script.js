// Arreglo con colores
const colores = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6', '#33FFF7'];

// Selecciona el botón
const boton = document.getElementById('colorButton');

// Evento al hacer clic
boton.addEventListener('click', () => {
    // Generar un índice aleatorio para el arreglo de colores
    const indiceAleatorio = Math.floor(Math.random() * colores.length);

    // Cambiar el color de fondo del body
    document.body.style.backgroundColor = colores[indiceAleatorio];
});