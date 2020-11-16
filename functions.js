// Named function
function sayHello(greeting, name = "World"){
    return `${greeting} ${name}!`;
}

// console.log("sayHello message:", sayHello("Hi", 'Ian'));
// console.log("sayHello message:", sayHello("Hi"));

// Anonymous function
var add = function(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

// console.log("1 + 3 with add function:", add(1, 3));

// arrow function with explicit return
var multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

// console.log("multiply 2 by 5:", multiply(2, 5));
// arrow function implicit return (on single line) if single expression 
var multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;


console.log("multiply 2 by 5:", multiply(2, 5));