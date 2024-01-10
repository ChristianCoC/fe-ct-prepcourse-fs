const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  const propiedades = propiedad.split(".");
  let valor = objeto;
  for (let prop of propiedades) {
    valor = valor[prop];
    if (valor === undefined) {
      return undefined;
    }
  }
  return valor;
};


module.exports = obtenerValorPropiedad;
