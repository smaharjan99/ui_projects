"use strict"
function Person(){
    var firstName="";
    var lastName="";
    this.address ="Texas";
    this.setFirstName=function(fname){
        firstName=fname;
    }
    this.getFirstName = function(){
        return firstName;
    }
    
    this.setLastName=function(lname){
        lastName=lname;
    }
    this.getLastName = function(){
        return lastName;
    
    }
}

var personObj =new Person();
console.log(personObj.address);
personObj.setFirstName("John");
personObj.setLastName(" Marston");
console.log(personObj.getFirstName() + personObj.getLastName());

console.log();