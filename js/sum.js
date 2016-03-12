/*
*  Write a program that computes: Gregory-Leibniz sum.
*/

function sum(argument) {
  var k = 1;
  var limit = 1000000;
  var result = 0;

  while(k <= limit) {
    result += Math.pow(-1, k+1) / (2*k-1);
    k++;
  }

  document.getElementById('sum-result').value = (4 * result);
}
