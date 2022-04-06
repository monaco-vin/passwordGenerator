var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var userchoice = getUserChoice()
    var possibleChoices = []
    var finalPassword = []
    if (userchoice.case == true) {
        var lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
        possibleChoices = possibleChoices.concat(lowerCaseCharacters)
    }

    if (userchoice.case2 == true) {
        var upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
        possibleChoices = possibleChoices.concat(upperCaseCharacters)
    }

    if (userchoice.specials == true) {
        console.log("special")
        var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
        possibleChoices = possibleChoices.concat(specialCharacters)
    }

    if (userchoice.numbers == true) {
        console.log("numbers")
        var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        possibleChoices = possibleChoices.concat(numericCharacters)
    }
    console.log(possibleChoices)
    for (i = 0; i < userchoice.length; i++) {
      var randomIndex = Math.floor(Math.random() * possibleChoices.length)
       finalPassword.push(possibleChoices[randomIndex])
    }
    return finalPassword.join("")
}

function getUserChoice() {
    var numberOfC = parseInt(prompt("Please enter amount of characters you would like to use (between 8 and 128)"))

    if (numberOfC < 8 || numberOfC > 128) {
        alert("Please choose a number between 8 and 128")
        return
    }
    var useLowerCase = confirm("Would you like to use lowercase?")
    var useUpperCase = confirm("Would you like to use uppercase?")
    var useSpecial = confirm("Would you like to use special characters?")
    var useNumber = confirm("Would you like to use numbers?")

    var userchoiceObject = {
        length: numberOfC,
        case: useLowerCase,
        case2: useUpperCase,
        specials: useSpecial,
        numbers: useNumber,
    }

    if (useLowerCase == false && useUpperCase == false && useSpecial == false && useNumber == false) {
        alert("Please make at least 1 selection")
        return
    }

    return userchoiceObject
}

generateBtn.addEventListener("click", writePassword)
