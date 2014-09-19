/* Assignment: Conditionals 
 * Industry
 * Created by Andrew Lancaster on 9/16/2014 */

//Find out how many weeks user wants to take off
var timeOff = prompt("This calculation will tell a freelance web developer if they can take a certain amount of weeks off and still meet their annual money goal. Let's get started.\n\nHow many weeks do you want to take off?");
//Find out least amount of money user needs to make
var leastAmount = prompt("What is the least amount of money you need to make in the year in question?");
//Find out how many websites the user can make per day
var websitesPerDay = prompt("How many websites can you build per day?");
//Find out how many days the user works per week
var daysPerWeek = prompt("How many days do you work per week?");
//Find out the average website cost
var averageWebsiteCost = prompt("What is the average cost of a website you build?");

//Calculate how many websites are made per year then subtract the amount that will be missed
var websitesPerYear = (websitesPerDay * daysPerWeek * 4 * 12) - (websitesPerDay * daysPerWeek * timeOff);
//Calculate how much money will be made without the vacation time
var websitesMoney = websitesPerYear * averageWebsiteCost;

//Calculate amount of money left or how far under the final result is
var result = websitesMoney - leastAmount;

//If result is greater than or equal to 0, display first result; otherwise, display second output
(result >= 0) ? console.log("You will still meet your goal of $" + leastAmount + " this year if you take off " + timeOff + " weeks with $" + result + " to spare.") : console.log("If you take off " + timeOff + " weeks, you will be -$" + -result + " short of your annual goal.");