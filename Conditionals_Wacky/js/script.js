//Assignment: Expressions
//Wacky
//by Andrew Lancaster
//created on 9/11/2014

//Finding optimal column width depending on screen width and padding.

//Find the height of the brick
var height = prompt("Karate chop your brick into equal pieces here. \n\nHeight of brick in inches.")
if(height === ""){ //If answer is empty
    height = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the height of brick in inches?"); //show error, then ask question again
}

//Find the length of the brick
var length = prompt("Length of brick in inches.");
if(length === ""){ //If answer is empty
    length = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the length of brick in inches?"); //show error, then ask question again
}

//Find the depth of the brick
var depth = prompt("Depth of brick in inches.");
if(depth === ""){ //If answer is empty
    depth = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the depth of brick in inches?"); //show error, then ask question again
}

//Find out how many times user will chop the brick
var chops = prompt("How many times do you want to chop it into equally sized pieces?");
if(chops === ""){ //If answer is empty
    chops = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the chops of brick in inches?"); //show error, then ask question again
}

var volume = height * length * depth;
var pieces = chops * 2;
var result = volume / pieces;

if(chops == 0){
console.log("You chose not to chop your " + volume + " square inch brick. That is no fun at all. Please refresh and CHOP THE BRICK!")
}
else{
console.log("After chopping the " + volume + " square inch brick " + chops + " time(s), you are left with " + pieces + " equal " + result + " square inch bricks.")
}

	