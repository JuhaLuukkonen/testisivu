"use strict";

var hidden = Math.round(Math.random()*10+0.5);
var counter = 0;
console.log(hidden);

function check_guess() {
    counter++;
    var n = Number(document.getElementById('n').value);
    var result = 'Oikein kun olet tehnyt ' + counter + ' arvausta! - Olet kaivostietouden Kuningatar!';
    if (n < hidden) {
        result = n + ' Arvasit kaivosten määrän liian pieneksi!';
    }
    if (n > hidden) {
        result = n + ' Arvasit kaivosten määrän liian suureksi!';
    }
    document.getElementById('result').innerHTML = result;
    return false;
}

document.getElementById('go').addEventListener('click', check_guess);