"use strict"
function add(num1 = 0, num2=0){
    return num1+num2;
}
console.log(add(3, 4));
console.log(add(3));

var add2 = function(num1, num2){
    return num1+num2;
}
console.log(add2(3,4));

var add3=(num1, num2)=>num1+num2;
console.log(add3(4,4));