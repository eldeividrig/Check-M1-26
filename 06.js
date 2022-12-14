const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // Tu código aca:
  //let arr = [];
  if (this.right.right) {
    return this.right.searchMaxTwo();
  } else {
    //arr.push(this.right.value);    
    //arr.push(this.value)
    return [this.right.value,this.value];
  }
};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
