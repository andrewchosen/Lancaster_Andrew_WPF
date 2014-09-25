/*  Function Assignment:
 *  Personal
 *  Created by Andrew Lancaster on September 24, 2014 */

var totalGuests = prompt('How much money will each wedding guest need to give us to meet our goal amount?\n\nHow many guests will be at the wedding?');
var nonGifters = prompt('How many of the guests are children or people who most likely wont be able to give separately?');
var amountNeeded = prompt('What is your goal amount needed?')
var gifters = totalGuests - nonGifters;

var calcResult = function(g, a){
    var result = a / g;
    return result;
}

var a = calcResult(gifters, amountNeeded);

console.log('You have a total of ' + gifters + ' guests who will most likely give a gift. To reach your goal of $' + amountNeeded + ', each guest will need to give $' + a + '.');