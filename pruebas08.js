function countDeep(arr) {
    // Tu código aca:
    function flattenDeep(arr1) {
        return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }


    let count = 0
    function countArr(arr) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                countArr(arr[i]);
            }
            count++
        }
        return count;
    }
    let nroArr = countArr(arr);
    let arr1 = flattenDeep(arr);
    console.log(typeof arr1[0]);
    let string = 0;
    let number = 0;
    let boolean = 0;
    let unde = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] === 'string') string++;
        if (typeof arr1[i] === 'boolean') boolean++;
        if (typeof arr1[i] === 'number') number++;
        if (arr1[i] === undefined) unde++;
    };
    let total = Math.pow((((nroArr - number) * string) / boolean), unde);
    return total;
}



let total = countDeep([2, "l", "1", "3", 4, "hi", [1, "a", ["o", "n"]], "1", [["3"]], false, "u", undefined, [4], 125]);
total