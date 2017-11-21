var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39,
};
console.log(teclas);


//document.addEventListener("keydown", dibujarTeclado);// ó...
document.addEventListener("keyup", dibujarTeclado);
var cuadrito =document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLineas("red", 149,149, 151, 151, papel);

function dibujarLineas(color, xinicial, yinicial,xfinal,yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.lineWidth= 3;
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial); 
    lienzo.lineTo (xfinal,yfinal);
    lienzo. stroke();
    lienzo. closePath();
}
function dibujarTeclado(evento)
{
    var colorcito = "green";
    var movimiento = 5;
    if(evento.keyCode == teclas.UP){
   
    console.log (" arriba");
}

//########################################
//     if(evento.keyCode == teclas.DOWN){

//     console.log ("VAMO PA ABAJO");
// }

//     if(evento.keyCode == teclas.RIGHT){

//     console.log ("VAMO PA LA DERECHA");
// }

//     if(evento.keyCode == teclas.LEFT){

//     console.log ("VAMO PA LA IZQUIERDA");
// }
//###################### Ó TAMBIEN #######################
switch(evento.keyCode)
{
    case teclas.UP:
    dibujarLineas(colorcito, x, y, x, y - movimiento, papel);
    y= y - movimiento;
    console.log("arriba");
    break;

    case teclas.DOWN:
    dibujarLineas(colorcito, x, y, x, y + movimiento, papel);
    y= y + movimiento;
    console.log("abajo");
    break;
    
    case teclas.LEFT:
    dibujarLineas(colorcito, x, y, x - movimiento, y, papel);
    x= x - movimiento;
    console.log("izquierda");
    break;

    case teclas.RIGHT:
    dibujarLineas(colorcito, x, y, x + movimiento, y, papel);
    x= x + movimiento;
    console.log("derecha");
    break;
    default:
    console.log("presionaste otra tecla");
}
}