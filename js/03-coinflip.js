// Put random number(0 or 1)in a variable
let coinFlip = Math.round(Math.random());
console.log(coinFlip); // Testing

// Prompt user to enter Heads or Tails
let choice = prompt('Enter Heads or Tails');

// If there is input, remove the extra space and convert input to lowercase
if (choice){
  choice = choice.trim().toLowerCase();
  console.log('user choose ' + choice); // Testing

   //  Check if input is valid 
   if(choice ==='heads' || choice === 'tails'){
      
      if (coinFlip < 1){// If the random number is 0 (coinFlip === 0)
         console.log('heads'); // Testing
      
         if (choice === 'heads'){  // If user choose Heads
            alert('The flip was heads and you chose heads...you win!');
         }
         else if (choice === 'tails'){ //If user choose Tails
            alert('The flip was heads but you chose tails...you lose!');
         }
      }
      else {  // If the random number is 1 (coinFlip === 1)
         console.log('tails');
         if (choice === 'heads'){  // If user choose Heads
               alert('The flip was tails but you chose heads...you lose!');
            }
            else if (choice === 'tails'){  // If user choose Tails
               alert('The flip was tails and you chose tails...you win!');
            } 
      }
   }
   else{  // If user enter invalid input
      alert('Please enter Heads or Tails.');
   }
} 
else{  // If user hit cancel or enter nothing
   alert('Please enter Heads or Tails.');
}