import sum from './sum';

const oldArray = [1,2,3,4,5];

const newArray = [...oldArray]

const total = sum(10, 5);

console.log(total);
console.log(newArray);