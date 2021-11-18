// Question 1

function findFreq(str, char) {
    let freq = 0
    for (let ch of str) {
        ch.toLowerCase() === char.toLowerCase() ? freq += 1 : freq += 0
    }
    return freq
}

/* 
  Test 1: 
    Input: findFreq('How many times does the character occur in this sentence?','m') 
    Output: 2 
   
  Test 2: 
    Input: findFreq('How many times does the character occur in this sentence?','h') 
    Output: 4 
*/

console.log(`The Character occured ${findFreq('How many times does the character occur in this sentence?', 'm')} times`);
console.log(`The Character occured ${findFreq('How many times does the character occur in this sentence?', 'h')} times`);


// Question 2

function areAllEqual(arr) {
    equalItem = arr[0]
    return arr.every(item => item === equalItem)
}

/* 
Test 1: 
  Input: areAllEqual(['test', 'test', 'test']) 
  Output: true 
 
Test 2: 
  Input: areAllEqual([1,1,1,2]) 
  Output: false 
*/
console.log(areAllEqual(['test', 'test', 'test']));
console.log(areAllEqual([1, 1, 1, 2]));

//Question 3

function subArray(arr, n) {
    return arr.slice([arr.length - n])
}

/* 
Test 1: 
  Input: subArray([1, 2, 3, 4, 5], 2) 
  Output: [ 4, 5 ] 
 
Test 2: 
  Input: subArray([1, 2, 3], 6) 
  Output: [ 1, 2, 3 ] 
*/

console.log(subArray([1, 2, 3, 4, 5], 2));
console.log(subArray([1, 2, 3], 6));