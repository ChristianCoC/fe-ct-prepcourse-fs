function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  const newObjeto = { ...objeto };

  if (Object.prototype.hasOwnProperty.call(newObjeto, propiedad)) {
    newObjeto[propiedad] = valor;
  } else {
    newObjeto[propiedad] = valor;
  }

  return newObjeto;
}

module.exports = actualizarValorPropiedad;
