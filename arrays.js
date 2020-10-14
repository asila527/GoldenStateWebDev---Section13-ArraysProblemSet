
//Problem #1: printReverse
console.log('Problem #1: printReverse')
function printReverse(arr) {
    for (i = arr.length-1; i > -1; i--) {
        console.log(arr[i]);
    }
}

printReverse([1, 2, 3, 4]);
printReverse(['a', 'b', 'c']);
//Problem #2: isUniform
console.log('Problem #2: isUniform')

function isUniform(arr) {
    let value = arr[0];
    for (let i = 1; i < arr.length; i++) {
    if (arr[i] != value) {
        return false;
    }
    }
    return true;
}
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(['a', 'b', 'p']));
console.log(isUniform(['b', 'b', 'b']));
console.log(isUniform([2, 2, 3]));

//Problem #3: sumArray()
console.log('sumArray');
function sumArray(arr) {
    let result = arr[0];
    for (i = 1; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

//Problem #4: max();
console.log('Problem #4: max');
function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } 
    }
    return max;
}

console.log(max([1, 2, 3, -1]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));