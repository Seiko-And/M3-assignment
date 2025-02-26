// Prompt the usert to enter an integer
let num1 = parseInt(prompt('Enter a first integer'));
let num2 = parseInt(prompt('Enter a second integer'));

// Check the larger number and display the result
if (isNaN(num1) || isNaN(num2)){ // Check if inputs are not number 
    document.write('<p> Please enter valid numbers</p>')
}
else if (num1 > num2){ // If the first integer is larger
    document.write('<p> The larger number is ' + num1 + '</p>');
}
else if (num1 < num2) {  // If the second integer is larger
    document.write('<p> The larger number is ' + num2 + '</p>');
}
else{ // If both numbers are equal
    document.write('<p> They are the same </p>');
}