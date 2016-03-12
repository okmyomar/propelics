
/*
* Write a calculator which evaluates expressions with decimal numbers and the operators + , - , * , / and prints the
* result on the screen (don't use eval() ). No user input for this is needed, instead you will give a string with the
* operation as an input i.e. if it receives 5+4-2 the result printed on screen is 7 .
*
*/

// Create a tokens array
function tokenizer(code) {
    var tokenR = /(([0-9]+(\.\d)?)|\S)/g;
    var tokens = [];
    var current;

    while (current = tokenR.exec(code)) tokens.push(current[0]);

    console.log(tokens);
    return tokens;
}

function solve() {
    var value = document.getElementById('input-calculator').value;
    var tokens = tokenizer(value)
    var operators = ['*', '/', '+', '-'];
    var nextCalculation = [];
    var currentOp = null;

    var functions = [
      function(a, b) {
        return parseFloat(a) * parseFloat(b)
      },
      function(a, b) {
        return parseFloat(a) / parseFloat(b)
      },
      function(a, b) {
        return parseFloat(a) + parseFloat(b)
      },
      function(a, b) {
        return parseFloat(a) - parseFloat(b)
      }
    ];

    for (var i=0; i < operators.length; i++) {
      for (var j = 0; j < tokens.length; j++) {
        if (tokens[j] === operators[i]) {
          currentOp = functions[i];

        } else if (currentOp) {
          nextCalculation[nextCalculation.length-1] = currentOp(nextCalculation[nextCalculation.length-1], tokens[j]);
          currentOp = null;

        } else {
          nextCalculation.push(tokens[j]);
        }
      }

      tokens = nextCalculation;
      nextCalculation = [];
    }

    document.getElementById('input-calculator').value = tokens[0];
}

document.getElementById('calculator-trigger').addEventListener('click', solve);
