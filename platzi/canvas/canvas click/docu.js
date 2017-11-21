var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoporclick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLineas(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); 
    lienzo.lineTo (xfinal,yfinal);
    lienzo. stroke();
    lienzo. closePath();
}
function dibujoporclick()
{
   
    var l = 0;
    var yi, xf;
    var lineas= parseInt(texto.value);
    var espacio = ancho / lineas;
    while(l < lineas)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
    dibujarLineas("green", 0, yi, xf, 300);
    console.log("lineas es: " + l);
    l = l+1;
    }
    alert("No me toques ahi!" );
}