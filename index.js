//Pseudo code for Block 7 is below

/*
Step 1: Declare three constant numeric variables assigned the values of 10, 40, and 39 using arithmetic operators
Step 2: Declare a string variable saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
Step 3: Create a pop up dialog that displays the string and numeric values
*/

// Declaring the constant variable num1 and using multiplication to assign a value of 10 
const num1 = 5 * 2; 

// Declaring the constant variable num2 and using division to assign a value of 40 
const num2 = 400 / 10; 

// Declaring the constant variable num3 and using addition to assign a value of 39 
const num3 = 25 + 14; 

// Declaring the constant variable userMessage and assigning string text 
const userMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "; 

// Creating a popup dialog that alerts the user to open the vault providing the secret codes 10, 40, 39
alert(userMessage + num1 + "-" + num2 + "-" + num3);

// Assigning temporal literal of num1, num2, num3 to the variable combination to compare against userInput variable
const combination = `${num1}-${num2}-${num3}`;

// Creating a window prompt requesting the user to input the secret combination using the XX-XX-XX format
const userInput = prompt("Please enter the secret combination in the format XX-XX-XX");

// If else statement to check if user input matches the combination
if (combination === userInput) {
  document.getElementById("vault").innerHTML =
  "Congratulations, you have unlocked the secrets to the universe!"; // If userInput matches combination, then they will receive a congratulations message
} else {
  document.getElementById("vault").innerHTML =
  "Please try again!"; // If userInput does not match the combination, then the user will be told to try again.
}