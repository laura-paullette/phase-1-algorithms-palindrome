function isPalindrome(word) {
    const arrayOfLetters = word.split('');
    const reverseLetters = arrayOfLetters.reverse()
    const reverseString  = reverseLetters.join('')
  
    if (word == reverseString){
  
      return true
  
    } else {
      return false
    }
  
  }


/* 
  Add your pseudocode here
Function isPalindrome has to take a string as a parameter.
If the string is palindrom, the function should return true.
If not then the function should return false.

*/

/*
  Add written explanation of your solution here
  The function takes the word and splits each letter into an array,after which the array is reversed. The array is then joined again into a word.
  it then compares if the orginal word is the same as the reversed word. If it is,it returns true,else it returns false.
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Expecting: false')
  console.log('=>', isPalindrome('dress'));

  console.log("Expecting: true");
  console.log('=>', isPalindrome('kayak'));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
