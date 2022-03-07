//Q1
console.log("Q1: ");

const numbers = [21, 30, 12, 18, -5, 38, -10, -11, 0, 32];
const evenNumbers = [];
const oddNumbers = [];

for( i = 0; i < numbers.length; i++)
{
    if(numbers[i]%2 == 0)
    {
        evenNumbers.push(numbers[i]); 
    }
    else
    {
        oddNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers, oddNumbers);

console.log("Q1 ends.");

//Q2

console.log("Q2: ");

var i = 0, size; 
function makeLine(size)
{
    while(i < size)
    {
        console.log("#");
        i++;
    }
}

console.log(makeLine(6));

console.log("Q2 ends.");

//Q3

console.log("Q3: ");

var AnimAstros = function(astronautID, name, specie)
{
    this.astronautID = astronautID;
    this.name = name;
    this.specie = specie;
    this.ID = function()
    {
        console.log(this.astronautID);
    }
    this.print = function()
    {
        console.log(this.name + " loves space <3");
    }
} 

var AnimAstros3 = new AnimAstros(3, "Brad", "Chimpanzee");
var AnimAstros4 = new AnimAstros(4, "Leroy", "Beagle");
var AnimAstros5 = new AnimAstros(5, "Almina", "Tartigrade");

AnimAstros3.ID();
AnimAstros5.print();

const crews = [AnimAstros3, AnimAstros4, AnimAstros4];

for(i = 0; i<crews.length; i++)
{
    console.log(crews[i]);
}

console.log("Q3 ends.");