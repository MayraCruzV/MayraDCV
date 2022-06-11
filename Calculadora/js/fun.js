function boton(num)
{
 var x = document.calculador.ans.value;
  document.calculador.ans.value = x+num;
}

function calcula()
{
var c = document.calculador.ans.value;
 document.calculador.ans.value=eval(document.calculador.ans.value)
}
