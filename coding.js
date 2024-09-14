function duplicates(arr) {
    let dupli = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j] && !dupli.includes(arr[i])) {
                dupli.push(arr[i])

            }
        }
    }
    return dupli
}

// console.log(duplicates([4, 8, 2, 4, 8,1,7]));


function uniqvalue(arr) {
    let uniq = []

    for (let i = 0; i < arr.length; i++) {
        if (uniq.indexOf(arr[i]) == -1) {
            uniq.push(arr[i])
        }
    }
    return uniq

}

// console.log(uniqvalue([4, 8, 2, 4, 8, 1, 7]));

function febinosi(arr) {

    if (arr < 2) {
        return 1
    }
    let prev = 0, current = 1, next;

    for (let i = 2; i <= arr; i++) {
        next = current + prev
        prev = current
        current = next
    }
    return next
}


console.log(febinosi(10));

function Missingnum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    let length = arr.length + 1
    let expect = length * (length + 1) / 2
    return sum - expect
}

// console.log(Missingnum([7, 8, 1, 2, 3, 5, 6]));




function mostlyrepeted(arr) {

    let maxcount = 0;
    let value = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (maxcount < count) {
            maxcount = count
            value = arr[i]
        }
    }
    return { maxcount: maxcount, value: value }
}

// console.log(mostlyrepeted([4, 8, 2, 4, 8, 1, 7]));







function sorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }

    }
    return arr

}

function insert(array1) {

    return [...new Set(array1)];


}

// console.log(sorted([7, 8, 1, 2, 3, 5, 6]));

function rotatearray(arr, step) {
    let rotate = []
    for (let i = 0; i < arr.length; i++) {
        let nexindex = (i + step) % arr.length
        rotate[nexindex] = arr[i]
    }
    return rotate
}

// console.log(rotatearray([7, 8, 1, 2, 3, 5, 6], 2));


function addingTwo(l, m) {
    let sum = []

    for (let i = 0; i < l.length; i++) {
        let value = l[i] + m[i]

        if (value > 9) {
            sum.push(0)

        } else {
            sum.push(value)
        }

    }
    return sum

}
// console.log(addingTwo([4, 8, 2, 4], [4, 8, 1, 7]));


function targetSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j];
            }
        }
    }
}


// console.log(targetSum([4, 8, 2, 8, 1, 7], 10));


let arr = [4, 8, 2, 8, 1, 7]


const pop = arr.pop() // to cut last element
const shift = arr.shift()// to cut first element

arr.unshift(10) // to add the value for 0 index

const reduce = arr.reduce((acc, cu) => acc + cu)// to sum of each element to single output value

const find = arr.find(x => x > 5)

const slice = arr.slice(1, 4) // new array select start and end index

const splice = arr.splice(1, 8, "abi") // removing or replace exisiting element

// console.log(arr, splice);


//INTERSECTION ARRAYS   

function INTERSECTION(array1, array2) {

    const filteredArray = array1.filter(value => array2.includes(value));
    return filteredArray


}


const array1 = [1, 2, 3, 4, 4];
const array2 = [3, 4, 4, 5, 6];

const intersectedArray = INTERSECTION(array1, array2)

// console.log("Hello, World!", intersectedArray);

//FLAT ARRAYS
function flatArray(arr) {
    return arr.flat(Infinity)

}


function reverse(str) {
    return str.split("").reverse().join("")
}

function reverse(str) {
    let repeat = ""
    for (let i = 0; i < str.length; i++) {
        repeat = str[i] + repeat
    }
    return repeat
}

// console.log(reverse("bala"))
// 

function largenumer(arr) {


    return Math.max(...arr)

}
function largenumber(arr) {

    let largenumber = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largenumber) {
            largenumber = arr[i]
        }
    }
    return largenumber

}



// console.log(largenumber([4, 65, 8, 3, 9]))

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
// console.log(isPalindrome("madam")); // true

function fizzbuzz(num) {

    for (let i = 0; i <= num; i++) {

        if (i % 3 == 0 && i % 5 == 0) {
            console.log("fizzbuzz")
        } else if (i % 3 == 0) {
            console.log("fizz")
        } else if (i % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }

}

function removeDuplicates(arr) {
    let uniq = []

    for (let i = 0; i < arr.length; i++) {
        if (uniq.indexOf(arr[i]) == -1) {
            uniq.push(arr[i])
        }
    }
    return uniq
}









// console.log(removeDuplicates([1, 5, 3, 1, 3, 3, 4, 7, 9]))
function mergeSortedArrays(arr1, arr2) {
    let merge = []
    let length = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < length; i++) {

        if (i < arr2.length) {
            merge.push(arr2[i])
        }

        if (i < arr1.length) {
            merge.push(arr1[i])
        }

    }
    return merge

}
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 8])); // [1, 2, 3, 4, 5, 6]

function binarysearch(arr, target) {

    let start = 0, end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == target) {
            return mid
        } else if (arr[mid] > end) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

// console.log(binarysearch([4, 5, 3, 8, 6], 8))

function calculateTotalPrice(arr) {
    let totalprice = 0;
    for (let item of arr) {
        totalprice += item.price * item.quantity

    }
    if (totalprice >= 100) {
        totalprice *= 0.9
    }

    totalprice = Math.floor(totalprice)

    return totalprice
}

let items = [
    { price: 20, quantity: 2 },
    { price: 50, quantity: 1 },
    { price: 10, quantity: 4 }
];

// console.log(calculateTotalPrice(items));


function findIntersection(arr1, arr2) {
    let intersec = []
    let Set1 = new Set(arr1)
    let Set2 = new Set(arr2)

    for (let item of arr1) {
        if (Set2.has(item)) {
            intersec.push(item)
        }
    }
    return intersec
}





function interSection(arr1, arr2) {
    let ineter = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr1.indexOf(arr2[i]) !== -1) {
            ineter.push(arr2[i])
        }
    }
    return ineter
}


let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
console.log(findIntersection(arr1, arr2)); // Output: [2]


function bublesort() {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped) {
        return arr
    }
}
// Suppose arr = [5, 3, 8, 4].  

// i = 0: Compare arr[0] (5) with arr[1] (3). Since 5 > 3, they are swapped. Now arr = [3, 5, 8, 4].



let arrs = [1, 11, 4, 6, 8, 2]

console.log(bublesort(arrs))
