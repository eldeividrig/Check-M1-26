/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 9
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    countArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function (array) {  
  /* Forma 1 larga
  if (array.flat().length === 0) {
    return -1
  };
  let count = 0
  function countDeep(arr) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        countDeep(arr[i]);
      }
      count++
    }
    return count;
  }
  let cont = countDeep(array) - 1;
  function flattenDeep(arr1) {
    return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
  }
  let arr = flattenDeep(array);
  let suma = arr.reduce((a, b) => {
    return a + b;
  });
  suma
  return (suma - cont);*/

  //Forma 2 corta 

  let suma = 0;
    let countArr = 0;
    if (array.flat().length === 0) {
      return -1
    };
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            countArr++;
            suma += restArray(array[i]);
        } else {
            suma += array[i];
        }
    }
    return (suma - countArr);
};

// No modifiques nada debajo de esta linea //

module.exports = restArray;