//var array1 = new Array();
var cart = [];
var fruits=["apple", "mango", "orange"];
var animals = ["dog", "rat", "squirrel"]
console.log(fruits[2]);
cart.push(fruits[1]);
console.log(cart[0]);
cart.pop();
cart.push(fruits[0]);
console.log(cart[0]);
console.log("--------------");
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log("--------------");
fruits.forEach(function(c){
    console.log(c);
 });
console.log("--------------");
function parseArray(arrayParam){
    console.log("from function");
    for(var i=0;i<arrayParam.length; i++){
        console.log(arrayParam[i]);
    }
}
parseArray(fruits);
parseArray(animals);