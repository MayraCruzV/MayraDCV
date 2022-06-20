
let error=false;
function pruebaemail(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
   
    if (!re.exec(valor)) {
        error =true;
        return Swal.fire('email no valido'); 
    }
    else{
        return Swal.fire('email valido'); 
        
     } 
}

function validarNombre(valor) {
    oe = /^[a-zA-ZÀ-ÿ\s]{1,30}$/
    if (!oe.exec(valor) ) {
        error =true;
        return Swal.fire('nombre no valido o el campo esta vacio');
    }
    else return Swal.fire('nombre valido');
}

function validarApellidos(valor) {
    oe = /^[a-zA-ZÀ-ÿ\s]{1,30}$/
    if (!oe.exec(valor)) {
        error =true;
        return Swal.fire('apellido no valido');
    }
    else return Swal.fire('apellido valido');
}

function validarCalle(valor) {
    oe = /^[a-zA-ZÀ-ÿ\s]{1,25}$/
    if (!oe.exec(valor)) {
        error =true;
        return Swal.fire('calle no valido');
    }
    else return Swal.fire('calle valido');
}

function validarNumero(valor) {
    oe = /^\d{1,4}$/ // 7 a 14 numeros.
    if (!oe.exec(valor)) {
                error =true;
        return Swal.fire('calle no valido');
    }
    else return Swal.fire('calle valido');
}

function validarColonia(valor) {
    oe = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    if (!oe.exec(valor)) {
        error =true;
        return Swal.fire('colonia no valido');
    }
    else return Swal.fire('colonia valido');
}

function validarTelefono(valor) {
    oe = /^\d{7,14}$/
    if (!oe.exec(valor)) {
        error =true;
        return Swal.fire('telefono no valido');
    }
    else return Swal.fire('telefono valido');
}

function boton() {
if (error!=true) {
    Swal.fire({
        title: 'No se pudo llenar el formulario',
        html: "No se ha llenado correctamente el Formulario!",
        timer: 1000000
    })  
} else {
   Swal.fire({
       title: 'Formulario llenado correctamente',
       html: " Has llenado correctamente el Formulario, enviado!",
       timer: 1000000
   })   
}
}
