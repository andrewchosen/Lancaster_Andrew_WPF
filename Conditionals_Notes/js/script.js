//Conditional Logic

var oldEnough = false;

//if the child is old enough, print to the console "you can ride!"
if(oldEnough){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}

//

var kidHeight = 40;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}

//

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}

//Conditional Logic - else

var kidHeight = 48;
var minHeight = 48;

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
}else{
	//code performed if condition is false
	console.log("Sorry kid, you've got some growing to do first!");
}

//Conditional Logic - else if

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to the console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeight){
	//you can ride!
	console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight ){
	//you can ride with parent present
	console.log("You can ride, but only with a parent present.");
}else{
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}

//Conditional Logic - Logical Operators v1

var budget = 300;
var windowsPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(windowsPhonePrice < budget && paycheck > 300){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
}

//Conditional Logic - Logical Operators v2

var budget = 100;
var windowsPhonePrice = 199.99;
var wonLottery = true;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(windowsPhonePrice < budget || wonLottery){
	console.log("We can buy the phone!");
}else{
	console.log("No phone for you!!");
}

// Conditional Logic - Ternary Operators

/* if(condition){
 * do if true;
 * }else{
 * do if false;
 * }
 *
 * (condition) ? do if true : do if false; */

var gpa = 1.9;

//if the gpa is over the min 2.0 score, the student can graduate
/* if( gpa > 2.0){
	console.log("You can graduate!");
}else{
	console.log("You can't graduate!");
}*/

(gpa > 2.0) ? console.log("You can graduate!") : console.log("You can't graduate!");

var age = 1;
var book;

//If the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
/* if(age <10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}*/

book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book); 