//Question 1

// TODO destructure the array so that 2 variables apple and peach hold values at indexes 0 and 2 in the array
const numbersArray = ['apple', 'orange', 'peach'];

// TODO destructure the object to extract name and age of the person 
const person = {
    firstName: 'Manasa',
    age: 20,
    gender: 'F'
};

//Solution: 

//Array Destructuring

const [apple, , peach] = numbersArray
console.log(apple)
console.log(peach)

//Object Destructuring

const { firstName, age } = person
console.log(firstName)
console.log(age)

//Question 2


// TODO combine below arrays into one array array3 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// array3 should be [1,2,3,4,5,6] 


// TODO combine below objects into one personDetails object 
const basicDetails = {
    name: 'Manasa',
    age: 20,
    gender: 'F'
};

const educationDetails = {
    degree: 'B.Tech',
    college: 'Lovely Professional University',
}

//COmbining array
const array3 = [...array1, ...array2]
console.log(array3)
    //console.log(`Combined array is : ${array3}`)

//Combining Objects

const personDetails = {...basicDetails, ...educationDetails }
console.log(personDetails)
    //console.log(`Combined Object is : ${personDetails}`)

//Question 3

function largestNumber(numArray) {

    let max_value = numArray[0]
    numArray.forEach(element => {
        if (element > max_value) {
            max_value = element
        }
    });
    return max_value
}

/* Test 1:  
    Input: numArray = [1,5,7,9] 
    Output: 9 
*/

console.log(largestNumber([1, 5, 7, 9]))
console.log(largestNumber([-1, -5, 0, -100]))


//Question 4

function updateSalaries(employeesArray, percent) {
    // TODO complete this 
    return employeesArray.map(salary => salary + salary * (percent / 100));
}

/* Test 1:  
    Input: employeesArray = [100,500,700,400], percent = 10 
    Output: [110, 550, 770, 440] 
*/
console.log(updateSalaries([100, 500, 700, 400], 10))
console.log(updateSalaries([100, 500, 700, 400], 12))