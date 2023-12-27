function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  const numString = num.toString();
  if (numString.length === 3) {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
