/*
* Write a function that prints the next 20 leap years.
*
* Solution: Following the two main steps:
*   - The year must to be divisible by 4
*   - The year must to not be divisible by 100 or divisible by 400
*/

function showNextLeapYears() {
  var i = 0;
  var nextLeapYears = [];
  var date = new Date();
  var year = date.getFullYear() + 1; // Start always with the next year

  while(i < 20) {

    if(year%4 === 0 && (year%100 !== 0 || year%400 === 0) ) {
      nextLeapYears.push(year);
      i++;
    }

    year++;
  }

  document.getElementById('leap-years').innerHTML = nextLeapYears;
}
