/*  Function Assignment:
 *  Industry
 *  Created by Andrew Lancaster on September 24, 2014 */

//Prompts
var siteOneCost = prompt('Based on the average earnings of your last four website designs, will you reach your goal at 50 websites?\n\nWhat was the earnings of your last website design?');
var siteTwoCost = prompt('How about the one before that(#2)?');
var siteThreeCost = prompt('And the one before that(#3)?');
var siteFourCost = prompt('And the one before that(#4)?');
var goal = prompt('What is the least amount you want to make after 50 sites (including the previous four)?');

//I cant figure out why they are not coming in as numbers, but I had to convert them to make it work. I'm just glad I knew how to, but I would like to know what I did wrong here.
var siteOneCost = Number(siteOneCost);
var siteTwoCost = Number(siteOneCost);
var siteThreeCost = Number(siteOneCost);
var siteFourCost = Number(siteOneCost);

//Create function
function calcAverage(one, two, three, four, g){
    var average = (one + two + three + four) / 4;
    var total = average * 50;
    //If total is greater than or equal to the goal, success, otherwise, failure
    (total >= g) ? console.log('You exceeded your goal!') : console.log('You did not exceed your goal');
}

//Run function
calcAverage(siteOneCost,siteTwoCost,siteThreeCost,siteFourCost, goal);