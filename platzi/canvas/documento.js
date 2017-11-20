var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var ln = 31;
var yi, xf;
var yi2, xf2;
while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
dibujarLineas("blue", 0, yi, xf, 300);
console.log("lineas es: " + l);
l = l+1;
}
// pienso lo mismo pero al reverse.
while(ln>0)
{
    yf2 = (ln - 1) * 10;
    xi2 = (ln - 1) * 10;
dibujarLineas("red", 300, yf2, xi2, 0);
//console.log("lineas es: " - ln);
ln = ln-1;
}
// dibujarLineas("yellow", 30, 390, 220,15);

// lienzo.beginPath();//apoyo el lapiz
// lienzo.strokeStyle = "red";// con color rojo
// lienzo.moveTo(100, 100);// moverme de 100x y 100y 
// lienzo.lineTo (200, 200);// hasta 200x y 200y.
// lienzo. stroke();//la traza (la dibuja)
// lienzo. closePath();// y cierra la ruta.

function dibujarLineas(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); 
    lienzo.lineTo (xfinal,yfinal);
    lienzo. stroke();
    lienzo. closePath();
}
