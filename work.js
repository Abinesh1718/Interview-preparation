function febinosi(n) {

    let febi = [0, 1]
    for (let i = 2; i < n; i++) {
        febi[i] = febi[i - 1] + febi[i - 2]
    }
    return febi
}

// console.log(febinosi(10))

function longword(str) {
    let long = ""
    let SecLong = ""

    let word = str.split(" ")

    for (let i = 0; i < word.length; i++) {

        if (long.length < word[i].length) {
            SecLong = long
            long = word[i]
        } else if (word[i] > SecLong && long > SecLong) {
            SecLong = word[i]
        }
    }
    return SecLong

}


function longArray(arr) {
    let Long = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (Long < arr[i]) {
            Long = arr[i]
        }
    }
    return Long


}

// console.log(longArray([5,8,3,10,15,12]));


function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1)

}
// console.log(factorial(0))


function duplicatevalue(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i])
            }
        }
    }

    return duplicates

}


// console.log(duplicatevalue([4, 8, 18, 2, 4, 8]))

function Uniq(arr) {
    let uniqvalue = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (uniqvalue.indexOf(arr[i]) == -1) {
            uniqvalue.push(arr[i])
        }
    }

    return uniqvalue
}
// console.log(Uniq([4, 8, 8,10,2,10]))

function flatedArray(arr) {
    let flated = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < arr[i][j].length; k++) {
                        flated.push(arr[i][j][k])
                    }
                } else {
                    flated.push(arr[i][j])
                }
            }
        } else {
            flated.push(arr[i])
        }

    }
    return flated
}


// console.log(flatedArray([4, [8, [8, 10], 2], 10]))


function mergedArraySorted(arr1, arr2) {

    let Merged = [];
    let i = 0;
    let j = 0;

    for (; i < arr1.length && j < arr2.length;) {
        // if()
    }

    return Merged

}

console.log(mergedArraySorted([4, 8,], [2, 12, 10]))