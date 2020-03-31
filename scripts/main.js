
// buscar en el html elementos que tengan la clase síntoma
var sintomas = document.querySelectorAll('.sintoma');

var fiebre = document.querySelector('.fiebre');
var escalofrios = document.querySelector('.escalofrios');
var vomito = document.querySelector('.vomito');
var debilidad = document.querySelector('.debilidad');

// buscar en el html un elemento de tipo button
var button = document.querySelector('button');

// función a ejecutar cuando el evento se dispare
function clickEnBoton () {
  
  if(fiebre.checked && escalofrios.checked && vomito.checked){
    console.log('Diagnóstico: algo peor');
  } else if(fiebre.checked && escalofrios.checked){
    console.log('Diagnóstico: algo maluco');
  }

  // recorrer el arreglo de elementos síntoma
  //for(let i = 0; i < sintomas.length; i++){
    // imprimir valor
    // console.log(sintomas[i].checked);
  //}
}
// creamos un "escuchador" del evento tipo click en el elemento button
button.addEventListener('click', clickEnBoton);
