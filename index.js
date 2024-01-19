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

function getRandom(){
    return Math.floor(Math.random()*characters.length);
}

generateEl.addEventListener("click", function() {

    firstPasswordEl.textContent = "";
    secondPasswordEl.textContent = "";

    for(let i=0; i<18; i++){
        let randomIndex = getRandom();
        firstPasswordEl.textContent += characters[randomIndex];
        randomIndex = getRandom();
        secondPasswordEl.textContent += characters[randomIndex];
    }

})


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

