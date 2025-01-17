function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let array = [];
  for (let i = 0; i < 10; i++) {
    num += 2;
    array.push(num);
    if (num === i) {
      break;
    }
  }
  if (array.length === 10) {
    return array;
  } else {
    return 'Se interrumpió la ejecución';
  }
}

module.exports = breakStatement;
