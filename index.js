// Initialize variables
let passwordArray = [];
let passwordString = "1234567890!@#$%^&*()~[]QWERTYUIOPASDFGHJKL:;ZXCVBNM<>?,./qwertyuiopasdfghjklzxcvbnm";
let passwordHolderString;

// Array to hold all possible chars
for (let index = 0; index < passwordString.length; index++) {
    // console.log(passwordString.substring(index,index+1));
    passwordArray[index] = passwordString.substring(index,index+1);
    // console.log(passwordArray);
}

// call this function to create a password
function createPassword() {
    passwordHolderString = "";
    for (let pwordIndex = 0; pwordIndex < 8; pwordIndex++) {
        passwordHolderString = passwordHolderString + passwordArray[Math.floor(Math.random() * passwordString.length)];
    }
    return passwordHolderString;
}

// call this function to display the 4 passwords
function generatePassword() {
    document.getElementById("rectangle95txt").textContent = createPassword();
    document.getElementById("rectangle96txt").textContent = createPassword();
    document.getElementById("rectangle97txt").textContent = createPassword();
    document.getElementById("rectangle98txt").textContent = createPassword();

}





