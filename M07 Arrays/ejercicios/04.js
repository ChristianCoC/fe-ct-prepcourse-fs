function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (array.length === 0) {
    return undefined;
  } else {
    return array[Math.floor(Math.random() * array.length)];
  }
}

module.exports = obtenerElementoAleatorio;
