function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }
  const min = Math.min(...numeros);
  const max = Math.max(...numeros);
  const sumaTotal = ((max - min + 1) * (min + max)) / 2;
  const sumaReal = numeros.reduce((a, b) => a + b, 0);
  const numeroFaltante = sumaTotal - sumaReal;
  return numeroFaltante === 0 ? null : numeroFaltante;
}

module.exports = encontrarNumeroFaltante;