/* Assignment: Conditionals 
 * Personal
 * Created by Andrew Lancaster on 9/16/2014 */

/* Topic: Can we afford our wedding? */ 

//Question #1: "How many months until your wedding?"
var monthsTilWedding = prompt("This calculation will determine if you will be able to afford to pay for your own wedding or if you'll need help. \n\nHow many months until your wedding?");
if(monthsTilWedding === ""){ //If answer is empty
	monthsTilWedding = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?"); //show error, then ask question again
}

//Question #2: "How much money do you need to save by then?"
var moneyNeeded = prompt("How much money do you need to save by then?");
if(moneyNeeded === ""){ //If answer is empty
	moneyNeeded = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow much money do you need to save by then?"); //show error, then ask question again
}

//Question #3: "What is the groom's monthly gross income?"
var fianceIncome = prompt("What is the groom's monthly gross income?");
if(fianceIncome === ""){ //If answer is empty
	fianceIncome = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the groom's monthly gross income?"); //show error, then ask question again
}

//Question #4: "What are his total monthly expenses?"
var fianceExpenses = prompt("What are his total monthly expenses?");
if(fianceExpenses === ""){ //If answer is empty
	fianceExpenses = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat are his total monthly expenses?"); //show error, then ask question again
}

//Question: #5: "What is the bride's monthly gross income?"
var fianceeIncome = prompt("What is the bride's monthly gross income?");
if(fianceeIncome === ""){ //If answer is empty
	fianceeIncome = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat is the bride's monthly gross income?"); //show error, then ask question again
}

//Question #6: "What are her total monthly expenses?"
var fianceeExpenses = prompt("What are her total monthly expenses?");
if(fianceeExpenses === ""){ //If answer is empty
	fianceeExpenses = prompt("Oops, you forgot to answer the question. Please try again. \n\nWhat are her total monthly expenses?"); //show error, then ask question again
}

var combinedSavings = (fianceIncome - fianceExpenses) + (fianceeIncome - fianceeExpenses); //subtracting each gross income from expenses and combining them for a total monthly savings
var maxSavings = combinedSavings * monthsTilWedding //converting total monthly savings into total savings over the time until the wedding
var monthlySavingsNeeded = moneyNeeded / monthsTilWedding; //find how much money is needed to be saved per month
var result = maxSavings - moneyNeeded //calculate the amount left over

//If amount leftover is less than zero
if(result < 0){
	//Output that the couple cannot afford the wedding and display result as positive
	console.log("You cannot afford this wedding by yourselves. You will need at least $" + -result + " from other sources to cover the amount you need, and that is without allowing yourselves breathing room.");
//If amount leftover is 0-200
}else if(result <=200){
	//Explain that the couple can afford the wedding, but just barely
	console.log("You can just barely afford the wedding with only $" + result + " left over. It is recommended that you look to cut some expenses to allow for more breathing room.");
//If amount leftover is 1,000 or more
}else if(result >=1000){
	//Explain that the couple is in good shape to pay for their own wedding
	console.log("You can afford your wedding! You both have well over the amount in extra funds to save for the wedding with $" + result + " of breathing room. Just remember to save at least $" + monthlySavingsNeeded + "/month to reach your goal.");
//If amount leftover is 201-999
}else{
	//Explain that the couple can afford their wedding with a warning to save enough per month
	console.log("You can afford your wedding with $" + result + " of breathing room! Just remember to save at least $" + monthlySavingsNeeded + "/month to reach your goal.");
}