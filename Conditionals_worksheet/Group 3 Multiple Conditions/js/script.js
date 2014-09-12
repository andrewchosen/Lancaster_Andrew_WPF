/* Activity: Conditionals Worksheet
 * Group 3 Multiple Conditions
 * Created by Andrew Lancaster on 9/12/2014 */
 
//User prompts
var frontLeftTire = prompt("Enter the PSI for your front-left tire."); //pressure for front-left tire
var frontRightTire = prompt("Enter the PSI for your front-right tire."); //pressure for front-right tire
var backLeftTire = prompt("Enter the PSI for your back-left tire."); //pressure for back-left tire
var backRightTire = prompt("Enter the PSI for your back-right tire."); //pressure for back-right tire
 
//Variable Array
var tirePressure = [frontLeftTire, frontRightTire, backLeftTire, backRightTire]; //store tire values in an array

//Conditions & Results
if(tirePressure[0] === tirePressure[1] && tirePressure[2] === tirePressure[3]){
	// If both front tire pressure are the same AND the both back tire pressures are the same, the tires pass
	console.log("The tires pass spec!");
}else{
	// If either both back tires are different OR both front tires are different, the tires fail
	console.log("Get your tires checked out!");
}