const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiply(a, b) {
    return a * b;
}


function greeting(name) {
    return `Hello, ${name}!`;
}


const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);


function calculateBMI(weight, height) {
    return weight / (height * height);
}
const stringLength = (str) => str.length;


function reverseString(str) {
    return str.split('').reverse().join('');
}


const greetPerson = (person) => `Hello, ${person.first} ${person.last}!`;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const capitalizeArray = (strings) => strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));


function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function displayMenu() {
    console.log(`
Choose a function to run:
1. Multiply
2. Greeting
3. Sum Array
4. Calculate BMI
5. String Length
6. Reverse String
7. Greet Person
8. Capitalize
9. Capitalize Array
10. Is Palindrome
11. Exit
`);
}

function main() {
    displayMenu();
    rl.question('Enter the number of the function you want to run: ', (choice) => {
        const functionNumber = parseInt(choice);
        if (functionNumber === 11) {
            console.log('Exiting the program. Goodbye!');
            rl.close();
            return;
        }
        switch (functionNumber) {
            case 1:
                rl.question('Enter the first number: ', (firstInput) => {
                    const a = parseFloat(firstInput);
                    rl.question('Enter the second number: ', (secondInput) => {
                        const b = parseFloat(secondInput);
                        console.log('\n\n\nResult:', multiply(a, b));
                        main();
                    });
                });
                break;
            case 2:
                rl.question('Enter a name: ', (name) => {
                    console.log('\n\n\nResult:', greeting(name));
                    main();
                });
                break;
            case 3:
                rl.question('Enter numbers (space-separated): ', (input) => {
                    const numbers = input.split(' ').map(Number);
                    console.log('\n\n\nResult:', sumArray(numbers));
                    main();
                });
                break;
            case 4:
                rl.question('Enter weight (kg): ', (weightInput) => {
                    const weight = parseFloat(weightInput);
                    rl.question('Enter height (m): ', (heightInput) => {
                        const height = parseFloat(heightInput);
                        console.log('\n\n\nResult:', calculateBMI(weight, height));
                        main();
                    });
                });
                break;
            case 5:
                rl.question('Enter a string: ', (str) => {
                    console.log('\n\n\nResult:', stringLength(str));
                    main();
                });
                break;
            case 6:
                rl.question('Enter a string: ', (str) => {
                    console.log('\n\n\nResult:', reverseString(str));
                    main();
                });
                break;
            case 7:
                rl.question('Enter first name: ', (firstName) => {
                    rl.question('Enter last name: ', (lastName) => {
                        console.log('\n\n\nResult:', greetPerson({ first: firstName, last: lastName }));
                        main();
                    });
                });
                break;
            case 8:
                rl.question('Enter a string: ', (str) => {
                    console.log('\n\n\nResult:', capitalize(str));
                    main();
                });
                break;
            case 9:
                rl.question('Enter strings (space-separated): ', (input) => {
                    const strings = input.split(' ');
                    console.log('\n\n\nResult:', capitalizeArray(strings));
                    main();
                });
                break;
            case 10:
                rl.question('Enter a string: ', (str) => {
                    console.log('\n\n\nResult:', isPalindrome(str));
                    main();
                });
                break;
            default:
                console.log('Invalid choice!');
                main();
                break;
        }
    });
}

main();
