
let boton = document.getElementById('btn-ingreso');

boton.addEventListener('click', ()=>{
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad >= 18) {
        alert("Bienvenido.");
} else {
        alert("Ingresara bajo su propia responsabilidad.");
    }
}); 