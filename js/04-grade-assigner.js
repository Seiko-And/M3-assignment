

// Prompt the user to enter a number
const testScore = parseInt(prompt('Enter a number between 1 and 100'));

// Check the score and display the grade in the console
switch (true){
    case testScore < 1 || testScore > 100: // Check if the user enter a number between 1 and 100
        console.log('Only numbers between 1 and 100');
        break;
    case testScore < 60: //  score is less than 60
        console.log('You received an F');
        break;
    case  testScore < 70: // score is between 60 and 69
        console.log('You received a D');
        break;
    case testScore < 80: // score is between 70 and 79
        console.log('You received a C');
        break;
    case testScore < 90: // score is between 80 and 89
        console.log('You received a B');
        break;
    case testScore <= 100: // score is between 90 and 100
        console.log('You received an A');
        break;
    default: // Just in case the user hit cancel or enter string or nothing.
        console.log('Plese go back and enter a number between 1 and 100.')
                   
}
