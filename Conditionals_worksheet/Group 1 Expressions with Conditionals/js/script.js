/* Activity: Conditionals Worksheet
 * Group 1: Expressions with Conditionals
 * Created by Andrew Lancaster on 9/11/2014 */
 
 //User prompts
 var mpg = prompt("How many miles per gallon does your automobile get?"); //defining miles per gallon
 var gas = prompt("What percentage of gas do you have in your tank?"); //defining percentage of gas left
 var tankCapacity = prompt("What is the capacity of your gas tank (in gallons)?"); //defining capacity of gas tank
 
 //Calculations
 var gasLeft = (gas/100) * tankCapacity; //calculating how many gallons of gas there are
 var milesLeft = gasLeft * mpg; //calculating how many miles the automobile can drive before the gas runs out
 
 //If the car can make it 200 miles or more, they can make it to the next gas station before filling up. If it cannot make it 200 miles or more, they cannot make it to the next gas station and they need to fill up now.
 (milesLeft > 200) ? console.log("Yes, you can make it without stopping for gas!") : console.log("You only have " + gasLeft + " gallon(s) of gas in your tank, better get gas now while you can!");