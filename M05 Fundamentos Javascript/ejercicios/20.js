function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un carácter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, también debe retornar "Dato incorrecto".
  // Tu código:
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  if (vocales.includes(letra)) {
    return 'Es vocal';
  } else if (letra.length > 1) {
    return 'Dato incorrecto';
  } else {
    return 'Dato incorrecto';
  }
}

module.exports = esVocal;
