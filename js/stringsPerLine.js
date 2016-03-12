
/*
* Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For
* example ["November", "is", "the", "coolest", "month", "of", "the", "Year"] gets printed as:
*
*    ************
*    * November *
*    * is       *
*    * the      *
*    * coolest  *
*    * month    *
*    * of       *
*    * the      *
*    * Year     *
*    ************
*
*  Solution: Find the largest string and take it as base for add spaces to other strings until
*  all of them has the same width
*
*  Note: The visual length will be different cause of the font.
*/


/* Add a line based on the max string lenth added */
function addBaseLine(text, fullLineLength) {
  for(var i=0; i<fullLineLength; i++) text += '*';
  text += '\n';
  return text;
}

/* Create the full box of strings */
function showStringPerLine(stringsArray, maxLength) {
  var fullLineLength = maxLength + 4;
  var finalText = '';

  finalText = addBaseLine(finalText, fullLineLength);

  for(var i=0; i<stringsArray.length; i++) {
    var lackOfSpaces = (fullLineLength - 1) - (stringsArray[i].length + 2);
    finalText += '* ' + stringsArray[i];
    for(var j=0; j<lackOfSpaces; j++) finalText += ' ';
    finalText += '*\n';
  }

  finalText = addBaseLine(finalText, fullLineLength);
  document.getElementById('string-user-box').value = finalText;
}

/* Gets the input values and calls showStringPerLine function */
function getInputValues() {
  var maxLength = 0;
  var stringsToShow = document.getElementsByClassName('strings-user');
  var strings = []

  for (var i=0; i<stringsToShow.length; i++) {
    var currentVal = stringsToShow[i].value

    if (currentVal) {
      if (currentVal.length > maxLength) maxLength = currentVal.length;
      strings.push(currentVal);
    }
  }

  showStringPerLine(strings, maxLength);
}

document.getElementById('strings-user-trigger').addEventListener('click', getInputValues);
