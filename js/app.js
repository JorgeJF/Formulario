function validarFormulario(){
    var formulario = document.getElementById('form');
    formulario.addEventListener('submit', checkForm);
    document.addEventListener('focus', retirarMensajes, true);

}



function checkName(param) {
    let resultado = true;
    let alphaExp = /^[a-zA-Z]+$/;
    let nombre = document.getElementsByName(param)[0];
    if (!(nombre.value.length > 0)) {
        let mensaje = "El campo " +param+ " no puede estar vacío";
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }
    else if (!(nombre.value.match(alphaExp))) {
        let mensaje = "El campo solo puede contener letras";
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }else if (!(nombre.value.length < 2 || nombre.value.length > 15)) {
        console.log("formato correcto");
    }else{
        let mensaje = "El campo " +param+ " tiene entre 2 y 15 caracteres";
        mostrarMensaje(mensaje, 'red');
        resultado = false;

    }
    return (resultado);
}

function checkSelect(param){
    let resultado=true;
    indice = document.getElementById(param).selectedIndex;
    console.log(indice);
    if( indice == null || indice == 0 ) {
        let mensaje = "Aviso: no ha seleccionado valor para el " +param;
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }
    return (resultado);
}

function checkFecha(param){
    let resultado = true;
    let x=document.getElementById(param).value;
    
      let fecha = x.split("-");
      let fecha_form = new Date (fecha[0],fecha[1],fecha[2]);
      console.log(fecha_form);
      //x.setFullYear(fecha[2],fecha[1]-1,fecha[0]);
      console.log(x);
      let hoy = new Date();
      hoy.setHours(0,0,0,0);
      hoy.getTime();
      console.log(hoy);
      console.log(hoy);
      if (fecha_form >= hoy){
        let mensaje = "La fecha no es correcta";
        mostrarMensaje(mensaje, 'red');
        resultado=false;
      }else{
        resultado=true;
      }
    return (resultado);
}
function checkEmail() {
    var resultado = true;
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var email = document.getElementsByName('direccion')[0];
    if (!(email.value.length > 0)) {
        let mensaje = "Rellena el correo electrónico";
        mostrarMensaje(mensaje, 'red');
        48
        resultado = false;
    }
    else if (!(email.value.match(emailExp))) {
        let mensaje = "El email no es correcto";
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }
    return (resultado);
}


function checkTel() {
    let resultado = true;
    let numExp = /^[6|7][0-9]{8}$/;
    let telefono = document.getElementsByName('telefono')[0];
    if (!(telefono.value.match(numExp))) {
        if(telefono.value.match("")){
            resultado = true;
        }else{
            let mensaje = "El teléfono consiste en un movil de espana de 9 números sin espacios";
            mostrarMensaje(mensaje, 'red');
            resultado = false;

        }
        
    }
    return (resultado);
}

function checkPassword(){
    let resultado = true;
    let psswdExp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,100}$/;
    let psswd = document.getElementsByName('psswd')[0];
    if (!(psswd.value.length > 0)) {
        let mensaje = "Debes introducir una contraseña";
        mostrarMensaje(mensaje, 'red');
        48
        resultado = false;
    }
    else if (!(psswd.value.match(psswdExp))) {
        let mensaje = "la contraseña no tiene el formato correcto";
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }
    checkPassword2(psswd);
    return (resultado);
}

function checkPassword2(param){
    let resultado = true;
    let psswd = document.getElementsByName('psswd2')[0];
    if (psswd.value!==param.value) {
        let mensaje = "Las contraseñas no coinciden";
        mostrarMensaje(mensaje, 'red');
        resultado = false;
    }
    return (resultado);

}

function checkForm(e) {
    //retirarMensajes();
    let cn = checkName('nombre');
    let ca = checkName('apellido');
    let ctr = checkSelect('trabajo');
    let cj = checkSelect('jefe');
    let ce = checkEmail();
    let ct = checkTel();
    let cp = checkPassword();
    let cf = checkFecha('fecha');
    if (!(cn && ce && ct && cp && ca && cf))
        e.preventDefault();
}

function mostrarMensaje(m, color) {
    let paraElement = document.createElement('p');
    paraElement.textContent = m;
    paraElement.style.color = color;
    let mensElement = document.getElementById('messages');
    mensElement.appendChild(paraElement);
}

function retirarMensajes(e) {
    let mensContainer = document.getElementById('messages');
    while (mensContainer.firstChild) {
        mensContainer.removeChild(mensContainer.firstChild);
    }
}
