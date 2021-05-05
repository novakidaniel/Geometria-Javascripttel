function négyzet( )
{
var a,kerület,terület;
a = parseInt(document.getElementById("négyzet").value);
kerület = 4*a;
terület = a*a;
document.getElementById("nkerület").innerHTML="A négyzet kerülete: "+kerület;
document.getElementById("nterület").innerHTML="A négyzet területe: "+terület;
}

function téglalap( )
{
var magasság = document.getElementById('magasság').value;
var szélesség = document.getElementById('szélesség').value;
var tkerület = 2*(+magasság + +szélesség);
var tterület = magasság * szélesség;
document.getElementById("tkerület").innerHTML="A téglalap kerülete: "+tkerület;
document.getElementById("tterület").innerHTML="A téglalap területe: "+tterület;
}