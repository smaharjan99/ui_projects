"use strict";
function Person(){
    //Private Variables
    var firstName="";
    var lastName="";
    var dob ="";
    var gender = "";
    var country ="";
    var cars = [];
    var address = ""
 
    //Setter and Getter Methods
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
    
    this.setDob = function(d){
        dob =d;
    }
    this.getDob = function(){
        return dob;
    }
    
    this.setGender = function(gen){
        gender = gen;
    }
    this.getGender = function(){
        return gender;
    }
    
    this.setCountry = function(con){
        country = con;
    }
    this.getCountry = function(){
        return country;
    }
    
    this.setCars = function(carA){
        cars = carA;
    }
    this.getCars = function(){
        return cars;
    }
    
    this.setAddress = function(add){
        address = add;
    }
    this.getAddress = function(){
        return address;
    }
    
    
    this.checkData = function(){
        console.log("First Name - " + firstName);
        console.log("Last Name - " + lastName);
        console.log("Address- "+ address);
        console.log("DOB - "+ dob);
        console.log("Country - "+ country);
        if (cars.length > 0){
            console.log("Cars - ")
            cars.forEach(function(x){
                console.log(x);
            })
        }
    }
}
var personArray=[]; 

function submit(){
    var personObj =new Person();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var dob= document.getElementById("dob").value;
    var gender = document.getElementsByName("gender").value;
    var country = document.getElementById("country").value;
    personObj.setFirstName(firstName);
    personObj.setLastName(lastName);
    personObj.setAddress(address);
    personObj.setDob(dob);
    personObj.setCountry(country);
    personObj.setGender(gender);
   
    personObj.checkData();
    personArray.push(personObj);
    console.log(personArray);
    
}

function generateTable(sample){
    var template = "";
    var i = 1;
    
    sample.forEach(function(x){
        template +="ITEM "+i +"<br>";
        template +="First Name - " + x.getFirstName() +"<br>";
        template +="Last Name - " + x.getLastName() +"<br>";
        template +="DOB - " + x.getDob() +"<br>";
        template +="Gender - " + x.getGender() +"<br>";
        template +="Address - " + x.getAddress() +"<br>";
        template +="Country - " + x.getCountry() +"<br>";
        template += "<hr>"
        i++;
       // x.checkData();
    });
    return template;
}

function display(){
    var result =generateTable(personArray);
    document.getElementById("results").innerHTML=result;
    
}
/*
var personArray=[];
//Creating Object
var carsArray=["toyota", "honda"];
var personObj =new Person();
personObj.setFirstName("John");
personObj.setLastName(" Marston");
personObj.setDob("11/11/69");
personObj.setGender("Male");
personObj.setAddress("Texas");
personObj.setCountry("Nepal");
personObj.setCars(carsArray);
personObj.checkData();
console.log(personObj.getFirstName() + personObj.getLastName());
console.log(personObj.getAddress);
console.log(personObj.getCountry);
console.log(personObj.getDob);
console.log(personObj.getGender);
console.log(personObj.getCars);


personArray.push(personObj);
personArray[0].checkData();

var carsArray=["horse", "pigs"];
var personObj =new Person();
personObj.setFirstName("Bill");
personObj.setLastName("Hicock");
personObj.setDob("11/11/1845");
personObj.setGender("Male");
personObj.setAddress("Carolina");
personObj.setCountry("america");
personObj.setCars(carsArray);
console.log("New Value ");
personObj.checkData();

personArray.forEach(function(x){
x.checkData();
})
personArray.push(personObj);
personArray[0].checkData();

personArray[1].checkData();

*/
