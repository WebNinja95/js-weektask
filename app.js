//Ex1
const booleanToString = (value) => {
    if(value != true && value != false){
        return console.log('this is a yes or no type question, plz enter boolean type!');
    }
    return value ? "Yes" : "No";
  };


  //Ex2
  const LowerNumsSum = (numbers) =>{
    if (!Array.isArray(numbers) || numbers.length < 4) {
        return console.log('Input must be an array with at least four positive integers');
      }
      for (const num of numbers) {
        if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
          return console.log('all the elements in the array should be integer and positive!');
        }
      }
      numbers.sort((a, b) => a - b);
  
      return numbers[0] + numbers[1];
  }
 //Ex2.2
 function binaryArrayToDecimal(binaryArray) {
    const binaryString = binaryArray.join('');
    return parseInt(binaryString, 2);
  }
//Ex2.3
function findNextSquare(n) {
    if(typeof(n) !== 'number'){
        return console.log('plz enter a number!');
    }
    const sqrt = Math.sqrt(n);
    
    if (Number.isInteger(sqrt)) {
      const nextSqrt = sqrt + 1;
      return nextSqrt * nextSqrt;
    }
    
    return -1;
  }
  //Ex2.4
  function findUniq(arr) {
    if (!Array.isArray(arr) || arr.length < 3) {
        return console.log('Input must be an array with at least 3 integers');
      }
      for (const num of arr) {
        if (typeof num !== 'number') {
          return console.log('all the elements in the array should be integer!');
        }
      }

    if (arr[0] !== arr[1]) {
      if (arr[0] === arr[2]) {
        return arr[1]; 
      } else {
        return arr[0]; 
      }
    } else {
      return arr.find(num => num !== arr[0]); 
    }
  }
  //Ex2.5
  function summation(num) {
    if(typeof(num) != 'number'){
        return console.log('plz enter a number');
    }
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }
  //Ex2.6
  function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  //Ex2.7
  function basicOp(operation, value1, value2) {
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        if (value2 === 0) {
          console.log('Division by zero is not allowed.');
        }
        return value1 / value2;
      default:
        console.log('invalid operation');
    }
  }
  //Ex3.1
  function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = p0 + (p0 * (percent / 100)) + aug;
        years++;
    }
    return years;
}
//Ex 4.1

function fibonacciRecursive(n) {
    if(typeof(n) !== 'number'){
        return console.log('plz enter a number');
    }
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(4));

//Ex4.2
