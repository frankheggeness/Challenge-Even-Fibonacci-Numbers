/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  var fibArray = [1, 2];
  function fibMaker() {
    var fib1 = 1;
    var fib2 = 2;

    var fibonacci = fib1 + fib2;
    while (fibonacci < maxFibValue) {
      fibonacci = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibonacci;
      fibArray.push(fibonacci);
    }
    return fibArray;
  }
  fibMaker();

  for (i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 === 0) {
      sum += fibArray[i];
    }
  }

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;

  //define your base case, validate your input

  var fibArray = [1, 2];
  function fibMaker() {
    var fib1 = 1;
    var fib2 = 2;

    var fibonacci = fib1 + fib2;
    while (fibonacci <= maxFibValue) {
      fibonacci = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibonacci;
      if (fibonacci < maxFibValue) {
        fibArray.push(fibonacci);
      }
    }
    return fibArray;
  }
  fibMaker();
  highest = fibArray.pop();

  return highest;
}

function _oddFibs(maxFibValue) {
  var sum = 0;
  var fibArray = [1, 2];
  function fibMaker() {
    var fib1 = 1;
    var fib2 = 2;

    var fibonacci = fib1 + fib2;
    while (fibonacci <= maxFibValue) {
      fibonacci = fib1 + fib2;
      fib1 = fib2;
      fib2 = fibonacci;
      fibArray.push(fibonacci);
    }
    return fibArray;
  }
  fibMaker();
  for (i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 === 1) {
      sum += fibArray[i];
    }
    return sum;
  }
}
/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber,
  oddFibs: _oddFibs
};
