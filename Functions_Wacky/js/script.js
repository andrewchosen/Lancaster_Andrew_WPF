/*  Function Assignment:
 *  Wacky
 *  Created by Andrew Lancaster on September 24, 2014 */

var cupsPerDay = prompt('Based on your current water consumption, can you drink 100 gallons in 3 months?\n\nHow many cups of water do you drink per day on an average?');

function calcAnswer(c){
    var results = c * 90;
    var gallons = results / 16;
    if(gallons > 100){
        console.log('You can! You could drink ' + results + ' gallons of water in three months.')
    }else if(gallons === 100){
        console.log('You can drink exactly 100 gallons of water in three months!');
    }else{
        console.log('Nope! You can only drink ' + gallons + ' gallons of water in three months.')
    }
}

calcAnswer(cupsPerDay);