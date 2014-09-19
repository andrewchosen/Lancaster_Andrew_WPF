/* Assignment: Conditionals 
 * Industry
 * Created by Andrew Lancaster on 9/16/2014 */

var timeOff = prompt("This calculation will tell a freelance web developer if they can take a certain amount of weeks off and still meet their annual money goal. Let's get started.\n\nHow many weeks do you want to take off?");
var leastAmount = prompt("What is the least amount of money you need to make?");
var websitesPerDay = prompt("How many websites can you build per day?");
var daysPerWeek = prompt("How many days do you work per week?");
var averageWebsiteCost = prompt("What is the average cost of a website you build?");

var websitesPerYear = (websitesPerDay * daysPerWeek * 4 * 12) - (websitesPerDay * daysPerWeek * timeOff);
var websitesMoney = websitesPerYear * averageWebsiteCost;

var result = websitesMoney - leastAmount;

console.log(result);