let displayEl = document.getElementById("display-el")
let passwordEl = document.getElementById("password-el")
let password = []
passwordEl.textContent = ""
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


function random(){
    let randomSmallLetter = Math.floor(Math.random() * 26 ) 
    console.log(smallLetters[randomSmallLetter]) 
}
random()




   
