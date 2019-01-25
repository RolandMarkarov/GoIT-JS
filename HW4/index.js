'use strict'

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};
const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productDatabase) {
 this.name = name;
 this.productDatabase= products;
 this.customerMoney =0;
 this.getCustomerMoney = function(value){
 return this.customerMoney = this.customerMoney + Number(value);
 };
 this.countTotalPrice =function(order){
   let sum = 0;
 for (let el in order){
   sum =sum+ order[el]* products[el]; 
 }return sum;
 };
 this.countChange = function(totalPrice){
  let result = 0;
   if(this.customerMoney >= totalPrice){
   result = this.customerMoney - totalPrice;
   return result;
   }return null;
  }
 
 this.onSuccess = function(change){
   console.log(`Спасибо за покупку, ваша сдача ${change}!`);
 };
 this.onError = function(){
   console.log('Очень жаль, вам не хватает денег на покупки');
 };
 this.reset = function(){
   this.customerMoney = 0;
 };
};


const mango = new Cashier('Mango', products);


console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0
const totalPrice = mango.countTotalPrice(order);

console.log(totalPrice); // 110

mango.getCustomerMoney(300);

console.log(mango.customerMoney); // 300

const change = mango.countChange(totalPrice);

console.log(change); // 190

if(change !== null) {

  mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

mango.reset();

console.log(mango.customerMoney); // 0