const { BinarySearchTree } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (palabra) {
  // Tu código aca:
  if (palabra === "") return false;
  let valor = palabra.length;
  if (this.contains(valor)) return false;
  else {
    if (valor < this.value.length) {
      if (this.left === null) {
        var newTree = new BinarySearchTree(palabra);
        this.left = newTree;
      } else {
        this.left.insertWord(palabra);
      }
    } else {
      if (this.right === null) {
        var newTree = new BinarySearchTree(palabra);
        this.right = newTree;
      } else {
        this.right.insertWord(palabra);
      }
    }
    return palabra;
  };
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value.length === value) return true;
  if (value < this.value.length && this.left) {
    return this.left.contains(value);
  } else if (value > this.value.length && this.right) {
    return this.right.contains(value);
  }
  return false;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };