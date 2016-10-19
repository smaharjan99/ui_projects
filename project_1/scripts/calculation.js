"use strict";
function Calculation(){
    var num1=0;
    var num2=0;
    
    this.setNum1= function(n1){
        num1=n1;
    }
    this.getNum1=function(){
        return num1;
    }
    this.setNum2=function(n2){
        num2=n2;
        
    }
    this.getNum2=function(){
        return num2;
    }
    
}

function add(n1, n2){
    return n1+n2;
}
function subtract(n1, n2){
    return n1-n2;
}
function multiply(n1, n2){
    return n1*n2;
}
function divide(n1, n2){
    return n1/n2;
}
var calcObj = new Calculation();
calcObj.setNum1(4);
calcObj.setNum2(8);
console.log(add(calcObj.getNum1(),calcObj.getNum2()));
console.log(subtract(calcObj.getNum1(),calcObj.getNum2()));
console.log(multiply(calcObj.getNum1(),calcObj.getNum2()));
console.log(divide(calcObj.getNum1(),calcObj.getNum2()));