let lugares = [
  "Glaciar Perito Moreno",
  "Cataratas del Iguazú",
  "Playas de Mar del Plata",
  "Cerros de Córdoba",
]; // aquí vuelvo a escribir los lugares que escribí anteriormente
function ordenar() {
  document.getElementById("ordenamiento").innerHTML +=
    "<br>" + lugares.sort() + "<br>";
} //con esta función los ordeno alfabéticamente gracias al método sort
console.log(lugares.sort());
