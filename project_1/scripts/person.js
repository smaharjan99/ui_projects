'use strict';
//same as $(document).ready(function(){});
$(function(){
    $("#dob").datepicker();
    $( "#tabs" ).tabs();
  //  $( ".results" ).accordion();
  $("#submit").click(submit);
  /*  //$("#display").on("click", display);
    // $("#display").off("click");
   /* $("#test").on("click",function(){
       $("#submit").trigger("click");
        $("#display").trigger("click");
    });*/
    $("#sample").hide();
    $("#sampleBtn").on("click", toggleHide);
    //toggleHide();
    
    $("#validate").on("click", validate);
    $(".error-msg").hide();
  });

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
        console.log("Gender - "+ gender);
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
/*
        var genderName = document.getElementByName("gender");
    for(int i =0; i<genderName.length; i++){
        if (genderName[i].checked){
            return genderName[i];
        }
    }
   */

function submit(){
    var personObj =new Person();
    
    var firstName =$("#firstName") .val();//document.getElementById("firstName").value;
    var lastName =$("#lastName") .val();// document.getElementById("lastName").value;
    var address = $("#address") .val();//document.getElementById("address").value;
    var dob= $("#dob") .val();//document.getElementById("dob").value;  
    var country = $("#country") .val();//document.getElementById("country").value;
    var gender = $("#gender:checked").val();
    var carsArray=[];
    var cars = document.getElementsByName("cars");
    for(var i =0; i<cars.length; i++){
        if (cars[i].checked){
            carsArray.push(cars[i].value);
        }
    }
    
    personObj.setFirstName(firstName);
    personObj.setLastName(lastName);
    personObj.setAddress(address);
    personObj.setDob(dob);
    personObj.setCountry(country);
    personObj.setGender(gender);
    personObj.setCars(carsArray);
    personObj.checkData();
    personArray.push(personObj);
    console.log(personArray);
    display();
    
}
//$("#gender:checked").val();

function generateTable(sample){
    var template = "";
    var i = 1;
    
   template += "<div class='accordion'>";
    sample.forEach(function(x){
              
       template +="<h3>"+x.getLastName()+","+x.getFirstName()+"</h3>";
        template += "<div>";
        //template +="ITEM "+i +"<br>";
        template +="First Name - " + x.getFirstName() +"<br>";
        template +="Last Name - " + x.getLastName() +"<br>";
        template +="DOB - " + x.getDob() +"<br>";
        template +="Gender - " + x.getGender() +"<br>";
        template +="Address - " + x.getAddress() +"<br>";
        template +="Country - " + x.getCountry() +"<br>";
        template +="Cars - "+x.getCars()+"<br>";
        //template += "<hr>"
        template +="</div>";
        
        i++;
    //x.checkData();
    });
   
    template +="</div>";
    return template;
}

function display(){
    var result =generateTable(personArray);
   //result="Hello World";
    //document.getElementById("results").innerHTML=result;
    $("#resultTab").html(result);
    $(".accordion" ).accordion({
        collapsible :true,
        active:true,
        heightStyle:"content",
      
        
    });
    
}
function validate(){
    var error = 0;
    var regEx = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])+$', 'g');
    
    var firstName = $("#firstName").val();
    console.log(firstName.match(regEx));
    var lastName = $("#lastName").val();
    var address = $("#address").val();
    var dob = $("#dob").val();
    
    if (firstName.length == 0 || firstName.match(regEx)==null){
         $("#fnameErr").show();
    }else{
        $("#fnameErr").hide();
    }
    if (lastName.length == 0 || lastName.match(regEx)==null){
          $("#lnameErr").show();
    }else{
         $("#lnameErr").hide();
    }
    if (address.length == 0 || address.match(regEx)==null){
         $("#addErr").show();
    }else{
        $("#addErr").hide();
    }
    if (dob.length == 0){
       $("#dobErr").show();
    }else{
        $("#dobErr").hide();
    }
  /*  if (error>0){
        $(".error.msg").show();
    }else{
        $(".error.msg").hide();
    }
    console.log(error + " errors found");*/
}

function toggleHide(){
    
    if ($("#sample").is(":visible")){
        $("#sample").hide();
    }else{
        $("#sample").show();
    }
}

/*
var temp ="car";
car temp2="";
console.log(temp2.length);*/
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
