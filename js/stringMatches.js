
/*
* Given 2 strings of unknown characters (but it can't be repeated) create a function that returns an array of the characters
* that are repeated in both strings in the most efficient way.
*
* Solution:
*
* Simple algoritm with the next steps:
*   - Create an array with each string
*   - Order the array in ascending order
*   - Search with two loops, movint two pointers, if base ponter value is lower than second pointer value then move base
*     pointer forward, if second pointer value is lower than base pointer, move second pointer forward, else
*     if they are equals, you have a match and move both of them forward.
*/

function repeteadChrats(baseVal, valToCompare) {
  var baseArray = baseVal.split('').sort();
  var toCompareArray = valToCompare.split('').sort();
  var matchValues = [];
  var i = 0;
  var j = 0;

  while (i < baseArray.length) {
    currentBaseVal = baseArray[i];

    if (currentBaseVal === undefined) break;

    while (j < toCompareArray.length) {
      currentToCompareVal = toCompareArray[j];

      if (currentBaseVal === undefined || currentToCompareVal === undefined) break;

      if (currentBaseVal > currentToCompareVal) {
        j++; continue;
      } else if (currentBaseVal < currentToCompareVal) {
        i++; currentBaseVal = baseArray[i]; continue;
      } else if (currentBaseVal === currentToCompareVal) {
        matchValues.push(currentBaseVal);
        i++; currentBaseVal = baseArray[i];
        j++;
        continue;
      };
    }

    i++;
  }

  document.getElementById('string-matches').value = matchValues;
}

function getValues() {
  var baseVal = document.getElementById('base-string').value;
  var valToCompare = document.getElementById('tocompare-string').value;

  if(baseVal.trim() === valToCompare.trim()) {
    document.getElementById('string-matches').value = 'Values can\'t be repeated';
    return;
  }

  repeteadChrats(baseVal, valToCompare);
}

document.getElementById('matches-trigger').addEventListener('click', getValues);
