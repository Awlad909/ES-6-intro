let priyoPerson = 'koolsum Begum';
priyoPerson = 'Momotaj begum';
const hubby = 'akbar the great';

//default parameter
function calculate(first,last='chowdhury'){
    return first + ' ' + last;
}

//template string
const myPeople = `my lovely person is are${hubby} and his fullname is ${getName('akbar')}.My name is ${priyoPerson}.`;
console.log(myPeople);

//arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x,y,z) =>{
    const firstPart = x+y;
    const secondPart = x*y;
    const thirdPart = x/y;
    const result = (firstPart + secondPart) * thirdPart;
    return result;
}


const numbers = [2,23,54,64];
const max= Math.max(...numbers);
console.log(max);