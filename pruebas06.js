

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



BinarySearchTree.prototype.searchMaxTwo = function () {
    // Tu código aca:
    let arr = [];
    if (this.right.right){
        return this.right.searchMaxTwo();
    }else{
        arr.push(this.value)
        arr.push(this.right.value);
        return arr;
    } 
};


var tree = new BinarySearchTree(16);
tree.insert(6);
    tree.insert(23);
    tree.insert(22);
    tree.insert(14);
    tree.insert(-3);
    tree.insert(17);
    tree.insert(-4);
    tree.insert(33);
    tree.insert(5);
    tree.insert(15);
    tree.insert(-10);
    tree.insert(3);
    tree.insert(44);
    tree.insert(2);

console.log(tree.searchMaxTwo());