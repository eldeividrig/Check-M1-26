function Stack() {
    this.array = [];
}

Stack.prototype.push = function (elemento) {
    this.array.push(elemento);
};

Stack.prototype.pop = function () {
    return this.array.pop();
};

Stack.prototype.size = function () {
    return this.array.length;
};

function crearStack(palabra) {
    // Tu código aca:    
    if (palabra === "") return false;
    var stack = new Stack;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "*") {
            if (stack.size() === 0) {
                return "Stack vacío";
            } else {
                stack.pop();
            }
        } else {
            stack.push(palabra[i]);
        }
    }
    return stack;
}


console.log(crearStack("EJ*EMP*LO"));