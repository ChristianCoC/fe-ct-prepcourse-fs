function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.length === 0) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

module.exports = ordenarArray;
