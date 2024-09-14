1.// NUMBER PALINDROM 

function palindrom(num) {
    return num === 0 ? false : num === +num.toString().split("").reverse().join("")
}


// console.log(palindrom(5445))
function febinociseries(num) {
    let fib = [0, 1]
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}



// // This code defines a function fibonacciSeries 
// that takes a parameter n indicating the length of the Fibonacci series
//  to generate.It then initializes an array fib with the first two Fibonacci numbers[0, 1].
//  The for loop starts from index 2 and iterates until n, calculating each Fibonacci number by adding
//   the two previous numbers in the sequence.Finally, it returns the generated Fibonacci series.

// console.log(febinociseries(5))

//FIND LORGEST WORDS 



function findLorgesWords(name) {

    let large = ""
    let words = name.split(" ")
    for (let i = 0; i < words.length; i++) {
        if (large.length < words[i].length) {
            large = words[i]
        }
    }
    return large

}

// console.log(findLorgesWords("a abinesh dbajhdbb ijiiji"))

//FACTORIAL 

function factorial(num) {
    if (num === 0) {
        return 1
    }

    return num * factorial(num - 1)
}

// console.log(factorial(4))


//FIND DUPLICATES VALUES
function duplicatess(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j] & !duplicates.includes(arr[i])) {
                duplicates.push(arr[i])
            }
        }
    }
    return duplicates
}


// console.log(duplicatess([5,98,3,8,6,3,5,98,4]))
function uniqvalues(arr) {
    let uniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniq.indexOf(arr[i]) == -1) {
            uniq.push(arr[i])
        }
    }
    return uniq
}
// console.log(uniqvalues([5,98,3,8,6,3,5,98,4]))
function maxvalue(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max

}

// console.log(maxvalue([5,98,3,8,6,3,5,98,4,101]))


function flattedArray(arr) {
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
// console.log(flattedArray([5,98,[3,8,[6,3]],5,98]))[ 5, 98, 3,  8,6,  3, 5, 98]

function findSecMaX(arr) {

    let max = arr[0]
    let secValue = arr[0]

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            secValue = max
            max = arr[i]
        } else if (arr[i] > secValue && max !== arr[i]) {
            secValue = arr[i]
        }
    }

    return secValue

}

// console.log(findSecMaX([5, 98, 3, 8, 6, 3, 5, 98, 4, 101]))


function reverseString(str) {
    return str.split("").reverse().join("")

}

// console.log(reverseString("ABINESH"))

function sorArray(arr) {
    return arr.map((a, b) => a - b)

}

// console.log(sorArray([5, 98, 3, 8, 6, 3, 5, 98, 4, 101]))


7
//REDUX 
//redux directly no handle sync operations  ifu want handle sync there we used middleware and  redux thunk is middleware
//one of the most popular middleware in redux

function MergerdArraySorted(arr1, arr2) {
    let merge = []

    let length = Math.max(arr1.length, arr2.length)

    for (let i = 0; i < length; i++) {

        if (i < arr1.length) {
            merge.push(arr1[i])
        }
        if (i < arr2.length) {
            merge.push(arr2[i])
        }
    }

    for (let i = 0; i < merge.length; i++) {
        for (let j = 0; j < merge.length; j++) {
            if (merge[j] > merge[j + 1]) {
                let temp = merge[j]
                merge[j] = merge[j + 1]
                merge[j + 1] = temp
            }
        }
    }
    return merge
}

console.log(MergerdArraySorted([7, 5, 3], [8, 6, 2, 9, 4]));



function Reverse(name) {
    let reverse = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reverse += name[i]
    }
    return reverse
}

// console.log(Reverse("abinesh"))


function LaergeWord(str) {
    let larrgeword = "";
    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > larrgeword.length) {
            larrgeword = word
        }
    }
    return larrgeword

}



console.log(LaergeWord("abi badhacbas abcbascsssssssbabc"));



const countrepeated = (arr) => {
    let counts = {}
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1
    }
    return counts
}
console.log(countrepeated([1, 2, 3, 4, 1, 2, 3, 1, 2, 1]));

//WHY HTML USE DOCTYPE  
//TO tell that browser which version of html were used 

//WHY USED FOR HEADER TAG




//REACT HOOKS 

//1.USECALLBACK

function callback() {
    const [count, setcount] = useState(0)
    const [color, setcolor] = useState(false)

    const GetItems = useCallback(() => {
        return count

    }, [count])


    return (
        <div>
            <input onChange={() => setcount(e.target.value)} />

            <button onClick={() => setcolor(prev => !prev)} >To change Color</button>

            <LIST GetItems={GetItems} />

        </div>
    )

}


function LIst({ GetItems }) {
    const [count, setcount] = useState(0)

    useEffect(() => {
        setcount(GetItems)

    }, [GetItems])


    return (
        <div>
            {count}
        </div>
    )

}


//USEMEMO 
//1. USE MEMO IS SAME AS USECALLBACK FUN IS THIS PASS ONLY VALUE NOT A FUNCTION BUT
//USE CALLBACK FUNCTION PASS THE  FUNCTION



//USEREF

function USEREF() {

    const [age, setage] = useState(0)

    //inthis case we fell in infinity render now we achived for using use Ref

    // const [count, setcount] = useState(second)
    // useEffect(() => {
    //     setage(pre => pre + 1)
    // }, [])

    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    }, [])

    return (
        <div>
            <input value={count} onChange={() => setcount(e.target.value)} />
            <p>MY age is {age}</p>
        </div>
    )

}



//ROTETE ARRAY

function rotateAarrray(arr, step) {

    let length = arr.length
    let rotate = []

    for (let i = 0; i < arr.length; i++) {
        let newIndex = (i + step) % length
        rotate[newIndex] = arr[i]
    }
    return rotate
}
rotateAarrray([1, 2, 3, 4, 5], 2)

//SORT ARRAY

function sortArray(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {

        for (let j = 0; j < length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
        }

    }
    return arr

}

function maxrepetedvalue(arr) {
    let maxvalue = 0;
    let maxcount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        for (let j = 0; j < arr.length; j++) {

            if (arr[i] == arr[j]) {
                count++
            }


        }

        if (count > maxcount) {
            maxcount = count
            maxvalue = arr[i]
        }

    }

    return { maxcount: maxcount, maxvalue: maxvalue }
}

function removeDuplicate(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {

        if (result.indexOf(str[i]) == -1) {
            result += str[i]

        }
    }
    return result

}

console.log(removeDuplicate("abineshabine"))


function MostFrequent(str) {
    let maxCount = 0
    let value = ""
    for (let i = 0; i < str.length; i++) {
        let count = 1;

        for (let j = i + 1; j < str.length; j++) {
            if (str[j] == str[i]) {
                count++;
            }
        }
        if (maxCount < count) {
            maxCount = count
            value = str[i]
        }
    }
    return { maxCount: maxCount, value: value }
}

console.log(MostFrequent("abbbccde"))



function AnogramCheck(str1, str2) {

    if (str1.length !== str2.length) {
        return false
    }

    let countString1 = {}
    let countString2 = {}

    for (let chat of str1) {
        countString1[chat] = (countString1[chat] || 0) + 1
    }
    for (let chat of str2) {
        countString2[chat] = (countString2[chat] || 0) + 1
    }


    for (let check in countString1) {

        if (countString1[check] !== countString2[check]) {
            return false
        }

    }
    return true
}

console.log(AnogramCheck("listen", "silont"));
