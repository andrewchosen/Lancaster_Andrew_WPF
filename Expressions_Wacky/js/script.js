/** Assignment: Expressions
 *  Wacky
 *  Created by Andrew Lancaster on 9/11/2014 **/

//Karate chopping a brick into equal pieces

var height = prompt("Karate chop your brick here. \n\nHeight of brick in inches.")
var length = prompt("Length of brick in inches.");
var depth = prompt("Depth of brick in inches.");
var chops = prompt("How many times do you want to chop it into equally sized pieces?");

var volume = height * length * depth;
var pieces = chops * 2;
var result = volume / pieces;

if(chops == 0){
console.log("You chose not to chop your " + volume + " square inch brick. That is no fun at all. Please refresh and CHOP THE BRICK!")
}
else{
console.log("After chopping the " + volume + " square inch brick " + chops + " time(s), you are left with " + pieces + " equal " + result + " square inch bricks.")
}

	