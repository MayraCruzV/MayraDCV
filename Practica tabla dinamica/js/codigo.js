function CrearTabla(){
    var filas =parseInt(document.getElementById("Filas").value);
    var columnas =parseInt(document.getElementById("Columnas").value);
    
    for (let x = 0; x < filas; x++) {
        let fa = document.getElementById('Tdinamica').insertRow(x);
        for (let r = 0; r < columnas; r++) {
            let celda = fa.insertCell(r);
            celda.innerHTML = ".....";
        }
    }   
}
