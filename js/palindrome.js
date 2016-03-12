/*
*  Write a function that tests whether a string is a palindrome
*/

function palindromeTest(value) {
  value = value.replace(/\s/g, '').toLowerCase();
  var isPalindrome = (value === value.split('').reverse().join(''));

  console.log(isPalindrome);
  document.getElementById('palindrome-result').value = isPalindrome;
}

function getPalindromePhrase() {
  var phrase = document.getElementById('palindrome-phrase').value;
  palindromeTest(phrase);
}

document.getElementById('palindrome-trigger').addEventListener('click', getPalindromePhrase);
