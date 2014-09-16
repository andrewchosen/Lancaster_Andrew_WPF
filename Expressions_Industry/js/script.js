/** Assignment: Expressions
 *  Industry-specific
 *  Created by Andrew Lancaster on 9/11/2014 **/

//Finding optimal column width depending on screen width and padding.

var screenWidth = prompt("We are calculating the optimal pixel width of your desired amount of columns depending on the screen width and padding. This will also tell you if there will be excess pixels based on your choices. \n\nQuestion #1: In pixels, what screen width are we measuring for?"); //Explanation of calculation and prompt for screen width.
var columns = prompt("Question #2: How many columns do you want?"); //Prompt for amount of columns
var padding = prompt("Question #3: In pixels, how much space do you want on each side of the screen (left and right padding)?"); //Prompt for side padding

var totalPadding = padding * 2; //Multiplying padding by two to create total from both sides
var columnExcess = (screenWidth - totalPadding) % columns; //Subtracting the total padding from screen size to find container width and then finding the remainder when divided into the amount of columns
var columnWidth = (screenWidth - totalPadding - columnExcess) / columns; //Subtracted total padding and excess pixels from screen size then divided by columns to find optimal column width

//Using boolean to check if there is or is not column excess. 
if(columnExcess === 0){ //if columnExcess value is 0, it will prompt message below
	console.log("Based on the screen width of " + screenWidth + " pixels and padding of " + padding + " pixels on each side, the optimal width for " + columns + " columns would be " + columnWidth + " pixels.")
}
else{ //if columnExcess value is NOT 0, it will prompt message below
	console.log("Based on the screen width of " + screenWidth + " pixels and padding of " + padding + " pixels on each side, the optimal width for " + columns + " columns would be " + columnWidth + " pixels; however, there would be an excess of " + columnExcess + " pixels.")
}
