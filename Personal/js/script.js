//Assignment: Expressions
//Personal
//by Andrew Lancaster
//created on 9/11/2014

//Average hours studied per day for the past week

var monday = prompt("How many hours did you study on Monday?"); //Prompt user for study hours on Monday
var tuesday = prompt("How many hours did you study on Tuesday?"); //Prompt user for study hours on Tuesday
var wednesday = prompt("How many hours did you study on Wednesday?"); //Prompt user for study hours on Wednesday
var thursday = prompt("How many hours did you study on Thursday?"); //Prompt user for study hours on Thursday
var friday = prompt("How many hours did you study on Friday?"); //Prompt user for study hours on Friday
var saturday = prompt("How many hours did you study on Saturday?"); //Prompt user for study hours on Saturday
var sunday = prompt("How many hours did you study on Sunday?"); //Prompt user for study hours on Sunday

var dailyHours = [ Number(monday), Number(tuesday), Number(wednesday), Number(thursday), Number(friday), Number(saturday), Number(sunday) ]; //store daily values in array
var weeklyTotal = dailyHours[0] + dailyHours[1] + dailyHours[2] + dailyHours[3] + dailyHours[4] + dailyHours[5] + dailyHours[6]; //adding all daily values together
var dailyAverage = weeklyTotal / 7; //dividing the weekly total by the amount of days in a week to get the average

console.log("In the past week, you have studied for " + weeklyTotal + " total hours, averaging " + dailyAverage + " hours per day."); //output