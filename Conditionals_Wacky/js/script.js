/* Assignment: Conditionals
 * Wacky
 * Created by Andrew Lancaster on 9/16/2014

 * Topic: Toilet Paper Battle: You vs. The Roommate */

//Find out how many toilet paper sheets your roommate uses
var roommateSheetUsage = prompt("Does your roommate use more toilet paper than you on a weekly basis? Let's find out. \n\nHow many sheets per bathroom visit does your roommate use?");
//Find out how many toilet paper sheets the user uses
var yourSheetUsage = prompt("How many sheets per bathroom visit do YOU use?");
//Find out how many bathroom visits the roommate takes per day
var roommateVisitsPerDay = prompt("How many bathroom visits per day does your roommate take?");
//Find out how many bathroom visits the user takes per day
var yourVisitsPerDay = prompt("How many bathroom visits per day do YOU take?");

var roommateUsage = roommateSheetUsage * roommateVisitsPerDay * 7; //Calculate roommate's weekly usage
var yourUsage = yourSheetUsage * yourVisitsPerDay * 7; //Calculate user's weekly usage

//If roommate's usage is more than the user's
if(roommateUsage > yourUsage){
    //Output these results
    console.log("Your roommate uses " + (roommateUsage - yourUsage) + " more toilet paper sheets than you do each week. Busted!")
//If roommate's usage is less than user's usage
}else if(roommateUsage < yourUsage){
    //Output these results
    console.log("You use " + (yourUsage - roommateUsage) + " more toilet paper sheets than your roommate each week. Oops?");
//If both usage results are the same
}else{
    //Output these results
    console.log("You and your roommate use the exact same amount of toilet paper sheets each week! Amazing, or... creepy?");
}