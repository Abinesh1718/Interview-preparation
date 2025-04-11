// TWO POINTER

class Solution {
    twoSum(arr, target) {
    
    let seen = new Set()
    
    for(let item of arr){
        
        if(seen.has(target-item)){
            return true
        }
        seen.add(item)
    }
    
    return false
     
    }
}

// const arr=[1, 4, 45 ,6 ,10, 8]
// target = 16





class Solution {
    // Function to find if there exists a triplet in the array arr[] which sums up to target
    hasTripletSum(arr, target) {
        arr.sort((a, b) => a - b); // Correct sorting

        for (let i = 0; i < arr.length - 2; i++) {
            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {  // ✅ Use while instead of switch
                let sum = arr[i] + arr[left] + arr[right];
                console.log(arr[i], arr[left], arr[right], "Sum:", sum);

                if (sum === target) {
                    return true;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return false;
    }
}


// Given an array arr[] and an integer target, determine if there exists a triplet in the array whose sum equals the given target.


// FIND UNION ARRAYS

function findUnion(arr1, arr2) {
    const set=new Set([...arr1, ...arr2]);

    // for(let item of arr1){
    //     set.add(item)
    // }
    //     for(let item of arr2){
    //     set.add(item)
    // }
    return set
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [2, 3, 4, 4, 5, 11, 12];



console.log(findUnion(arr1,arr2))

//{ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 }



// Problem Statement: Given a non-empty array of integers arr,
// every element appears twice except for one. Find that single one.

const arr = [4, 1, 2, 1, 2];

  function single(arr){
      const map=new Map()
      
      for(let arrrs of arr){
          if(map.has(arrrs)){
              map.set(arrrs, map.get(arrrs)+1)
          }else {
              map.set(arrrs,1)
          }
      }

      for(let [key,value] of map.entries()){

          if(value == 1){
              return key
          }
      }
  }

  console.log(single(arr))



//   Given an array, arr of n integers, and an integer element x, find whether element x is present in the array. 
//   Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
  class Solution {
    search(arr, x) {
        return arr.includes(x) ? arr.indexOf(x) : -1
 
    }
}


// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive). This array represents a permutation of
//  the integers from 1 to n with one element missing. Your task is to identify and return the missing element.

function missingNumber(arr) {
    let n= arr.length+1
    let expected=(n*(n+1))/2
    let actual=arr.reduce((a,b)=>a+b,0)
    return expected - actual

}