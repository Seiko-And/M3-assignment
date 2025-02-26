let num1 = parseInt(prompt('Enter a first integer'));
let num2 = parseInt(prompt('Enter a second integer'));

if (isNaN(num1) || isNaN(num2)){
    document.write('<p> Please enter valid numbers</p>')
}
else if (num1 > num2){
    document.write('<p> The larger number is ' + num1 + '</p>');
}
else if (num1 < num2) {
    document.write('<p> The larger number is ' + num2 + '</p>');
}
else{
    document.write('<p> They are the same </p>');
}