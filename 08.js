/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 10
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
// number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
// la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16

function countDeep(arr) {
  // Tu código aca: 
  function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  }
  let count = 0
  function countArr(arr) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        countArr(arr[i]);
      }
      count++
    }
    return count;
  }
  let nroArr = countArr(arr);
  let arr1 = flattenDeep(arr);
  let string = 0;
  let number = 0;
  let boolean = 0;
  let unde = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === 'string') string++;
    if (typeof arr1[i] === 'boolean') boolean++;
    if (typeof arr1[i] === 'number') number++;
    if (arr1[i] === undefined) unde++;
  };
  return total = Math.pow((((nroArr - number) * string) / boolean), unde); 
}



// No modifiques nada debajo de esta linea //

module.exports = countDeep;
