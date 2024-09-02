const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const upperCaseEl = document.getElementById('uppercase');
const lowerCaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = resultEl.value;  
    
    if (!password) { return; }
    
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to clipboard');
});

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowerCaseEl.checked;
    const hasUpper = upperCaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
    resultEl.value = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);  // Change to .value for textarea
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    
 
    if (typesCount === 0) {
        return '';
    }
    
   
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    
    const finalPassword = generatedPassword.slice(0, length);
    
    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}






const floatingBtn = document.querySelector('.floatingBtn');
const closeBtn = document.querySelector('.closeBtn');
const socialPanelContainer = document.querySelector('.socialPanelContainer');

floatingBtn.addEventListener('click', () => {
	socialPanelContainer.classList.toggle('visible')
});

closeBtn.addEventListener('click', () => {
	socialPanelContainer.classList.remove('visible')
});
