

function numpoi(num){
 
    var num =parseInt(document.getElementById("num1").value); 

    if (num>=1 && num<=100) {
        if(num%2==0){
            Swal.fire('El numero es par');

        }else{
            Swal.fire("El numero es impar");
    
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa un numero del 1 al 100'
          })
    }
}

function factorial(num){
    var num =parseInt(document.getElementById("num2").value); 
    var r=1;
    for (let index = 1; index <=num; index++) {
    r=r*index;        
    }
    Swal.fire('El factorial es: '+r);
}


function iva(can){
    var can =parseFloat(document.getElementById("num3").value); 
    var iva;
    iva = (can *.16);
    var pt = can+iva;
    Swal.fire({
        title:'Calculando IVA',
        html:"El precio sin IVA es: "+ can+ "<br>El IVA es: "+iva+"<br>El precio total mas el IVA es: "+ pt
      })
}