//Question 1

// TODO destructure the array so that 2 variables apple and peach hold values at indexes 0 and 2 in the array
const numbersArray = ['apple', 'orange', 'peach'];

// TODO destructure the object to extract name and age of the person 
const person = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};

//Solution: 

//Array Destructuring

const [apple, , peach] = numbersArray
console.log(apple)
console.log(peach)

//Object Destructuring

const { name, age } = person
console.log(name)
console.log(age)

//Question 2


// TODO combine below arrays into one array array3 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// array3 should be [1,2,3,4,5,6] 


// TODO combine below objects into one personDetails object 
const basicDetails = {
    name: 'abcde',
    age: 10,
    gender: 'm'
};

const educationDetails = {
    degree: 'xyz',
    college: 'anc',
}

//COmbining array
const array3 = [...array1, ...array2]
console.log(array3)
    //console.log(`Combined array is : ${array3}`)

//Combining Objects

const personDetails = {...basicDetails, ...educationDetails }
console.log(personDetails)
    //console.log(`Combined Object is : ${personDetails}`)