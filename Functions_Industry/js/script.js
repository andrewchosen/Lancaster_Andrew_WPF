/*  Function Assignment:
 *  Industry
 *  Created by Andrew Lancaster on September 24, 2014 */

var siteOneCost = prompt('Based on the average earnings of your last four website designs, will you reach your goal at 50 websites?\n\nWhat was the earnings of your last website design?');
var siteTwoCost = prompt('How about the one before that(#2)?');
var siteThreeCost = prompt('And the one before that(#3)?');
var siteFourCost = prompt('And the one before that(#4)?');
var goal = prompt('What is the least amount you want to make after 50 sites (including the previous four)?');

function calcAverage(one, two, three, four){
    var average = (one + two + three + four) / 4;
    var total = average * 50;
    (total >= goal) ? console.log('You exceeded your goal!') : console.log('You did not exceed your goal');
}
