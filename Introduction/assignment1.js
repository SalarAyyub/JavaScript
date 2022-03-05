//Q1

console.log("Q1: ");

var number_1 = 25;
var number_2 = 255;
var number_3 = 300; 

if(number_1 + number_2 == number_3)
{
    console.log("Good Job!");
}
else
{
    console.log("Does not match");
}

console.log("Q1 ends.");

//Q2

console.log("Q2: ");

var shuttleName = "Discovery";
var shuttleSpeed_mph = 17500;
var distanceToMars_km = 225000000;
var mileKmConversion = 0.621;

console.log(typeof shuttleName);
console.log(typeof shuttleSpeed_mph);
console.log(typeof distanceToMars_km);
console.log(typeof mileKmConversion);

var milesToMars = (distanceToMars_km * mileKmConversion);
var hoursToMars = (milesToMars/shuttleSpeed_mph);
var daysToMars = hoursToMars/24;

console.log(shuttleName,"will take",Math.round(daysToMars),"to reach Mars.");

console.log("Q2 ends.");



