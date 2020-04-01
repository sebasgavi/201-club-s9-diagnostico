var registro = document.querySelector('.registro');
var diagnostico = document.querySelector('.diagnostico');

// ocultar grupo de diagnóstico
diagnostico.style.display = 'none';

// 1. elemento que va a disparar el evento -> input
// 2. tipo de evento a escuchar -> keydown
// 3. acción a realizar cuando este evento se dispare -> function irAlDiagnostico
var inputNombre = document.querySelector('.nombre-usuario');
function irAlDiagnostico (event) {
  if(event.keyCode == 13 && inputNombre.value != ''){
    // mostrar diagnóstico y ocultar registro
    registro.style.display = 'none';
    diagnostico.style.display = 'block';
  }
}
inputNombre.addEventListener('keydown', irAlDiagnostico);


// buscar en el html elementos que tengan la clase síntoma
var sintomas = document.querySelectorAll('.sintoma');

// buscar en el html un elemento de tipo button
var button = document.querySelector('button');

var match = new Map();
match.set('escalofrios fiebre', 'algo maluco');
match.set('escalofrios fiebre vomito', 'algo peor');
match.set('fiebre', 'solo tiene fiebre');
match.set('vertigo vomito', 'rezar');

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

  console.log(match.get(sintomasPresentados.join(' ')));
}
// creamos un "escuchador" del evento tipo click en el elemento button
button.addEventListener('click', clickEnBoton);
