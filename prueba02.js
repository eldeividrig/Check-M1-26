function LinkedList() {
    this.head = null;
}
function Node(valor) {
    this.value = valor;
    this.next = null;
}

LinkedList.prototype.add = function (valor) {
    var nuevoNodo = new Node(valor);

    if (!this.head) {
        this.head = nuevoNodo;
    } else {
        var tailActual = this.head;
        while (tailActual.next !== null) {
            tailActual = tailActual.next;
        }
        tailActual.next = nuevoNodo;
    }
}

LinkedList.prototype.search = function (arg) {
    var nodoActual = this.head;

    if (nodoActual === null) {
        return null;
    }

    while (nodoActual !== null) {
        if (typeof arg === "function") {
            if (arg(nodoActual.value)) {
                return nodoActual.value;
            }
        } else if (nodoActual.value === arg) {
            return nodoActual.value;
        }
        nodoActual = nodoActual.next;
    }

    return null;
}

var linkedList = new LinkedList();
var linkedList2 = new LinkedList();
var linkedList3 = new LinkedList();
linkedList.add(2);
linkedList.add(10);
linkedList.add(2);
linkedList.add(8);
linkedList.add(8);
linkedList.add(1);

LinkedList.prototype.simplifyList = function () {
    // Tu código aca:
    let current = this.head;
    let arr = [];
    if (!this.head) return false;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    let arrNuevo = arr.filter((valor, indice) => {
        return arr.indexOf(valor) === indice;
    });
    this.head = null
    while (arrNuevo.length > 0) {
        this.add(arrNuevo.shift())
    }
    return this.head
};


console.log(linkedList.simplifyList());