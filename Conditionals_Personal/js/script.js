/* Assignment: Conditionals 
 * Personal
 * Created by Andrew Lancaster on 9/16/2014 */

//Prompts: Gathering fiance(guy) and fiancee(girl) monthly income and expenses
var monthsTilWedding = prompt("This calculation will determine if you will be able to afford to pay for your own wedding or if you'll need help. \n\nHow many months until your wedding?")
if(monthsTilWedding === ""){
	monthsTilWedding = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var moneyNeeded = prompt("How much money do you need to save by then?")
if(moneyNeeded === ""){
	moneyNeeded = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var fianceIncome = prompt("What is the groom's monthly gross income?")
if(fianceIncome === ""){
	fianceIncome = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var fianceExpenses = prompt("What are his total monthly expenses?")
if(fianceExpenses === ""){
	fianceExpenses = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var fianceeIncome = prompt("What is the bride's monthly gross income?")
if(fianceeIncome === ""){
	fianceeIncome = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var fianceeExpenses = prompt("What are her total monthly expenses?")
if(fianceeExpenses === ""){
	fianceeExpenses = prompt("Oops, you forgot to answer the question. Please try again. \n\nHow many months until your wedding?")
}

var combinedIncome = (fianceIncome - fianceExpenses) + (fianceeIncome - fianceeExpenses)
var maxSavings = combinedIncome * monthsTilWedding

var monthlySavings = moneyNeeded / monthsTilWedding;
var result = maxSavings - moneyNeeded

if(result <= 0){
	console.log("You cannot afford this wedding by yourselves. You will need at least $" + -result + " from other sources to cover the amount you need, and that is without allowing yourselves breathing room.");
}else if(result <=200){
	console.log("You can just barely afford the wedding with only $" + result + " left over. It is recommended that you look to cut some expenses to allow for more breathing room.");
}else if(result >=1000){
	console.log("You can afford your wedding! You both have well over the amount in extra funds to save for the wedding with $" + result + " of breathing room. Just remember to save at least $" + monthlySavings + "/month to reach your goal.");
}else{
	console.log("You can afford your wedding with $" + result + " of breathing room! Just remember to save at least $" + monthlySavings + "/month to reach your goal.");
}