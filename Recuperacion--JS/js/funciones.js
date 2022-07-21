
function Resultado(){
   
var entrada = document.getElementById('entrada');
let entradaa = entrada.value;

let divisa = document.getElementById('divisa');
let divisaa = divisa.value;

let pasar = document.getElementById('convertir');
let pasaar = pasar.value;
var date = new Date().toLocaleDateString();

var date1 = new Date();
var hora = date1.getHours();
var minuto = date1.getMinutes();
var segundo = date1.getSeconds();

var horaImprimible = hora + ":" + minuto + ":" + segundo;

switch(divisaa){
    
    case "Peso_mexicano":
        var pesom;
        if (pasaar==="Peso_mexicano"){
            pesom = 1;
            var con=(pesom*entradaa)/1;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            pesom = 0.049;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            pesom = 0.048;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            pesom=0.063;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            pesom=210.43;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            pesom=0.041;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            pesom=6.74;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            pesom=0.33;
            var con=pesom*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;

    case "Dolar":
        var dolarr;
        if (pasaar==="Peso_mexicano"){
            dolarr=20.51;
            var con=dolarr*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            dolarr=20.51;
            var con=(dolarr*entradaa)/20.51;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            dolarr= 0.98;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            dolarr= 1.29;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            dolarr= 4317.15;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            dolarr= 0.83;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            dolarr= 138.19;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            dolarr= 6.75;
            var con=dolarr*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;


    case "Euro":
        var euroo;
        if (pasaar==="Peso_mexicano"){
           euro= 20.99;
           var con=euroo*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            euro=  1.02;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
          euroo=20.99;
          var con=(euroo*entradaa)/20.99;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            euroo=  1.32;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            euroo=4415.47;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            euroo=0.85;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            euroo= 141.34;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            euroo=  6.90;
            var con=euroo*entradaa;
             document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;
        
    case "Dolar_canadiense":
        var dolarc;
        if (pasaar==="Peso_mexicano"){
           dolarc=15.94;
           var con=dolarc*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            dolarc=0.78;
            var con=dolarc*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            dolarc=0.76;
           var con=dolarc*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            dolarc=15.94;
           var con=(dolarc*entradaa)/15.94;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            dolarc=3354.21;
           var con=dolarc*entradaa;
           document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            dolarc=0.65;
            var con=dolarc*entradaa;
            document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            dolarc=107.35;
            var con=dolarc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            dolarc=5.24;
           var con=dolarc*entradaa;
           alert(con);
        }    
    break;

    case "Peso_colombiano":
        var pesoc;
        if (pasaar==="Peso_mexicano"){
            pesoc=0.0047;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            pesoc=0.00023;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            pesoc=0.00023;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            pesoc=0.00030;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            pesoc=0.0047;
            var con=(pesoc*entradaa)/0.0047;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            pesoc=0.00019;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            pesoc=0.032;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            pesoc=0.0016;
            var con=pesoc*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }    
    break;

    case "Libra":
        var libraa;
        if (pasaar==="Peso_mexicano"){
            libraa=24.62;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            libraa=1.20;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            libraa=1.17;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            libraa=1.54;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            libraa=5181.88;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            libraa=24.62;
            var con=(libraa*entradaa)/24.62;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            libraa=165.84;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            libraa=8.10;
            var con=libraa*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;

    case "Yen":
        var yenn;
        if (pasaar==="Peso_mexicano"){
            yenn=0.15;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            yenn=0.0072;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            yenn=0.0071;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            yenn=0.0093;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            yenn=31.24;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            yenn=0.0060;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yen"){
            yenn=0.15;
            var con=(yenn*entradaa)/0.15;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Yuan"){
            yenn=0.049;
            var con=yenn*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;

    case "Yuan":
       var yuann;
        if (pasaar==="Peso_mexicano"){
         yuann= 3.04;
         var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if (pasaar==="Dolar"){
            yuann= 0.15;
         var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Euro"){
            yuann=0.14 ;
         var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Dolar_canadiense"){
            yuann=0.19 ;
         var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Peso_colombiano"){
            yuann= 640.05;
         var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }else if(pasaar==="Libra"){
            yuann=0.12 ;
            var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
            }else if(pasaar==="Yen"){
            yuann=20.49 ;
            var con=yuann*entradaa;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
            }else if(pasaar==="Yuan"){
            yuann=3.04 ;
         var con=(yuann*entradaa)/3.04;
    document.form1.resultado.value = ("Hola Mayra el resultado de tu conversion es: "+con+"  "+"("+date+" "+horaImprimible+")");
        }
        break;    
    }
        
}
