/*
* A function that receives a String parameter and returns how many vowels that string has.
*
* Solution:
* The solution selected is based on Regexp, regexep can define a match with a given string
* and return an array with the matched elements, add g and i flags for "global" and
* case insensitive properties.
*/

function vowelsCounter() {
  var tester = /[aeiou]/gi;
  var value = document.getElementById('input-vowels').value;
  var outputLength = document.getElementById('output-vowels')
  var matchs = value.match(tester);
  var matchLength = matchs === null ? 0 : matchs.length;

  outputLength.value = matchLength;
}

document.getElementById('vowel-trigger').addEventListener('click', vowelsCounter);
