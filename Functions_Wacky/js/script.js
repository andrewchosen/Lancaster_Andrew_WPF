/*  Function Assignment:
 *  Wacky
 *  Created by Andrew Lancaster on September 24, 2014 */

//Prompts
var cupsPerDay = prompt('Based on your current water consumption, can you drink 100 gallons in 3 months?\n\nHow many cups of water do you drink per day on an average?');

//Calculate the answer
function calcAnswer(c){
    //Find out how many cups in 90 days
    var results = c * 90;
    //Convert cups to gallons
    var gallons = results / 16;
    //If gallons is more than 100
    if(gallons > 100){
        //Output success
        console.log('You can! You could drink ' + gallons + ' gallons of water in three months.')
    }else if(gallons === 100){
        //Output exact success
        console.log('You can drink exactly 100 gallons of water in three months!');
    }else{
        //Output failure
        console.log('Nope! You can only drink ' + gallons + ' gallons of water in three months.')
    }
}

//Run function
calcAnswer(cupsPerDay);