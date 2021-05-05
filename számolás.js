function négyzet( )
{
var a,kerület,terület;
a = parseInt(document.getElementById("négyzet").value);
kerület = 4*a;
terület = a*a;
document.getElementById("nkerület").innerHTML="A négyzet kerülete: "+kerület+" cm";
document.getElementById("nterület").innerHTML="A négyzet területe: "+terület+" cm²";
}

function téglalap( )
{
var magasság = document.getElementById('magasság').value;
var szélesség = document.getElementById('szélesség').value;
var tkerület = 2*(+magasság + +szélesség);
var tterület = magasság * szélesség;
document.getElementById("tkerület").innerHTML="A téglalap kerülete: "+tkerület+" cm";
document.getElementById("tterület").innerHTML="A téglalap területe: "+tterület+" cm²";
}

function kocka( )
{
var a,felszín,térfogat;
a = parseInt(document.getElementById("kocka").value);
felszín = 6*(a*a);
térfogat = a*a*a;
document.getElementById("kfelszín").innerHTML="A kocka felszíne: "+felszín+" cm²";
document.getElementById("ktérfogat").innerHTML="A kocka térfogata: "+térfogat+" cm³";
}

function téglatest( )
{
var thosszúság = document.getElementById('thosszúság').value;
var tszélesség = document.getElementById('tszélesség').value;
var tmagasság = document.getElementById('tmagasság').value;
var tfelszín = 2*(thosszúság*tszélesség + thosszúság*tmagasság + tszélesség*tmagasság);
var ttérfogat = thosszúság * tmagasság * tszélesség;
document.getElementById("tfelszín").innerHTML="A téglatest felszíne: "+tfelszín+" cm²";
document.getElementById("ttérfogat").innerHTML="A téglatest térfogata: "+ttérfogat+" cm³";
}