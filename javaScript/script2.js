let wsp = document.getElementById('img-wsp');
let inst = document.getElementById('img-inst');
let face = document.getElementById('img-face');
wsp.addEventListener('click', ()=>{
    alert("vas a salir de esta página.");
});
inst.addEventListener('click', ()=>{
    alert("vas a salir de esta página.");
});
face.addEventListener('click', ()=>{
    alert("vas a salir de esta página.");
});

let pOcultoBtn = document.getElementById('pOculto-btn');
let pOculto = document.getElementById('pOculto');

pOcultoBtn.addEventListener('click', ()=>{
    pOculto.classList.toggle('mostrar')
    if(pOculto.classList.contains('mostrar')){
        pOcultoBtn.innerHTML = ' ...ver menos';
    } else {
        pOcultoBtn.innerHTML = ' ...ver mas';
    }
});
