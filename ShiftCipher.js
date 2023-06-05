// ----------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: ShiftCipher
// ----------------------------------------------------------------------

// ShiftCipher class

class ShiftCipher {
    constructor(number) {
        this.number = number;
    }

    // Encrypts input string

    encrypt(string) {
        
        // Converts input string to uppercase

        let upperCaseString = string.toUpperCase();

        // Converts uppercase string to array

        let array = Array.from(upperCaseString);

        // Sets alphabet array

        const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        
        // Sets new array

        let newArray = [];

        // Iterates through input string array

        for (let element of array) {
        
            // Shifts character and pushes it to newArray if input character is a letter

            if (alphabet.includes(element)) {
        
                let index = alphabet.indexOf(element);
                let indexOfReplacement = index + this.number;
            
                if (indexOfReplacement > 25) {
                    indexOfReplacement = indexOfReplacement -26;
                }
            
                let replacement = alphabet[indexOfReplacement];
                newArray.push(replacement);
            }
    
            // Pushes input character to newArray without changes if input character is not a letter

            else {
                newArray.push(element);    
            }
        }

        // Converts newArray to string and returns newString

        let newString = newArray.join("");    
        return newString;
                
    }

    // Decrypts input string

    decrypt(string) {
        
        // Converts input string to lowercase

        let lowerCaseString = string.toLowerCase();

        // Converts lowercase string to array

        let array = Array.from(lowerCaseString);

        // Sets alphabet array

        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
        // Sets new array

        let newArray = [];

        // Iterates through input string array

        for (let element of array) {
        
            // Shifts character and pushes it to newArray if input character is a letter

            if (alphabet.includes(element)) {
        
                let index = alphabet.indexOf(element);
                let indexOfReplacement = index - this.number;
            
                if (indexOfReplacement < 0) {
                    indexOfReplacement = indexOfReplacement +26;
                }
            
                let replacement = alphabet[indexOfReplacement];
                newArray.push(replacement);
            }
    
            // Pushes input character to newArray without changes if input character is not a letter

            else {
                newArray.push(element);    
            }
        }

        // Converts newArray to string and returns newString

        let newString = newArray.join("");    
        return newString;
                
    }
}

// Tests ShiftCipher

const cipher = new ShiftCipher(2);
console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'
