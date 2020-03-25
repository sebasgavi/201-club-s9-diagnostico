
var sintomas = document.querySelectorAll('.sintoma');

var button = document.querySelector('button');
function clickEnBoton () {
  for(let i = 0; i < sintomas.length; i++){
    console.log(sintomas[i].checked);
  }
  
}
button.addEventListener('click', clickEnBoton);
