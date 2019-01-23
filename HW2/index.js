'use strict'

let usrInput;
const numArr = [];
let total = 0;

do {
  usrInput = prompt("Please input your number");
  if (usrInput !== null && !Number.isNaN(Number(usrInput)))  {
      numArr.push(usrInput)
      }
} while (usrInput !== null);
for (let item of numArr){
    total = total + Number(item);
}

console.log(numArr);
console.log(total);
