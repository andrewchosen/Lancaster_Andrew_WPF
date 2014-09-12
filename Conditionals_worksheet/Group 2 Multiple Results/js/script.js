/* Activity: Conditionals Worksheet
 * Group 2: Multiple Results
 * Created by Andrew Lancaster on 9/11/2014 */
 
//User prompts
var gradePercent = prompt("Enter the number grade you received:");
 
//Conditions & Results
if(gradePercent >= 94.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) A+ in the class!"); //a grade of 95% or higher receives an A+
}else if(gradePercent >= 89.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) A in the class!"); //a grade of 90-94% receives an A
}else if(gradePercent >= 84.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) B+ in the class!"); //a grade of 85-89% receives a B+
}else if(gradePercent >= 79.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) B in the class!"); //a grade of 80-84% receives a B
}else if(gradePercent >= 75.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) C+ in the class!"); //a grade of 76-79% receives a C+
}else if(gradePercent >= 72.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) C in the class!"); //a grade of 73-75% receives a C
}else if(gradePercent >= 69.5){
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) D in the class!"); //a grade of 70-72% receives a D
}else{
	console.log("You have a " + gradePercent + "%, which means you have earned a(n) F in the class!"); //a grade of 0-69% receives an F
}
