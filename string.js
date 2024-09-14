function countVowels(str) {

    let vowels = "aAeEiIoOuU"
    let result = 0;
    let results = "";

    for (let i = 0; i < str.length; i++) {

        //Inthis below condition to remove the vowels
        if (vowels.indexOf(str[i]) == -1) {
            results += str[i]
        }

        // INTHIS Below Condition to Count the vowels 
        // if (vowels.indexOf(str[i]) !== -1) {
        //     result += 1

        // }
    }
    return results
}
// console.log(countVowels("Abinesh"));

function replceString(str, search, replace) {

    let result = ""

    for (let i = 0; i < str.length; i++) {

        if (str.substr(i, search.length) == search) {
            result += replace // to replace new elements 
            i += search.length - 1 // Skip Over the Matched Substring:
        } else {
            result += str[i]
        }

    }
    return result
}
    // console.log(replceString("Hi Abinesh How are you ?", "Abinesh", "balllla"));

// console.log(str.replaceAll("Abinesh", "bala")); // Using inbuild method


function compareTwoString(str1, str2) {

    // let localcompare = str1.localeCompare(str2)
    // return localcompare

    if (str1.length !== str2.length) {
        return false
    }

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            return false
        }
    }
    return true
}

// console.log(compareTwoString("Abinesh", "Abinesh"));


function PossibleCombination(str) {

    let result = []// which is stored to compination of element 

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {

            result.push(str.slice(i, j)) //inthis line push posible elements  to results  using slice .slice method to extract the start index with end index value 

        }
    }
    return result


}
// console.log(PossibleCombination("Harinima"));


function UniqString(str) {
    let result = "" // initilized empty variable to store the after remove duplicates characters
    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) == -1) { //To check the condition for current character to exisit or not if not to asign the current character to result variable
            result += str[i]
        }
    }
    return result
}
// console.log(UniqString("HarHrinima"));


function checkAnogram(str1, str2) {
    function convertObject(s) {
        let result = {}
        for (let i of s) {
            result[i] = (result[i] || 0) + 1
        }
        return result
    }


    if (str1.length == str2.length) {
        let obj1 = convertObject(str1.toLowerCase())
        let obj2 = convertObject(str2.toLowerCase())

        for (let i in obj1) {
            if (obj1[i] !== obj2[i]) {
                return false
            }
        }

        return true

    } else {
        return false
    }


}
const str1 = "listen";
const str2 = "silent";
// console.log(checkAnogram(str1, str2))


// Inthis code used to iterate object values to keys and values
// for (let [key, value] of Object.entries(obj1)) {
//     console.log("key", key, value);
// }

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
console.log(lengthOfLongestSubstring("abcabcbb"));
