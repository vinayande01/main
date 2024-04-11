// coding Challenge #3 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
// �
// � 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy 
// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 


// var team1=[97,112,89];
// var team2=[109,95,106];
// var minscore=100;

// var avg=(team1) => {
//     sum=0;
//     for (i of team1){
//         sum+=i/2
//     }
//     return sum
// }
// var avgofdolp=avg(team1)
// var avgofkol=avg(team2)

// if (avgofdolp >minscore && avgofkol>minscore) {
//     var res= avgofdolp > avgofkol ? "Dolphis win the trophy 🏆" :  "koleas win the trophy 🏆";
//     console.log(res)
// }
// else{
//     console.log("No one wins the trophy")
// }

//  Coding Challenge #4 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%. 
// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement 
// �
// � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25” 
// Test data: 
// § Data 1: Test for bill values 275, 40 and 430 
// Hints: 
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// § Value X is between 50 and 300, if it's >= 50 && <= 300 
// GOOD LUCK 
// �
// �
// bill=430;
// tip1=15/100;
// tip2=20/100;
// var res= bill >=50 && bill<=300 ? bill*tip2 : bill*tip1
// console.log(`Bill value:${bill} 
// Tips amount:${res} 
// Total amount to be paid:${res+bill}`)

// Coding Challenge #4 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a 
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
// 300. If the value is different, the tip is 20%. 
// Your tasks: 
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
// this. It's not allowed to use an if/else statement 
// �
// � (If it's easier for you, you can 
// start with an if/else statement, and then try to convert it to a ternary 
// operator!) 
// 2. Print a string to the console containing the bill value, the tip, and the final value 
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
// 316.25” 
// Test data: 
// § Data 1: Test for bill values 275, 40 and 430 
// Hints: 
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
// § Value X is between 50 and 300, if it's >= 50 && <= 300
// var team1avg = [71,23,44];
// var team2avg=[65,54,49];
// calAverage = (s) => {
//     sum=0;
//     for (i of s){
//         sum+=i/3
//     return sum
//     }
// }
// var team1=calAverage(team1avg)
// var team2=calAverage(team2avg)
// if (team1 >= 2* team2) {
//     checkWinners= (team1,team2) => {console.log(`${team1>team2 ? "Dolphins" : "Koalas"} Wins ${team1} Vs. ${team2}`)
// }
// checkWinners(team1,team2)
// }
// else{
//     console.info("No Team Wins the Trophy")
// }

// Coding Challenge #2 
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%. 
// Your tasks: 
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100 
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below 
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before 
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
// Test data: 125, 555 and 44 
// �
// � 
// Hint: Remember that an array needs a value in each position, and that value can 
// actually be the returned value of a function! So you can just call a function as array 
// values (so don't store the tip values in separate variables first, but right in the new 
// array) 
// GOOD LUCK 

console.log("hi")