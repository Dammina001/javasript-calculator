const operator = prompt("Enter the operator you want to perform ( either +, -, *, or / ): ");
const number1 = parseFloat(prompt("Enter First Number: "));
const number2 = parseFloat(prompt("Enter Second Number:"));

switch(operator){
    case "+":
        result = number1 + number2;
        alert(result);
        break;
    case "-":
        result = number1 - number2;
        alert(result)
        break;
    case "*":
        result = number1 * number2;
        alert(result); 
        break;
    case "/":
        result = number1 / number2;
        alert(result);
        break;
  
}

// if (number > 0){
//     console.log("The number is positive");
// }
// else if (number == 0) { 
//     console.log("The number is 0");
// }
// else {
//     console.log("The  number is negative");
// }