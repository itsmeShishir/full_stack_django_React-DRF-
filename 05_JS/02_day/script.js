// Data Types in Js -
// String , 
  // -> Set of character in double or single quote
name = "hari"
age = '27'
console.log(name, age);
console.log(typeof name);
// Number, 
 num1 = 10 // int
 num2 = 40.50 // float or double
 console.log(num1, num2);
 console.log(typeof num1);
// bool , 
  // true, false
  isMale = true;
  console.log(isMale);
  console.log(typeof isMale);
// null, 
  let a = null;
  console.log(a);
  console.log(typeof a);
// undefined, 
var bc;
console.log(bc);
console.log(typeof bc);
// object,  -> key value pair
let one = {
  "name": "shishir",
}
console.log(one);
console.log(typeof one);
// array,  -> collection of elements in []
let arr = [1,2,3,4.5, "shishir"]
console.log(arr);
console.log(typeof arr);

//  Symbols
let sym = Symbol();
console.log(sym);
console.log(typeof sym);
// set, 
let setone = new Set();
console.log(setone);
console.log(typeof setone);
// map
let mapone = new Map();
console.log(mapone);
console.log(typeof mapone);

// Operators and operands
//  5+5  = 10
// operatos -> +
// opearnds -> number 5, 5
// 6 operators 
// 1. Arthmetic -> +, -, *, /, %, **,
console.log(5+5);
console.log(5-5); 
console.log(5*5);
console.log(5/5);
console.log(5%5);
console.log(5**5);
// 2. Assignment -> =, +=, -=, *=, /=
let asign = 10
console.log(asign+=5);
console.log(asign-=5);
console.log(asign*=5);
console.log(asign/=5);
console.log(asign%=5);
console.log(asign**=5);
// 3. Relational -> ==, !=, >, <, >=, <= (Bool)
console.log(5>5);
console.log(5<5);
console.log(5==5);
console.log(5!=5);
console.log(5>=5);
console.log(5<=5);
console.log("5"===5);
console.log("5"!==5);
// 4. Logical -> &&, ||, !
// &&
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// ||
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// not !
console.log(!true);
console.log(!false);
// 5. Bitwise -> &, |, ~, <<, >>
console.log(5&5); 
console.log(5|5);
console.log(~5);
console.log(5<<5);
console.log(5>>5);

// 6. Ternary -> condition ? true : false , typeof , void
age = 19;
age > 18 ? console.log("you can vote") : console.log("you can't vote");

// 8 . String Operators -> +,
name = "sharma"
console.log("hello" + " " + name);

  // number -> 10
  // string -> "10"
  number1 = 22
  number2 = "22"
  number3= "33"
  console.log(number1 + number2);
  console.log(number3 + number2);

//  wap to print the given year is leap year or not 
year = 2082
year % 4 == 0 ? console.log("its leap year"): console.log("not a leap year");

// check if the given value is odd or even
let numbers = 179
numbers % 2 != 1 ? console.log("even"):console.log("odd");

// Date
date = new Date()
console.log(date);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleString());
console.log(date.getDay());
console.log(date.getMonth());

// Math
console.log(Math.pow(3, 3));
console.log(Math.sqrt(4));
console.log(Math.random());
console.log(Math.round(3.3));
console.log(Math.floor(5));
console.log(Math.ceil(3.3));


