const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. 
   Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  /*if (this.head !== null) {
    let current = this.head;
    let status = true
    while (status) {
      status = false;
      while (current.next !== null) {
        if (current.value < current.next.value) {
          let aux = current.value;
          current.value = current.next.value;
          current.next.value = aux;
          //[current.value, current.next.value] = [current.next.value, current.value];
          status = true
        }
        current = current.next;
      }
      current = this.head
    }
  } else { return false }*/
  let current = this.head;
  if (!this.head) return false;
  let check = true;
  while (check) {
    check = false;
    while (current.next) {
      if (current.value < current.next.value) {
        let aux = current.value;
        current.value = current.next.value;
        current.next.value = aux;
        check = true;
      }
      current = current.next
    }
    current = this.head;
  }
  return current;
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};