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

var linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(5);
linkedList.add(7);
linkedList.add(8);
linkedList.add(12);
linkedList.add(3);

var linkedList2 = new LinkedList();
    linkedList2.add(1);
    linkedList2.add(2);
    linkedList2.add(3);
    linkedList2.add(4);
    linkedList2.add(5);

LinkedList.prototype.sortList = function () {
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
    }else { return false }*/
    return current;
    
};
console.log(linkedList.sortList());

console.log(linkedList2.sortList());
