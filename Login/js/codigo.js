$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });


 function validar(){
    var user =document.getElementById("user").value;
    var pass =document.getElementById("pass").value;

    if(user=="Admin" && pass=="admin123"){
    return mostrarCorrecto();
    }else{
    return mostrarIncorrecto();
}
}
 
function mostrarCorrecto() {
    Swal.fire(
        'Bienvenidos',
        'Admin',
        'success'
      )
}

function mostrarIncorrecto() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error al inicio de sesión',
      })
}