
let arr = [
    {
        subject:
            [{
                TAMIL: 50,
                ENGLISH: 50,
                MATHS: 100,
                SCIENCE: 80,
                SOCIAL: 98
            },
            ],
        Total: 0,
        scoredValue: 0
    },
    {
        subject:
            [{
                TAMIL: 15,
                ENGLISH: 20,
                MATHS: 40,
                SCIENCE: 40,
                SOCIAL: 38,
                compluter: 56
            },

            ],
        Total: 0,

        scoredValue: 0
    },

]

function data(arr) {
    arr.forEach(data => {
        let subjectss = data.subject[0]
        // console.log("value", data)

        let subjectavalue = Object.values(subjectss).reduce((sub, value) => {
            return sub + value
        }
        )


        data.Total = subjectavalue
        data.scoredValue = Object.keys(subjectss).length * 100

        console.log(data);
        // return data
    })

}
// data(arr)

let array = [1, -8, 5, -7, -5, 6, 10]
let arr1 = [1, 5, 5, 1, 2, 9, 8, 4, 4, 4]


function duplicate(arr) {
    // return [...new Set(arr)]
    let uniq = []
    for (let i = 0; i < arr.length; i++) {
        if (uniq.indexOf(arr[i]) == -1) {
            uniq.push(arr[i])
        }
    }

    // return uniq
    for (let i = 0; i < uniq.length; i++) {
        for (let j = 0; j < uniq.length - 1 - i; j++) {
            if (uniq[j] > uniq[j + 1]) {
                let temp = uniq[j]
                uniq[j] = uniq[j + 1]
                uniq[j + 1] = temp
            }
        }
    }

    return uniq

}

function negative(arr) {
    let check = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            check.push(0)

        } else {
            check.push(arr[i])
        }
    }
    return check

}
// console.log(negative(array));

function seclargest(arr) {
    let secvalue = 0;
    let maxvalue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxvalue < arr[i]) {
            secvalue = maxvalue
            maxvalue = arr[i]

        } else if (secvalue < arr[i] && secvalue !== maxvalue) {
            secvalue = arr[i]
        }
    }
    return secvalue
}

console.log(seclargest([5, 3, 8, 3, 2, 8, 9, 10, 11, 25, 87]))



// console.log(seclargest([5,3,2,8,10]

function stringcount(s) {
    let maxLength = 0;
    let seen = new Set();
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(stringcount("assaaa abbbb bss"));


function findMinMaxIndices(str1, str2) {
    const result = {};

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        let firstIndex = -1;
        let lastIndex = -1;

        for (let j = 0; j < str2.length; j++) {
            if (str2[j] === char) {
                if (firstIndex === -1) {
                    firstIndex = j;
                }
                lastIndex = j;
            }
        }

        if (firstIndex !== -1) {
            result[char] = {
                minIndex: firstIndex,
                maxIndex: lastIndex
            };
        }
    }

    return result;
}

// Example usage:
const str1 = "chem";
const str2 = "chemistry";

const indices = findMinMaxIndices(str1, str2);
// console.log(indices);


let arrs = [5, 3, 2, 8, 10]
arrs.splice(1, 3);
// console.log(arrs)

let result = (...args) => {
    console.log("abinesh", args);
}
// result(4, 5, 2, 8)

let promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("hiii")
    }, 2000);

})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Heloooooooo")
    }, 4000);

})

// promise2.then(data => console.log(data))
// Promise.all([promise1, promise2]).then((data) => console.log(data)).catch(err => console.log(err))

function repeatingString(str) {

    let flag;

    for (let i = 0; i < str.length; i++) {
        console.log(i, str[i]);

        flag = false
        for (let j = 0; j < str.length; j++) {
            if (i !== j && str[j] == str[i]) {
                flag = true
                break
            }
        }
        if (flag == false) {
            return str[i]
        }

    }
}

// console.log(repeatingString("aabbcc"));

let arrgg = [
    function () {
        return new Promise(res => {
            setTimeout(() => res(10))
        })
    },
    function (param) {
        return new Promise(res => {
            setTimeout(() => res(10 + param))
        })
    },
    function (param) {
        return new Promise(res => {
            setTimeout(() => res(10 + param))
        })
    }
]


async function excutision(arr) {

    let result = null;

    for (let value of arr) {
        result = await value(result)
    }
    return result
}

// excutision(arrgg).then(console.log)4


//SCOPE VARIABLES

function checking() {
    console.log(name);
    var name = 'abin'

    if (true) {
        // console.log(age);

        let age = 21
        console.log(age, name);
    }

}

// checking()



//Method call function with this value and arguements provided individuly
const Person = {

    getName: function (city, place) {
        return "Haie" + city + place + this.name + this.age
    }
}

const person1 = {
    name: "abinesh",
    age: 52
}

let calll = Person.getName.call(person1, "Chennai", "India")
// console.log(calll);

//APPLY

const PersonS = {
    getName: function (city, place) {
        return "Haie" + city + place + this.name + this.age
    }
}

const person12 = {
    name: "abinesh",
    age: 52
}

// let calllS = PersonS.getName.apply(person12, "Chennai", "India")
// console.log(calllS);


function mergeChrac(str1, str2) {
    let result = ''
    let i = 0


    while (i < str1.length && i < str2.length) {
        result += str1[i] + str2[i]

        i++
    }

    if (i < str1.length) { // inthis condition for when i is lessthen in str1.lengt move to further process not satisfied move to else condition
        result += str1.slice(i)

    } else {
        console.log("a", i, str1.length)

        result += str2.slice(i) // inthis case  i is greater than str2 length so i want to append the ramining charecter to result to be use slice method to passing params i 
    }

    return result

}

let str22 = "abcd";
let st33 = "123456";


console.log(mergeChrac(str22, st33)) // a1b2c3d456


function reverseString(str) {
    let reverse = ""
    let splitswords = str.split(" ")

    for (let i = splitswords.length - 1; i >= 0; i--) {
        reverse += splitswords[i]

        if (i !== 0) {
            reverse += " "
        }
    }

    return reverse
}

console.log(reverseString("the sky is blue ")); // blue is sky the 


let a = { name: "abinesh" }
console.log(delete a.name)

console.log(a)

// This line attempts to delete the name property from the object referenced by a.
//but we cant able  to delete object


let f = false || {} || null

console.log(f) // {}

//  logical operator will  return first truth value
// false is a falsy value and it will return {} . {} is a truth value 


function reverse(num) {
    let reve = ""
    let split = num.toString().split("")

    for (let i = split.length - 1; i >= 0; i--) {
        reve += split[i]
    }
    return reve
}

// console.log(reverse(123))// 321



function reverse(num) {
    let a = [5, 3, 2, 8, 10]
    return a.join("")
}

// console.log(reverse(123)) // 532810


//FUNCTION CURRYING 

//function with multiple arguments into a sequance of function , each with a signle arguments 

function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(curriedAdd(1)(2)(3)); // 6



function firstNonRepatingCharct(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str[i]
        }
    }
    return null
}
console.log(firstNonRepatingCharct("abineshabi"))

function firstRepeatingCharecter(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (result.includes(str[i])) {
            return str[i]
        } else {
            result.push(str[i])
        }
    }
}
console.log(firstRepeatingCharecter("abineshbi"))
