'use strict';

var person={
    firstName:"Jack",
    lastName:"Frost",
    address:"Liverpool",
    dob:"12/24/1980",
    test:function(){
        console.log("From hell");
    },
    test2:outsideFunc,
    sampleObj:{
        account:231,
        balance:234,
        cars:["toyota", "honda"],
        complexArray:[
            {
                fruit:"Apple",
                pet:"dog"
            },
            {
                fruit:"Mango",
                pet:"cat"
            }]
    }
};

function outsideFunc(){
    console.log("From Outside");
}

console.log(person.firstName);
console.log(person['firstName']);
person.test();
person.test2();
console.log(person.sampleObj.account);
person.sampleObj.balance=500;
console.log(person.sampleObj.balance);
console.log(person.sampleObj.cars[0]);
console.log(person.sampleObj.complexArray[1].fruit);
