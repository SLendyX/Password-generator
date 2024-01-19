const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
"T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
"y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",
"<",">",".","?",
"/"];


let firstPasswordEl = document.getElementById("password1-el");
let secondPasswordEl = document.getElementById("password2-el");

let generateEl = document.getElementById("getpassword")

let sliderEl = document.getElementById("myRange");
let selectorEl = document.getElementById("selector-el")
let maxLength = 15

let numbersEl = document.getElementById("numbers");
let symbolsEl = document.getElementById("symbols")


sliderEl.addEventListener("input", function(){
    selectorEl.textContent = `Password length: ${sliderEl.value}`
    maxLength = sliderEl.value;
})


function getRandom(numbers, symbols){
    if(!numbers && symbols){
        let ok = Math.floor(Math.random()*2);

        if(ok){
            return Math.floor(Math.random()*52);
        }else
            return Math.floor((Math.random()*58+124)/2)

    }else if(numbers && !symbols){
        return Math.floor(Math.random()*62);
    }else if(!numbers && !symbols){
        return Math.floor(Math.random()*52);
    }else
        return Math.floor(Math.random()*characters.length);

}



generateEl.addEventListener("click", function() {

    firstPasswordEl.textContent = "";
    secondPasswordEl.textContent = "";

    
    if(!numbersEl.checked && symbolsEl.checked){
        for(let i=0; i<maxLength; i++){
            let randomIndex = getRandom(false, true);
            firstPasswordEl.textContent += characters[randomIndex];
            randomIndex = getRandom(false, true);
            secondPasswordEl.textContent += characters[randomIndex];
            
        }
    }else if(numbersEl.checked && !symbolsEl.checked){
        for(let i=0; i<maxLength; i++){
            let randomIndex = getRandom(true, false);
            firstPasswordEl.textContent += characters[randomIndex];
            randomIndex = getRandom(true, false);
            secondPasswordEl.textContent += characters[randomIndex];
            
        }
    }else if(!numbersEl.checked && !symbolsEl.checked){
        for(let i=0; i<maxLength; i++){
            let randomIndex = getRandom(false, false);
            firstPasswordEl.textContent += characters[randomIndex];
            randomIndex = getRandom(false, false);
            secondPasswordEl.textContent += characters[randomIndex];
            
        }
    }else{
        for(let i=0; i<maxLength; i++){
            let randomIndex = getRandom(true, true);
            firstPasswordEl.textContent += characters[randomIndex];
            randomIndex = getRandom(true, true);
            secondPasswordEl.textContent += characters[randomIndex];
        
        }
    }

})


//52 0 61 9
//62 ~ 91


firstPasswordEl.addEventListener("click", async function(){ 
    navigator.clipboard.writeText(firstPasswordEl.textContent)

    firstPasswordEl.style.animationName="copy";

    await delay(1000)

    firstPasswordEl.style.animationName="none";
})


secondPasswordEl.addEventListener("click", async function(){ 
    navigator.clipboard.writeText(secondPasswordEl.textContent)

    secondPasswordEl.style.animationName="copy";

    await delay(1000)

    secondPasswordEl.style.animationName="none";
})


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

