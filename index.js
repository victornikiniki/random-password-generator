function generatePassword(passwordLength, 
                        includeLowerCase, 
                        includeUpperCase, 
                        includeNumbers, 
                        includeSymbols){ 

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz"; 
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const numberChars = "0123456789"; 
    const symbolChars = "!@#$%^&*()_+-=/.,><:;|"
    const min = 6; 
    const max = 18;

    let allowedChars = ""; 
    let password = ""; 

    allowedChars += includeLowerCase ? lowerCaseChars : ""; 
    allowedChars += includeUpperCase ? upperCaseChars : ""; 
    allowedChars += includeNumbers ? numberChars : ""; 
    allowedChars += includeSymbols ? symbolChars : ""; 

    const result = document.getElementById("password")

    if (passwordLength < min || passwordLength > max){ 
        result.textContent = `Password length must be between ${min} and ${max}`
        return; 
    }

    if (allowedChars.length === 0){ 
        result.textContent = "Select at least one set of characters";
        return;
    }

    for (i = 0; i < passwordLength; i++){ 
        randomIndex = Math.floor(Math.random() * allowedChars.length); 
        password += allowedChars[randomIndex]
    }

    result.textContent = password
}

function handleGenerateClick() {
    const lengthValue = Number(document.getElementById("passwordLength").value); 
    const lower = document.getElementById("includeLowerCase").checked; 
    const upper = document.getElementById("includeUpperCase").checked; 
    const nums = document.getElementById("includeNumbers").checked;  
    const syms = document.getElementById("includeSymbols").checked; 

    generatePassword(lengthValue, lower, upper, nums, syms); 
}
