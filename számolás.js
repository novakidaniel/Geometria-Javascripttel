function négyzet( )
{
var a,kerület,terület;
a = parseInt(document.getElementById("négyzet").value);
kerület = 4*a;
terület = a*a;
document.getElementById("nkerület").innerHTML="A négyzet kerülete: "+kerület;
document.getElementById("nterület").innerHTML="A négyzet területe: "+terület;
}