//function declaration
function add(num1,num2){
    return sum=num1+num2;  
}
//function expression
const add2 = function add2(num1,num2){
    return num1 + num2;
}
//function expression (anonymous)
const add3 = function (num1, num2){
    return num1+num2;
}
//arrow function
const add5 = (num1, num2) =>num1 + num2;

const sum2 = add(12,32);
const sum3 = add2(32,21);
const sum4 = add3(23,12);
const sum5 = add5(15,17);
console.log(sum5);

// document.getElementById('my-btn').onclick = function handleEvent(){

// }


const sum1 = add(12,43);
console.log(sum1);