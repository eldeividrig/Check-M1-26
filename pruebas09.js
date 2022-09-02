function BinarySearchTree(valor) {
    this.value = valor;
    this.left = null;
    this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {

    if (value < this.value) {
        if (this.left === null) {
            var newTree = new BinarySearchTree(value);
            this.left = newTree;
        } else {
            this.left.insert(value);
        }
    } else {
        if (this.right === null) {
            var newTree = new BinarySearchTree(value);
            this.right = newTree;
        } else {
            this.right.insert(value);
        }
    }
}

BinarySearchTree.prototype.contains = function (value) {
    if (this.value.length === value) return true;
    if (value < this.value.length && this.left) {
        return this.left.contains(value);
    } else if (value > this.value.length && this.right) {
        return this.right.contains(value);
    }
    return false;
}

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
    };

};



let arbolDePalabras = new BinarySearchTree("Palabra");
console.log(arbolDePalabras.insertWord("Nicolas"));
arbolDePalabras.insertWord("Jorge");
arbolDePalabras.insertWord("Morita");
arbolDePalabras.insertWord("Mate");
arbolDePalabras