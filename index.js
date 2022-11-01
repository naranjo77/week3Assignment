//1. Create an array called ages that 
//contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
 
//Programmatically subtract the value of the first 
//element in the array from the value in the 
//last element of the array

console.log(ages[ages.length-1] - ages[0]);

//1a Add a new age to your array and repeat 
//the tep above to ensure it is dynamic
//(works for arrays of different lengths).

ages.push(20);
console.log(ages[ages.length-1] - ages[0]);

//1b Use a loop to iterate through the array and calculate the average age.

let i, sum = 0;

for(i = 0; i < ages.length; i++)

{

    sum = sum + ages[i];

}

console.log("The average age in the ages array is : ",sum/ages.length);
console.log("\n\n\n");
    
//Create an array called names that contains the 
//following values: 
//‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buc’, ‘Bob’.
//(had spell buc with three letters vsc doesnt let me use the last letter)

let names = [ 'Sam', 'Tommy', 'Tim', 'Sally', 'buc', 'Bob'];

//Use a loop to iterate through the array 
//and calculate the average number of letters per name. 

sum=0;

for (i = 0; i < names.length; i++)

{

sum = sum + names[i].length;

}

console.log("The average letters per name in the names array is : ",sum/names.length);

//Use a loop to iterate through the array 
//again and concatenate all the names together, separated by spaces. 


let con = names[0];

for(i = 1; i<names.length; i++)

{

con = con.concat(" ",names[i]);

}

console.log("Concatenated names : ",con);

//3. How do you access the last element of any array?
// you can use index 0 console.log(names []); 
//and you subtract 1 because it is zero based

//4. How do you access the first element of any array
// console.log(names []);

//4. Create a new array called nameLengths. 
//Write a loop to iterate over the previously 
//created names array and add the length of each 
//name to the nameLengths array.

let nameLengths = [];
for(i=0; i<names.length; i++)

{

nameLengths[i] = names[i].length;

}

//Write a loop to iterate over the nameLengths array and 
//calculate the sum of all the elements in the array

sum = 0;

for(i = 0; i < nameLengths.length; i++)

{

sum = sum + nameLengths[i];

}

console.log("Sum of all elements in the nameLengths array is : ",sum);
console.log("\n\n\n");

//7. Write a function that takes two parameters, 
//word and n, as arguments and returns the 
//word concatenated to itself n number of 
//times. (i.e. if I pass in ‘Hello’ and 3, I would

function concat_n_times(word, n)

{

let con = word;

for(i=1;i<=n; i++)

{

con = con.concat(word);

}

return con;

}

//Printing the concatenated same word for n times using function call

console.log("Concatenated words : ",concat_n_times("Hello", 3));

console.log("\n\n\n");

//8. Write a function that takes two parameters, 
//firstName and lastName, and returns a full name.

function fullName(firstName, lastName)

{

return firstName.concat(" ", lastName);

}

console.log("Full Name : ",fullName("John", "Smith"));

console.log("\n\n\n");


//9. Write a function that takes an array of 
//numbers and returns true if the sum of 
//all the numbers in the array is greater than 100.

function isTotalGreaterThan100(arr)

{

sum=0;

for(i=0; i<arr.length; i++)

{

sum = sum + arr[i];

}

if(sum > 100)

{

return true;

}

else

{

return false;

}

}

//10. Write a function that takes an array of 
//numbers and returns the average of 
//all the elements in the array.

function average(arr)

{

sum=0;

for(i=0; i<arr.length; i++)

{

sum = sum + arr[i];

}

return (sum/arr.length);

}

//11. Write a function that takes two arrays of 
//numbers and returns true if the average of 
//the elements in the first array is greater 
//than the average of the elements in the second array

function compare_average(arr1, arr2)

{

if(average(arr1) > average(arr2))

{

return true;

}

else

{

return false;

}

}

//*Write a function called willBuyDrink that takes a boolean 
//isHotOutside, and a number moneyInPocket, and 
//returns true if it is hot outside and if moneyInPocket 
//is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket)

{

if((isHotOutside) && (moneyInPocket > 10.50))

{

return true;

}

else

{

return false;

}

}

let hotOutside = true;

let moneyInthePocket = 30.5;



console.log("Drink can be buy : ",willBuyDrink(hotOutside, moneyInthePocket));