/*
* Write a function that receives 1 Object parameter that can contain strings, 'boolean', integer, undefined and null values. It
* should create and return an array of 3 key-value objects. The first include all strings and integer key values, the second
* all boolean key values and last one all the null key values.
*
* Notes:
*   * In javascript there is not a type known as "integer" so we are taking all number values as integer,
*     in javascript all number values ar float point values.
*/

/*
* Receive an object as parameter and taking the type of each element into the object three new
* objects will be created and inserting into each group the vlaue with its name:
*   - stringNumbers: string and numbers values
*   - bools: boolean values
*   - null: only null values ()
*/
function transformObject(obj) {
  var stringNumbers = {};
  var bools = {};
  var nulls = {};
  var groups = [stringNumbers, bools, nulls];
  var finalValue = '';

  var cases = {
    string: function (key, val) { stringNumbers[key] = val; },
    number: function (key, val) { stringNumbers[key] = val; },
    boolean: function (key, val) { bools[key] = val; },
    null: function (key) { nulls[key] = null; }
  }

  for(var key in obj) {
    var currentValue = obj[key];
    var currentType = typeof currentValue;

    if (cases[currentType]) cases[currentType](key, currentValue);
    else if (currentValue === null) cases['null'](key);
  }

  finalValue = 'number and strings:' + JSON.stringify(groups[0]) + '\n'
    + 'booleans:' + JSON.stringify(groups[1]) + '\n'
    + 'nulls:' + JSON.stringify(groups[2]);

  document.getElementById('array-result').value = finalValue;
}

/* Returns a number between 0 and 9 */
function quantityRandom() {
  return Math.floor(Math.random() * 10);
}

/* Returns a random string value created with base 36 and substracting 10 digits */
function createRandomName() {
  var randomVal =  Math.random();
  return randomVal.toString(36).substring(5, 15);
}

/*
* Creates and fills a simple object with all kind of primitives: number, string, boolean, null and undefined,
* the filling process is totally by random created values, the goal is only separate that kind of primitives
* in a second function by groups and return an array with those groups.
*/
function createObject() {
  var numberElements = quantityRandom();
  var stringElements = quantityRandom();
  var booleanElements = quantityRandom();
  var nullElements = quantityRandom();
  var undefinedElements = quantityRandom();
  var baseObject = {};

  for (var i = 0; i< numberElements; i++) { baseObject[createRandomName()] = createRandomName() };
  for (var i = 0; i< stringElements; i++) { baseObject[createRandomName()] = quantityRandom() };
  for (var i = 0; i< booleanElements; i++) { baseObject[createRandomName()] = true };
  for (var i = 0; i< nullElements; i++) { baseObject[createRandomName()] = null };
  for (var i = 0; i< undefinedElements; i++) { baseObject[createRandomName()] = undefined };

  document.getElementById('random-object').value = [JSON.stringify(baseObject)];
  transformObject(baseObject);
}

document.getElementById('create-object').addEventListener('click', createObject);
