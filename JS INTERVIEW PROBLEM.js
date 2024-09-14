

// JAVASCRIPT PROBLEMS
// REACT JS
// REDUX
// TYPESCRPT 
// NODE JS 
// NEXT JS 
// CYPRESS JS 
// DATABASE QURIES
// SAILS JS 
// REACT NATIVE
// HTML CSS

//PROMISS
// javascript represents the compilation or failure of an asynchronus operations

//DIFFRENCE BTW PROMIS AND ASYNC AWAIT 
//promise involve chaining process .then .catch whereas async await use try catch block



//IF WANT HANDLE SYNC OPERATION IN REDUX THERE WE USED IN REDUX THUNK middleware
//REDUX THUNK is one of the most popular that is used in  sync middleware in redux

// redux thunk is middleware that allows for asynchronus logic in your redux actions





// // LIBRARY VS FRAMEWORK
// library is a tool provide a specific functionality

// framework is a set of tools and guidelines for building apps


// TS AND TSX EXTESNION FOR 
// ts is quit for plain typescript and tsx is for react componant


//VENNILA JS 

// Vennila js does not have virual dom if we change anything its directly to modify to the actual dom so its slower compare to the react


//REACT

//1
"React is a library for building dynamic and interactive user interfaces"
" React's virtual DOM works similarly to the actual DOM. When data or state changes, React updates the corresponding node in the virtual DOM to reflect the new state."


//2
"React componants cannot return more than one elements"

"items.map(data => <li>data</li>) we cannot use directly faced compilation error"

"because this expression is not allowed in react js wrap in brasess"
"{ items.map(data => <li>data</li>) }"



"STATE VS PROPS "
"state is mutable and controlled by componants itself ,"
"own data can change over time"
"props is immutable cannot be changed by the child componants.is a read only data passed from parrent to child"



// EVENT BUBLING

// 1.REDUX THUNK
// 2.REDUX, ACTIONS, SLICE
// 3.JS ASYNC PROBL EM, USING ARRAYS OBJECTS MAPS.
// 4.STRING AND REGEX OPERATIONS
// 5.DOM MANIPULATION
// 6. REACT HOOKS
// 7.BASIC OF HICHARTS FOR VISUALIZATION 





//WHAT IS DOM MANIPULATION 
//is process of changing the style and structure of content of web pages 



// redux react- redux  @reduxjs/toolkit











// 1. REVERSE STRING CONCADINATION
function reverse(string) {

  return string.split('').reverse().join('')

}


// console.log(reverse("abinesh")) ======> output(hseniba)

// 2.FIND DUPLICATE ARRAY
function duplicatess(arr) {
  let duplicate = []
  const set = new Set();
  for (let data of arr) {

    if (set.has(data)) {
      duplicate.push(data)
    } else {

      set.add(add)
    }

    // 3.FACTORIAL NUMBER

    function factorial(n) {
      if (n === 0) return 1;
      return n * factorial(n - 1)
    }

    // 4.BINARY SEARCH

    function BinarrySearch(arr, target) {
      const left = 0;
      const right = arr.length - 1;

      while (left <= right) {

        let mid = Math.floor((left + right) / 2)

        if (target === arr[mid]) {
          return mid;
        }

        if (target < arr[mid]) {
          right = mid - 1

        } else {
          left = mid + 1
        }
        return -1
      }

      // WHAT IS HOSTING IN JS 

      // JAVASCRIPTI DEFAULT BEHAVIOR OF MOVING ALL DECLARATION  TO THE TOP OF THE CURRENT SCOPE




      // VAR IS FUNCTIONAL SCOPE AND LET IS BLOCK SCOPE 

      // WHAT IS EVENT LOOP
      // 		whice responsible for excuting the code collecting and processing events and excuting queud sub task


      // 		SET TIMEOUT
      //       this function alloes to excute the function are code blocks for specifed time 
      // 		SET INTERVALS
      // 		THIS QUITE SAME FOR SET TIMOUT BUT REPETEDLY EXCUTE FOR SPECIFIED INTERVALS



      // FIND DUPLICATE ARRRAYS

      function findDuplicates(arr) {
        const duplicates = [];

        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
              duplicates.push(arr[i]);
            }
          }
        }

        return duplicates;
      }


      const myArray = [1, 2, 3, 2, 4, 5, 3];
      const duplicateValues = findDuplicates(myArray);
      console.log(duplicateValues); // [2, 3]




      // REMOVE DUPLICATE
      function remove(arr) {
        const uniq = [];
        for (i = 0; i < arr.length; i++) {
          if (uniq.indexOf(arr[i]) === -1) {
            uniq.push(arr[i])
          }
        }
        return uniq
      }

    }
  }
}



//REVERSE STRING 
function REverse(str) {
  return str.split('').reverse().join('')
}

//sum array
function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i]
    return sum
  }
}
//inthis function initialise sum to store sum of array elements 
// then itterate the through array using forloop each elements to the sum and 
// finaly retunr sum after the iterate complete



// FIND MAX ELEMENT

function Max(arr) {
  if (arr === 0) {
    return undefined

  }

  let max = arr[0]

  for (i = 1; i < arr.length; i++) {
    if (arrr[i] > max) {
      max = arr[i]
    }
  }
  return max
}


// ARRAY IS EQUAL
function equal(arr1, arr2) {

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}




//FLATTED ARRYS
function flatted(arr) {

  var FlattedArray = []

  for (var i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {

      for (var j = 0; j < arr[i].length; j++) {

        if (Array.isArray(arr[i][j])) {

          for (var k = 0; k < arr[i][j].length; k++) {


            FlattedArray.push(arr[i][j][k])
          }

        } else {

          FlattedArray.push(arr[i][j])

        }
      }
    } else {
      FlattedArray.push(arr[i])
    }
  }
  return FlattedArray
}



console.log(flatted([9, 6, 8, [5, 3, 8, [1, 2, 3]], 5, 8]));




//FIZ BUZZ PROBLEM
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBUzzz")
  } else if (i % 3 === 0) {

    console.log("FiZZZZ")
  } else if (i % 5 === 0) {
    console.log("BUZZZZ")
  } else {
    console.log(i)
  }
}


//TWO ARRAYS MERGED AND SORTED

function mergedArrays(arr1, arr2) {
  let i = 0;
  let j = 0;
  let mergedArray = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i])
      i++
    } else {
      mergedArray.push(arr2[j])
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i])
    i++
  }
  while (i < arr2.length) {
    mergedArray.push(arr2[j])
    j++
  }


  return mergedArray.sort((a, b) => a - b)
}


//MIN ELEMENT FIND FROM ARRAYS 

function minput(arr) {
  let min = arr[0]


  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  return min
}



const largestword = (str) => {
  let large = ""

  let words = str.split(" ")

  for (let word of words) {
    if (word.length > large.length) {
      large = word
    }
  }
  return large

}
console.log(largestword("a abinesh balss"))


  ///REACT JS 

  // WHAT IS JSX
  // jsx is syntex extension of javascript .we can write html structure in same file that contains javascript code 


  // 3. Can web browsers read JSX directly?
  // web browser cannot be read jsx  directly . because this build only regular js objets 
  // jsx is a not regular javascript object 
  // For a web browser to read a JSX file, the file needs to be transformed into a regular JavaScript object. For this, we use Babel


  //4. What is the virtual DOM?







  // MAP AND FOREACH DIFFRENCE *****


  // both methods can be used to iterate over array but they have some diffence in function

  // FOREACH
  // * its does not return new array instead of its just iterate the over the arrays 
  // and perform provide the operations 


  // Map
  // * its returnd new arrays with transformed elements 




  //REDUX VS CONTEXT API
  //context api is a data passing between two componants but redux is a designed for  centralized state management

  // WHY USED HOOKS ? *******
  // * Hooks are new features addition of react version 16.8
  // * They allow to use react features without having  to write a class
  // * avoid this keyword 
  // * allow to reuse the statefull logic

  // USESTATE 
  // const [count,setCount]=useState(0)
  // * this is array destructuring and count is current value of state value and setCount is update state variable
  // * useState(0) to assign default value ;
  // * default value is never use in rerenders
  // * when i click on the button setcout method call to which will add 1 with current state value  ex:   ()=>setCount(count+1)
  // setCount(preCount=>preCount+1) inthis code preCount is to access whole value and add +1


  //USEEFFECT 
  // its commenly used for dom manipulation,data fetching,event subsctipition.

  //USECONTEXT
  //its allows for passing data down the componanat tree without manul props passing

  //USEREDUCER 
  //use reducer hooks allows to manage complex state in functional componants
  //its similer to usestate 

  //USECALLBACK
  //usecallback is a hook that will return a memoised version of the  callback fuction that only change
  // if one of the dependencies has changed 

  // It is useful when passing callbacks to optimized child components that rely on reference equality
  // to prevent unnecessary renders.
  //USEMEMO


  //STRICET MODE 
  //when strice mode is enable development react componats render is twise

  /
//CSS POSITION 
//property control the placement of elements on a web page
//1 STATIC : IS default position normal document flow 
//2.relative :positioned relative to its normal position
//3. absolute :
//  positioned relative to its nearest positioned ancestor
//4.fixed : positioned relative to the viewport remains fixed during scrolling 
//5.sticky : the position sticky is hybrid bwt relative and fixed 



//AXIOS VS FETCH

//fetch is built in browser api and axios is third party api
// fetch is to FOLLOWS CORS policy  but axios automaticaly handle CORS policy 
//fetch does not support INTRERCEPTOR BUT axios support INTERSEPTOR
//Axios provides higher level  API FOR HTTP REQUEST






