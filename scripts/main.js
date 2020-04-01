
// buscar en el html elementos que tengan la clase síntoma
var sintomas = document.querySelectorAll('.sintoma');

var fiebre = document.querySelector('.fiebre');
var escalofrios = document.querySelector('.escalofrios');
var vomito = document.querySelector('.vomito');
var debilidad = document.querySelector('.debilidad');

// buscar en el html un elemento de tipo button
var button = document.querySelector('button');

var diagnosticos = new Map();
diagnosticos.set('escalofrios fiebre', 'algo maluco');
diagnosticos.set('escalofrios fiebre vomito', 'algo peor');
diagnosticos.set('fiebre', 'solo tiene fiebre');
diagnosticos.set('vertigo vomito', 'rezar');

// función a ejecutar cuando el evento se dispare
function clickEnBoton () {

  var sintomasPresentados = [];

  for(let i = 0; i < sintomas.length; i++){
    // imprimir valor
    let sin = sintomas[i];
    if(sin.checked) {
      // replace reemplaza el primer valor por el segundo
      // trim elimina espacios al inicio y al final
      sintomasPresentados.push(sin.className.replace('sintoma', '').trim());
    }
  }

  function compararLex (a, b) {
    return a.localeCompare(b);
  }
  sintomasPresentados.sort(compararLex);

  console.log(diagnosticos.get(sintomasPresentados.join(' ')));
}
// creamos un "escuchador" del evento tipo click en el elemento button
button.addEventListener('click', clickEnBoton);
