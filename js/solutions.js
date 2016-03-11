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

/*
* A function that receives 2 Date parameters and returns the time difference in minutes.
*
* Solution:
* Solution selected is based on a substraction of date elements, when you subtracts a date from
* another the result will be givenin milliseconds because of that you need to redouce the
* result to seconds and after that to minutes => "difference / 1000 / 60".
*
* Note: In this sample we are just using full days thanks to date type input interface, but the
* way of work for different kind of dates is the same.
*/
function deteDifference() {
  var milliSeconds;
  var differenceInMinutes;
  var differenceInput = document.getElementById('minutes-difference');
  var baseDateDay = document.getElementById('base-date').value;
  var futureDateDay = document.getElementById('future-date').value;
  var baseDate = new Date(baseDateDay);
  var futureDate = new Date(futureDateDay);

  differenceInMinutes = (futureDate - baseDate) / 1000 / 60;

  differenceInput.value = differenceInMinutes;
}

document.getElementById('minutes-trigger').addEventListener('click', deteDifference);
