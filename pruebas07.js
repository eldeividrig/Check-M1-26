


var restArray = function (array) {
    // Tu código acá
    
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
    

    /*
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
    });*/
    return (suma - countArr);
};

let suma = restArray([1, [2, [3,4]], [5,6], 7]);
suma