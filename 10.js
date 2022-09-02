// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  for (let clave in obj) {
    array.push(obj[clave]);
  }
  let arr = array;
  for (let i = 1; i < arr.length; i++) {
    let aux = arr[i];
    let j = i - 1;
    while ((j >= 0) && (aux < arr[j])) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = aux;
  }
  return (arr);

}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;