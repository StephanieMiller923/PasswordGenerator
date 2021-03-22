// Generator Functions

// Function that returns a random index (number) of a string value that is passed in as an argument!
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}
console.log(randomIndex(`example`));

// Functions that returns a random letter using a random index in the "letter" string variable!
function randomLetter(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    return letters[randomIndex(letters)];
}
console.log(randomLetter());

function getRandomUpper(){
    // Running the "randomLetter" function to create a random letter and setting that value to the letter variable
    const letter = randomLetter();
    // Changing the letter to an Uppercase letter and returning it from the function
    return letter.toUpperCase();
}
console.log(getRandomNumber());

function getRandomLower(){
    // Running the "randomLetter" function to create a random letter and returning it from the function
    return randomLetter();
}
console.log(getRandomLower());

function getRandomNumber(){
    // Returning a random number using a random index in the "numbers" string
    const numbers = `1234567890`;
    return numbers[randomIndex(numbers)];
}
console.log(getRandomNumber());

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    // Returning a random symbol using a random index in the "symbols" string
   return symbols[randomIndex(symbols)];
}
console.log(getRandomSymbol());

// Object to store all the generator functions
const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Selecting the DOM elements
const resultEL = document.querySelector(`#result`);
const lengthEL = document.querySelector(`#length`);
const uppercaseEl = document.querySelector(`#uppercase`);
const lowercaseEl = document.querySelector(`#lowercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const generateEl = document.querySelector(`#generate`);
const clipboardEl = document.querySelector(`#clipboard`);

// Generate Password Function (Function that accepts true or false values  as well as a number as arguments.)
function generatePassword(upper, lower, number, symbol, length){
    // console.log(upper, lower, number, symbol, length);

    // 1. Create the password variable
    let generatedPassword = ``;

    // 2. Filter out unchecked types
    // True and False values can be added together (True is 1 and False is 0)
    const typesCount = upper + lower + number + symbol;
    console.log(typesCount);

    // If user has not selected any of the four options, then display alert and return an empty string from the function
    if (typesCount === 0){
        alert(`Please select at least one option`);
        return "";
    }

    let typesArr = [
        [`upper`, upper],
        [`lower`, lower],
        [`number`, number],
        [`symbol`, symbol]
    ];

    // The filter method creates a new array with all the elements that pass the test implemented by the provided function.
    typesArr.filter(item => {
        console.log(item[1]);
        return item[1];
    });
    console.log(typesArr);

    // 3. Loop over the length and call the generator function for each checked type
    // Building password with a for loop!
    for (i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = type[0];
            console.log(funcName);
            generatedPassword += randomFunc[funcName]();
            console.log(generatedPassword);
        });
    }

    // 4. Add the final passwored to the password variable and return it from the function
    // Removing extra characters if necessary ()
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

// generatePassword(true, false, true, false, 10);

// Event listener for when the "Generate Password" button is clicked
generateEl.addEventListener(`click`, () => {
    // Changing the value from a string to a number
    const length = parseInt(lengthEl.value);

    // Checking if the following options/checkboxes are selected/checked, and setting the returned true/false values to the respective variables!
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    console.log(hasUpper, hasLower, hasNumber, hasSymbol, length);
    
});


