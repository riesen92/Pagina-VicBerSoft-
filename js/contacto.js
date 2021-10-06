
function validacionDatos(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let mensaje = document.getElementById("mensaje");
    
    if(nombre.value == ''){
        nombre.classList.remove("exito");
        nombre.classList.add("error");
    }else{
        nombre.classList.remove("error");
        nombre.classList.add("exito");
    }
    if(apellido.value == ''){
        apellido.classList.remove("exito");
        apellido.classList.add("error");
    }else{
        apellido.classList.remove("error");
        apellido.classList.add("exito");
    }
    if(email.value == ''){
        email.classList.remove("exito");
        email.classList.add("error");
    }else{
        email.classList.remove("error");
        email.classList.add("exito");
    }
    if(telefono.value == ''){
        telefono.classList.remove("exito");
        telefono.classList.add("error");
    }else{
        telefono.classList.remove("error");
        telefono.classList.add("exito");
    }

    if(mensaje.value == ''){
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}