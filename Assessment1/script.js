/* 
Problem 1:

write code to fetch all todos using the below api and console only the titles for each todos

URL: https://jsonplaceholder.typicode.com/users/1/todos
*/
const fetchData = async() => {
    try {
        const fetchedData = await fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        const jsonData = await fetchedData.json()
        jsonData.map(eachTodo => console.log(eachTodo.title))
    } catch (error) {
        console.log(`Error Occurred : ${error.message}`)
    }
}

fetchData();









/*
Problem 2:
Write a function to find any two numbers from array which on adding gives the sum
  
Input: array = [2, 7, 11, 15], sum = 9
Output: [2, 7]
*/

function findNumbers(array, sum) {
    sum_array = []
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                sum_array.push([array[i], array[j]])
            }
        }
    }
    return sum_array
}

console.log(findNumbers([2, 2, 2, 7, 11, 15], 4))