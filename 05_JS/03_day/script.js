// // condition -> true or false
// // 1. if else else if 
// // 2. switch case
// // 3. ternary operator

// // if 
// age = prompt("enter your age");

// if(age = 18){
//     console.log("you can drive");
// }
// // else
// if(age < 18){
//     console.log("you can not drive");
// }
// else{
//     console.log("you can drive from else");
// }
// // else if 
// grade = prompt("enter your grade");
// if (grade >=80){
//     console.log("you got a")
// }
// if (grade >=60 && grade <=79){
//     console.log("you got b")
// }
// if (grade >=40 && grade <=59){
//     console.log("you got c")
// }
// if (grade <40){
//     console.log("you got f")
// }
// else{
//     console.log("you did not attempt");
    
// }

// // else if
// grade = prompt("enter your grade");
// if (grade >=80){
//     console.log("you got a")
// }
// else if (grade >=60 && grade <=79){
//     console.log("you got b")
// }
// else if (grade >=40 && grade <=59){
//     console.log("you got c")
// }
// else if (grade <40){
//     console.log("you got f")
// }
// else{
//     console.log("you did not attempt");
// }

// // switch
// days = new Date()
// dday = days.getDay()
// switch(dday){
//     case 0:
//         console.log("today is subday");
//         break;
//     case 1:
//         console.log("today is monday");
//         break;
//     case 2:
//         console.log("today is tuesday");
//         break;
//     case 3:
//         console.log("today is wednesday");
//         break;
//     case 4:
//         console.log("today is thursday");
//         break;
//     case 5:
//         console.log("today is friday");
//         break;
//     case 6:
//         console.log("today is saturday");
//         break;
//     default:
//         console.log("none of the above day");
// }

// // arrays
// daysss = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
// console.log(daysss[dday]);



// // Question
// // Write a program that checks if a person is eligible to vote based on their age. (use if else)
// // Write a program that determines the day of the week based on a numeric day value . (use Switch case)
// // Write a program that assigns a letter grade based on a numerical score.( use if, elseif, else)
// // Write a program that identifies the season based on the month of the year.(switch or if, elseif, else)
// // Write a program that checks if a given number is even or odd. (if condition)Write a program that compares two numbers and determines which one is greater, smaller, or if they are equal.(comparison operation with if, else)
// // Write a program that assesses the strength of a password based on its length and content. (/AZ/.test(password) && /09/.test(password)) 
// // Write a program that classifies a person into age groups Child, Teenager, Adult, Senior) based on their age. (use if else if else)JS (condition)3
// // Write a program that determines the weather condition Hot, Warm, Cool, Cold) based on the temperature. (use if else condition)
// // Write a program that validates if a given email address contains both "@" and ".". (use email.includen function)JS (condition)4

// loops -> continious task until the condition is false
// 1. for loop
// for(initialization; condition; increment or decrement){
    // body
// }
// 2. while loop
// initalized
// white(condition){
        // body
        // inc/dec
// }
// 3. do while
// do{
    // body
    // inc/dec
// }while(condition)
for (let i = 0; i<=10; i++){
    console.log("for loop",i);
}

let i = 0;
while(i<=10){
    console.log("while loop", i);
    i++;
}
console.log(i);
i = 0
do{
  console.log("do while", i);
  i++;
}while(i<=10);
// breaking statement -> break, continue
// 1. break -> stop
// 2. continue

for (let i = 0; i<=10; i++){
    if(i==5){
        break;
    }
    console.log("for loop",i);
}

for (let i = 0; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log("for loop",i);

}
// - Write a for loop that prints even numbers from 0 to 10.
// - Create a while loop that counts down from 10 to 1.
// - Implement a do-while loop that asks the user for input until they enter 'quit'.
// - Use a for loop with a break statement to find the first multiple of 7 between 1 and 100.
// - Write a loop that prints numbers from 1 to 20, but skips multiples of 3 using the continue statement.

//  wap to print the table from 0 to 10 
for(let i = 0; i<=10; i++){
    for(let j = 0; j<=10; j++){
        console.log(`${i} * ${j} = ${j * i}`);
    }
}