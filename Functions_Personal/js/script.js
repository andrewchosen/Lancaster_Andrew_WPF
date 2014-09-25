/*  Function Assignment:
 *  Personal
 *  Created by Andrew Lancaster on September 24, 2014 */

//Ask user how many guests will be there
var totalGuests = prompt('How much money will each wedding guest need to give us to meet our goal amount?\n\nHow many guests will be at the wedding?');
//Ask user how many of the guests wont give gifts
var nonGifters = prompt('How many of the guests are children or people who most likely wont be able to give separately?');
//Ask user how much money is needed
var amountNeeded = prompt('What is your goal amount needed?');
//Calculate how many guests will give gifts
var gifters = totalGuests - nonGifters;
//Create function to find the amount each guest will need to give to reach the goal
var calcResult = function(g, a){
    var result = a / g;
    return result;
}
//Store function value in variable
var a = calcResult(gifters, amountNeeded);
//Export results to console
console.log('You have a total of ' + gifters + ' guests who will most likely give a gift. To reach your goal of $' + amountNeeded + ', each guest will need to give $' + a + '.');