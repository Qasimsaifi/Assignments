//Problem No. 1



// function factorial(n) {
// if (n === 0) {
//  return 1;
// }
//  return n * factorial(n - 1);
// }
// let fact = factorial(5)
// console.log(fact);




// Problem No . 2

// function sumofdigits(n){ 
// let sum = 0; while (n > 0) 
// {

// let digit = n % 10; sum += digit; n = Math.floor(n / 10);

// }

//  return sum; 

// }

// console.log(sumofdigits(123));

// Problem No. 3 Part 1

// function isPrime(num) {
// if (num <= 1) return false;
// if (num == 2) return true;

// for (let i = 2; i <= num / 2; i++) {
//    if (num % i == 0) {
//      return false;
//   }
//  }
//  return true;
// }

// console.log(isPrime(23));
// console.log(isPrime(15));


// Problem No 5

// function findLCM (num1, num2) {
// let hcf;
//  for (let i = 1; i <= num1 && i <= num2; i++) {
//   if( num1 % i == 0 && num2 % i == 0) {
//   hcf = i;
//      };
// };
// let lcm = (num1 * num2) / hcf;
// return lcm;
// };
// console.log(findLCM(12 , 18);



// Problem No . 6

function count(num) {
  let numOfDigit = num.toString().length;
  console.log(numOfDigit)
}
count('244');
