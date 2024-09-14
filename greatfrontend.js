function clamp(value, lower, upper) {
    if (value < lower) {
        return lower
    } else if (value > upper) {
        return upper
    } else {
        return value
    }
}
// initialy im going to make condition for if value lessthen the will be return lower value
//and am going to make nested condtion if value is lessthen upper value then will be return upper value
// if none of these condition not satisfied then will be return  value



Array.prototype.square = function () {
    return this.map(value => {
        console.log(value)
        return value * value
    })

};

// Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element 
//within the array the .square() method is called on.


function setCancellableInterval(callback, delay, ...args) {

    const intervelID = setInterval(callback, delay, ...args)

    return function cancel() {
        clearInterval(intervelID)
    }

}

//IM going to initialise the variable to store the params value 
// then make  cancle function inside the return statement  to clear the interval



function chunk(array, size = 1) {
    let result = []

    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }

    return result

}

// inthis function initialy im going to create empty array its called result 
// after that im going to itreate the over the arrays .
// inthis itration increament by sum of size
//after that pushing element to slice fronm starting index and sum of size is the ending index
//finaly im going to return the result array


//QUSTION
// Implement a function difference(array, values) that creates an array of array values not included 
// in the other given arrays using SameValueZero for equality comparisons.The order and references of result values are determined by the first array.


function diffrence(arr, values) {
    let result = []
    if (arr.length == 0) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        if (!values.includes(arr[i])) {
            result.push(arr[i])
        }

    }
    return result
}

//initialy im going to create empty array its called result .after that iterate over the array each element
// during iteration i have to check if currenet element does not present in values array if the conditons satisfied to push the current element to the result array 
// finaly im going to return the result array


// 3.Qustions 
// Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped 
// until predicate returns falsey. Your function should not modify the original array.

function dropWhile(arr, predicate) {
    let index = arr.length;

    for (index = 0; index < arr.lenngth; index++) {
        if (!predicate(arr[index], index, arr)) {
            break
        }
    }
    return arr.slice(index)
}

// initialy im going to store length of the array its called index . after that im going to iterate oever the array
//during the iteration we check the each element  if predicate returns the false.if predicate return the false break the loop
// after finding index to return slice of the array

//QUSITON 
// Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array with values from start up to, but not including, end.


function fill(arr, value, start = 0, end = arr.length) {
    let result = []
    if (arr.length == 0) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        if (start < i && end > i) {
            result.push(value)
        } else {
            result.push(arr[i])
        }
    }

    return result

}

console.log(fill([4, 5, 2, 8, 6], "*", 0, 4)); // [ 4, '*', '*', '*', 6 ]

// initialy im going to create empty arry its called result . after that ill make confition for if length of the array is equal to 0 then will return the empty array
// after that im going to iterate the over the array each element  to check current index element  i within the range of this condtion [start,end] this is done by using this condition satisfied to push the value in current index and inthis condition is not satisfied
// to push the current value in result array and finaly to return the result arrray


//QUSTION 

// Implement a function findIndex(array, predicate, [fromIndex = 0]) that takes an array of values, a function predicate, and an optional fromIndex number argument,
// and returns the index of the first element in the array that satisfies the provided testing function predicate.
function findIndex(array, predicate, fromIndex = 0) {
    const startIndex =
        fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);
    for (let i = startIndex; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;

        }
    }
    return -1
}


//QUS
//Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.

function converObject(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i]
        result[key] = value
    }
    return result

}

// initialy i have created empty object which is stored modied values. after that iterate over the arry during 
// the iteration each element to destrucutre the keys and values . after that to store the current destrucutre keys and values in result object


//QUSTIONS 
// The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

function value(thisArg, ...argArray) {
    return this.bind(thisArg)(...argArray)
};

// inthis function return bind all arguemnt with approprioate argarrys.
// bind is a method which is create new function where thisarg is sets this within the function and array