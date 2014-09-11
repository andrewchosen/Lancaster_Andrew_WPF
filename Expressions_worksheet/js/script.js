//Expressions Worksheet
//Andrew Lancaster
//September 10, 2014

//Dog Years

var humanAge = 1; // Sparky's age in human years
var dogAge = humanAge * 7; // human age translated to dog years
console.log("Sparky's age is " + humanAge + " human years old which is " + dogAge + " in dog years.") // complete output

//Slice of Pie I

var slicesPerPizza = 10; // slices per pizza
var people = 4; // number of people at the party
var pizzas = 2; // number of pizzas
var slicesPerPerson = slicesPerPizza * pizzas/people; // calculation of slices of pizza per person

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.") // complete output

//Slice of Pie II

var leftOver = slicesPerPizza * pizzas % people; // amount of slices of pizza leftover for Sparky

console.log("Sparky got " + leftOver + " slices of pizza.") // complete output

//Average shopping bill

var groceryAmounts = [100, 90, 80, 70, 60]; // totals of last 5 grocery bills
var total = groceryAmounts[0] + groceryAmounts[1] + groceryAmounts[2] + groceryAmounts[3] + groceryAmounts[4]; // total of all grocery bills
var average = total/5; // average price of all grocery bills
console.log("You have spent a total of " + "$" + total + " on groceries over 5 weeks. That is an average of " + "$" + average + " per week.") // complete output

//Discounts

var originalPrice = 50; // original price of item
var discount = 10; // discount percentage of item
var item = "shoes"; // description of item
var tax = 7; // tax percentage of item
var subtotal = originalPrice - originalPrice * (discount/100); // item price with discount, or subtotal
var total = subtotal + subtotal * (tax/100); // discounted price plus tax, or total

console.log("Your " + item + " were originally " + "$" + originalPrice + ", but after a " + discount + "%" + " discount, it is now $" + subtotal + " without tax, and $" + total + " with tax.") // complete output


