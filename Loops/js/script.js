/* Function Types:
 *  Normal Functions
 *  Procedures
 *  Anonymous Functions
 */

// Normal Function

var width = 5;

function outputMsg(){
    //code the function runs;
    console.log("Hello World.")
}

function calcArea(){
    //code the function runs;
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area)
}

console.log(width);
calcArea();

//Arguments & Parameters

calcArea(30, 20);

function calcArea(w, h){
    //code the function runs;
    var area = w * h;
    console.log(area)
}


function dogYears(age){ //parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.")
}
dogYears(4); //arguments
dogYears(5);
dogYears(6);

//Returning values

var total = calcArea(30, 20);

function calcArea(w, h){
    //code the function runs;
    var area = w * h;
    return area; //function spitting the info out
}

console.log(total);

// Functions vs. Procedures

// Functions return values
// Procedures don't return

//Anonymous Functions (AKA closures)

var functionName = function(){
    //code to run
}


//Have to be declared before they are called

var calcArea = function calcArea(w, h){ //defining
    //code the function runs;
    var area = w * h;
    return area; //function spitting the info out
}

var a = calcArea(20, 30); //invoking

console.log(a);