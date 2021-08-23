const numbers = [23,42,52,23];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,99,65,87,45);
const maxInArray = Math.max(...numbers)
// console.log(max,maxInArray);

const numbers2 = [22,...numbers,88];
numbers.push(10);
console.log(numbers);
console.log(numbers2);
