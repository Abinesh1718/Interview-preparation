// 1. sum of the natural number from 1 to n 

function SumNaturalNUmber(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

// console.log(SumNaturalNUmber(10));
//2.SUM OF DIGITS OF A NUMBER
function sumofDigit(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10);

    }
    return sum
}

// console.log(sumofDigit(16265));

//3.    COUNT THE NUMBER OF DIGIT

function countNUmber(num) {
    let count = 0;

    while (num !== 0) {
        num = Math.floor(num / 10);
        count++
    }
    return count
}

// console.log(countNUmber(16265));


//PALINDROM OR NOT 

var isPalindrome = function (num) {
    let copynum = num; reverse = 0;

    while (copynum > 0) {
        let lastDigit = copynum % 10;
        reverse = reverse * 10 + lastDigit
        copynum = Math.floor(copynum / 10)
    }
    return num === reverse
};




console.log(isPalindrome(16));

//FEBINOSI SERIES

function febinosi(n) {
    if (n < 2) {
        return
    }
    let prev = 0, current = 1, next;
    for (let i = 2; i <= n; i++) {
        next = current + prev;
        prev = current;
        current = next
    }
    return next

}
// console.log(febinosi(15));

//Missing number 


function MissingNumber(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {

        sum += num[i]

    }

    let expectSum = num.length * (num.length + 1) / 2

    return expectSum - sum
}
// console.log(MissingNumber([7,8,1,2,3,5,6]));

let arr = [1, 2, 3, 4, 5];
arr.splice(3, 3, 'a', 'b'); // Remove 2 elements starting from index 3 and replace them with 'a' and 'b'
console.log(arr); // Output: [ 1, 2, 3, 'a', 'b' ]

//TWO SUM USING TARGET VALUS 

function Twosum(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }

}

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

//TO ADD ARRAYS SUM

var addTwoNumbers = function (l1, l2) {
    let sum = []
    for (let i = 0; i < l1.length; i++) {
        let value = l1[i] + l2[i]
        if (value > 9) {
            sum.push(0)
        } else {
            sum.push(value)
        }
    }
    return sum
};

//LENGTH OF LONGEST SUBSTRING COUNT 

function lengthOfLongestSubstring(s) {
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


// Define a function named is_Palindrome that checks if a given string is a palindrome
function is_Palindrome(str1) {
    // Reverse the string and compare it with the original string
    var rev = str1.split("").reverse().join("");

    return str1 == rev;
}


// Define a function named longest_palindrome that finds the longest palindrome in a given string
function longest_palindrome(str1) {
    // Initialize variables for maximum length (max_length) and corresponding palindrome (maxp)
    var max_length = 0,
        maxp = '';
    // Iterate through each character in the input string
    for (var i = 0; i < str1.length; i++) {
        // Create a substring starting from the current character to the end of the string
        var subs = str1.substr(i, str1.length);

        // Iterate through each possible substring from the end of the current substring
        for (var j = subs.length; j >= 0; j--) {
            // Create a sub-substring from the beginning of the current substring to the current position
            var sub_subs_str = subs.substr(0, j);

            // Continue to the next iteration if the sub-substring has length 0 or 1
            if (sub_subs_str.length <= 1)
                continue;

            // Check if the sub-substring is a palindrome using the is_Palindrome function
            if (is_Palindrome(sub_subs_str)) {
                // If true, check if it has a longer length than the current maximum length
                if (sub_subs_str.length > max_length) {
                    // If true, update the maximum length and corresponding palindrome
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    // Return the longest palindrome found
    return maxp;
}

// Log the result of calling longest_palindrome with the input "abracadabra" to the console
console.log(longest_palindrome("babad"));

