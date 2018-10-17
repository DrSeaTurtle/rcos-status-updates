//This is a basic demonstration of major concepts in java script
//mostly for me to refer back to quickly for examples and digestible descriptions of things

//javascript can write and edit html files its inside of
//but for my purposes Ill just need console.log
console.log("Hello");

// the spacing of js statements are really loose
// spaces dont matter in between keywords and a semicolon can be ommited so long as the statement is in one line
console.log( "Hello again")

//js is dynamicaly typed so every variable in initialised as "var"
//under that hood js has 3 data types, numbers, strings, and objects
//numbers and strings are called 'literals'
var x = "And again";
console.log(x);
x = 3;
console.log(x);

//variables can be defined in bulk with different names on just one line
var name = "john", age = 10, color = "blue";
console.log(name);
console.log(age);
console.log(color);

//when adding vars, strings will be concatenated and numbers added
//if a string is added to a number, js will go left to right concatenating adjacent strings
////so number additoon before a string is fine, but after it all gets slapped onto a string
console.log(age+10+name+color+age+10);
////will be "20johnblue1010"

//objects are defined in js as different vars curly bracketed together
//they use dot notation to access member variables
//object also use [""] notation to acess member variables
var car = {make:"toyota", model:"camry"};
console.log(car.make + " " + car.model);
console.log(car["make"] + " " + car["model"]);

//the type of a given variable can be yielded by the typeof keyword
console.log(typeof car);//object
console.log(typeof name);//string
console.log(typeof age);//number

//functions in js are declared using the function keyword then the functions signatire followed by its implimentation
//the () invokes the function, otherwise just giving the name of the function returns what is inside of it
//a function has its own scope inside of itself, like most other languages
function foo(x,y)
{
    return x+y;
}
console.log(foo);
console.log(foo(1,1));

//functions can also be members of objects
car ={make:"toyota", model:"camry", start: function(){return "vroom";}};
console.log(car.start());


//strings have their own set of methods and properties in js
var ex = "example";
console.log(ex.length);
console.log(ex.indexOf("am"));//returns index of input, can have custom start position
console.log(ex.search("am"));//same as indexOf but can use regex
console.log(ex.slice(0,5));


//js also has arrays, which are just collections of variables of the same type
//arrays use much of the same syntax as other languages
var many  = ["mary", "john", "Rajirra"];
console.log(many[0]);
