function generatePassword ( includeLowercase ,includeNumbers
    , includeUppercase , includeSymbols , length
){

    let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let numberChars = '0123456789'
    let symbolChars = '!@#$%^&*()_+'

    let allChars = ''
    let password = '' ; 

    allChars += includeLowercase ? lowercaseChars : ''
    allChars += includeUppercase ? uppercaseChars : ''
    allChars += includeNumbers ? numberChars : ''
    allChars += includeSymbols ? symbolChars : ''

    if(length <= 0 ){
        return 'Password length should be greater than 0'
    }
return ; 
}




let passlength  = 12 
let includeLowercase = true
let includeUppercase = true 
let includeNumbers = true
let includeSymbols = true

const password = generatePassword(includeLowercase, includeNumbers, includeUppercase, includeSymbols, passlength)
console.log(' Generated Password: ', password )