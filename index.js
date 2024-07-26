let displayEl = document.getElementById("display-el")
let passwordEl = document.getElementById("password-el")
let generateEl = document.getElementById("generate-el")

let smallLetters = [
                    'a', 'b', 'c', 'd', 'e', 'f', 
                    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
                    'w', 'x', 'y', 'z'
                ]
let capitalLetters = [
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                    'W', 'X', 'Y', 'Z'
                ]
let specialCharacters = [
                    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', 
                    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
                ]

let length = 1
displayEl.textContent = length +" Characters"

function add(){
    displayEl.textContent = length + " Characters"
    if (length > 9){
        length = 10
    }else {
        length++
    }
}
function decrease(){
    displayEl.textContent = length + " Characters"
    if (length < 1){
        length = 0
    }else{
        length--
    }
}

if (length < 1){
    length = 0
}
passwordEl.textContent = ":Password Here:"


let pass = []

function generate() {

    passwordEl.textContent = ''
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * 26)
        pass.push(smallLetters[random])
    }
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * 26)
        pass.push(capitalLetters[random])
    }
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * 23)
        pass.push(specialCharacters[random])
    }
    create()
}

function create(){
    for (let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * pass.length)
        passwordEl.textContent += pass[random]
    }
}







   
